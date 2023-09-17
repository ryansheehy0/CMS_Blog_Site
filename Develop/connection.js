const Sequelize = require("sequelize")
require("dotenv").config()

const Sequelize = require('sequelize');

const databaseUrl = process.env.CLEARDB_DATABASE_URL; // Assuming Heroku provides a DATABASE_URL in clearDB format

const sequelize = new Sequelize(databaseUrl, {
  dialect: 'mysql',
  protocol: 'mysql',
  logging: false, // Disable logging if not needed
  dialectOptions: {
    ssl: 'Amazon RDS', // For SSL connection on Heroku
  },
  define: {
    timestamps: false, // If you want timestamps in your models
  },
});

module.exports = sequelize