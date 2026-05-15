import ftp from 'basic-ftp';
import chalk from 'chalk';
import cliProgress from 'cli-progress';
import fg from 'fast-glob';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// FTP Configuration
const config = {
  host: process.env.FTP_HOST,
  user: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD,
  secure: false,
  timeout: 30000,
};

// ✅ IMPORTANT: Use Next.js export folder
const localBuildPath = path.resolve(__dirname, './out');

// ✅ IMPORTANT: Upload directly to public_html
const remoteBasePath = '/';

// ─── Yozigo Bot Tracker Injection ────────────────────────────────────────────
//
// Next.js static export creates one HTML file per route (unlike CRA's single
// index.html). So we wrap EVERY .html file in the out/ folder with the PHP
// tracker, rename it to .php, and patch .htaccess to serve .php files.
//
// This snippet never needs to change — all bot detection lives on the backend.
// Client deploys once, we update everything else on our end.
//
// ─────────────────────────────────────────────────────────────────────────────

const PHP_TRACKER = `<?php
header('Cache-Control: no-store, no-cache, must-revalidate');
$_u='https://yozigo-geo-backend-service.fly.dev/api/v1/crawl/track';
$_p=json_encode(['apiKey'=>'fgeo_194d5c792667e529053bd9d9b77f2363','orgId'=>'ea6fc6cd-e2af-48a9-925b-ee2d5c671fd9','brandId'=>'b0868361-e41c-4416-9600-80b86a17e085','path'=>parse_url($_SERVER['REQUEST_URI']??'/',PHP_URL_PATH),'referer'=>$_SERVER['HTTP_REFERER']??'direct','timestamp'=>gmdate('Y-m-d\\TH:i:s\\Z'),'userAgent'=>$_SERVER['HTTP_USER_AGENT']??'']);
if(function_exists('curl_init')){$_c=curl_init($_u);curl_setopt_array($_c,[CURLOPT_POST=>1,CURLOPT_POSTFIELDS=>$_p,CURLOPT_HTTPHEADER=>['Content-Type: application/json'],CURLOPT_RETURNTRANSFER=>true,CURLOPT_TIMEOUT=>2,CURLOPT_SSL_VERIFYPEER=>false]);@curl_exec($_c);curl_close($_c);}elseif(ini_get('allow_url_fopen')){@file_get_contents($_u,false,stream_context_create(['http'=>['method'=>'POST','header'=>"Content-Type: application/json\\r\\n",'content'=>$_p,'timeout'=>2,'ignore_errors'=>true]]));}
?>
`;

function injectTracker() {
  try {
    const htmlFiles = fg.sync('**/*.html', {
      cwd: localBuildPath,
      dot: true,
      onlyFiles: true,
    });

    if (htmlFiles.length === 0) {
      console.warn(chalk.yellow('⚠️  No .html files found in /out — skipping tracker injection'));
      return;
    }

    let wrapped = 0;
    for (const file of htmlFiles) {
      const htmlPath = path.join(localBuildPath, file);
      const phpPath = htmlPath.replace(/\.html$/, '.php');
      const html = fs.readFileSync(htmlPath, 'utf8');
      fs.writeFileSync(phpPath, PHP_TRACKER + html, 'utf8');
      fs.unlinkSync(htmlPath);
      wrapped++;
    }

    console.log(
      chalk.greenBright(`✓ Yozigo tracker injected into ${wrapped} file(s) (.html → .php)`)
    );

    const htaccessPath = path.join(localBuildPath, '.htaccess');
    if (fs.existsSync(htaccessPath)) {
      let htaccess = fs.readFileSync(htaccessPath, 'utf8');

      if (!htaccess.includes('DirectoryIndex')) {
        htaccess = 'DirectoryIndex index.php\n\n' + htaccess;
      } else {
        htaccess = htaccess.replace(/DirectoryIndex\s+index\.html/g, 'DirectoryIndex index.php');
      }

      htaccess = htaccess.replace(/index\.html/g, 'index.php');

      if (!htaccess.includes('MultiViews') && !htaccess.includes('php')) {
        htaccess += '\n# Serve .php files for extensionless Next.js routes\nOptions -MultiViews\n';
      }

      fs.writeFileSync(htaccessPath, htaccess, 'utf8');
      console.log(chalk.greenBright('✓ .htaccess patched (all existing rules preserved)'));
    } else {
      fs.writeFileSync(
        htaccessPath,
        `DirectoryIndex index.php index.html

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  RewriteCond %{REQUEST_FILENAME}.php -f
  RewriteRule ^(.+)$ $1.php [L]

  RewriteRule ^ index.php [L]
</IfModule>

<IfModule mod_headers.c>
  Header always set X-Frame-Options "SAMEORIGIN"
  Header always set X-Content-Type-Options "nosniff"
  Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
</IfModule>
`,
        'utf8'
      );
      console.log(chalk.greenBright('✓ .htaccess created for Next.js + PHP routing'));
    }
  } catch (err) {
    console.warn(
      chalk.yellow(`⚠️  Yozigo tracker injection failed (deploy will continue): ${err.message}`)
    );
  }
}

