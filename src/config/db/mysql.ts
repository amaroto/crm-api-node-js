const { Sequelize } = require('sequelize');

const dbInit = new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USER}`, `${process.env.DB_PASSWORD}`, {
  host: `${process.env.DB_URI}`,
  dialect: "mysql",
});

try {
  dbInit.authenticate();
  console.log('Connection with database has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default dbInit;
