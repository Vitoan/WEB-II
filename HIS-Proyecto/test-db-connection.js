const { Sequelize } = require('sequelize');
const config = require('./config/config.json').development;

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('¡Conexión a la base de datos exitosa!');
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error.message);
  } finally {
    await sequelize.close();
  }
}

testConnection();