injectTracker();

async function deploy() {
  const client = new ftp.Client();
  client.ftp.verbose = false;

  console.log('\n🚀 Starting Next.js FTP Deployment...\n');

  try {
    if (!fs.existsSync(localBuildPath)) {
      throw new Error('Build folder /out not found. Run "next build" first.');
    }

    console.log(chalk.blue('🔌 Connecting to FTP server...'));
    await client.access(config);
    console.log(chalk.green('✅ Connected successfully!\n'));

    console.log(chalk.blue('📦 Collecting files from /out...'));

    const uploadEntries = await fg('**/*', {
      cwd: localBuildPath,
      dot: true,
      onlyFiles: true,
      ignore: ['**/.DS_Store', '**/Thumbs.db'],
    });

    if (uploadEntries.length === 0) {
      throw new Error('No files found in /out. Run "next build" first.');
    }

    console.log(chalk.cyan(`Found ${uploadEntries.length} files\n`));

    const progressBar = new cliProgress.SingleBar({
      format: 'Uploading [{bar}] {percentage}% | {value}/{total} files',
      barCompleteChar: '█',
      barIncompleteChar: '░',
      hideCursor: true,
    });

    progressBar.start(uploadEntries.length, 0);

    let uploaded = 0;
    let failed = 0;

    for (const file of uploadEntries) {
      try {
        const localFilePath = path.join(localBuildPath, file);
        const remoteFilePath = path.posix.join(remoteBasePath, file);
        const remoteDir = path.posix.dirname(remoteFilePath);

        await client.ensureDir(remoteDir);
        await client.uploadFrom(localFilePath, remoteFilePath);

        uploaded++;
      } catch (error) {
        failed++;
        console.log(chalk.red(`\n❌ Failed: ${file}`));
        console.log(chalk.red(error.message));
      }

      progressBar.update(uploaded + failed);
    }

    progressBar.stop();

    console.log(chalk.greenBright(`\n✅ Uploaded: ${uploaded} file(s)`));

    if (failed > 0) {
      console.log(chalk.yellow(`⚠️ Failed: ${failed} file(s)`));
    }

    console.log(chalk.greenBright('\n🎉 Deployment Completed Successfully!\n'));
    console.log(chalk.gray('✔ Existing folders like Backups and weconnect were NOT touched.'));
    console.log(chalk.gray('✔ Only files from /out were overwritten.'));
  } catch (err) {
    console.error(chalk.redBright('\n❌ Deployment Failed'));
    console.error(chalk.red(err.message));
    process.exit(1);
  } finally {
    client.close();
    console.log(chalk.blue('🔌 FTP connection closed.\n'));
  }
}

deploy();
