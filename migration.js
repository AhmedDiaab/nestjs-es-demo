const { execSync } = require('child_process');

// Get the migration name from the command-line argument or use a default name
const name = process.argv[2];

// Run the TypeORM migration generation command
try {
  if(!name) {
  console.error(`Migration name is required`);
  process.exit(1);
  }
  execSync(`pnpm typeorm migration:generate -d ./src/database/config/database.config.ts src/database/migrations/${name}`, { stdio: 'inherit' });
} catch (error) {
  console.error(`Error executing command: ${error.message}`);
  process.exit(1);
}
