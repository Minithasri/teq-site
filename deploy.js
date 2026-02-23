import ftp from 'basic-ftp';
import chalk from 'chalk';
import cliProgress from 'cli-progress';
import fg from 'fast-glob';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';
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

async function deploy() {
  const client = new ftp.Client();
  client.ftp.verbose = false;

  console.log('\n🚀 Starting Next.js FTP Deployment...\n');

  try {
    // Ensure build exists
    await fs.access(localBuildPath);

    console.log(chalk.blue('🔌 Connecting to FTP server...'));
    await client.access(config);
    console.log(chalk.green('✅ Connected successfully!\n')); // Collect files from out folder

    console.log(chalk.blue('📦 Collecting files from /out...'));

    const uploadEntries = await fg('**/*', {
      cwd: localBuildPath,
      dot: true,
      onlyFiles: true,
      ignore: ['**/.DS_Store', '**/Thumbs.db'],
    });

    if (uploadEntries.length === 0) {
      throw new Error('No files found in /out. Run "next build && next export" first.');
    }

    console.log(chalk.cyan(`Found ${uploadEntries.length} files\n`)); // Progress bar

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
        const remoteDir = path.posix.dirname(remoteFilePath); // Ensure directory exists

        await client.ensureDir(remoteDir); // Upload (overwrites automatically)

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
