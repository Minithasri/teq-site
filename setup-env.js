import { execSync } from 'child_process';

console.log('🚀 Setting up development environment...');

// Check Node version
const nodeVersion = process.version;
const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);

if (majorVersion < 18) {
  console.error('❌ Node.js version 18 or higher is required');
  process.exit(1);
}

console.log('✅ Node.js version check passed');

const steps = [
  {
    name: 'Installing dependencies',
    command: 'npm install',
  },
  {
    name: 'Installing ESLint plugins',
    command: 'npm install --save-dev eslint-plugin-unused-imports',
  },
];

// VS Code extensions to install
const vscodeExtensions = [
  'esbenp.prettier-vscode',            // Prettier code formatter
  'dbaeumer.vscode-eslint',            // ESLint integration
  'bradlc.vscode-tailwindcss',         // Tailwind CSS IntelliSense
  'ms-vscode.vscode-typescript-next',  // TypeScript support
  'formulahendry.auto-rename-tag',     // Auto-rename HTML/JSX tags
  'christian-kohler.path-intellisense',// Path autocomplete
  'usernamehw.errorlens',              // Enhanced error display
  'wix.vscode-import-cost',            // Display import package size
];

function installVSCodeExtensions() {
  console.log('🔌 Installing VS Code extensions...');

  for (const extension of vscodeExtensions) {
    try {
      console.log(`   📦 Installing ${extension}...`);
      execSync(`code --install-extension ${extension}`, { stdio: 'inherit' });
    } catch (error) {
      console.log(`   ⚠️  Failed to install ${extension}, you may need to install it manually`);
    }
  }
}

try {
  for (const step of steps) {
    console.log(`📦 ${step.name}...`);
    execSync(step.command, { stdio: 'inherit' });
  }

  // Run VS Code extension installation
  installVSCodeExtensions();

  console.log('🎉 Development environment setup complete!');
  console.log('\n📋 Available commands:');
  console.log('  npm run dev          - Start development server');
  console.log('  npm run lint         - Run Next.js lint');
  console.log('  npm run lint:fix     - Auto-fix ESLint issues');
  console.log('  npm run fix:all      - Fix all linting and formatting');
  console.log('  npm run type-check   - Run TypeScript checks');

} catch (error) {
  console.error('❌ Setup failed:', error.message);
  process.exit(1);
}
