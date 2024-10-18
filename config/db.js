import { Sequelize } from 'sequelize';
import config from './env.js';

// Correct Sequelize instance connection
const sequelize = new Sequelize(config.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres', 
  logging: false, // Disable logging; default: console.log
});

// Test the connection (optional utility function)
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export { sequelize, testConnection };
