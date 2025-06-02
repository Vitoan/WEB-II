const express = require('express');
const path = require('path');
const { Sequelize } = require('sequelize');
const config = require('./config/config.json').development;

const app = express();

// Configurar Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Parsear datos de formularios
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Conexión a la base de datos
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});

// Probar conexión
sequelize.authenticate()
  .then(() => console.log('Conexión a la base de datos exitosa'))
  .catch(err => console.error('Error de conexión:', err));

// Cargar modelos
const models = require('./models');
app.set('models', models);

// Cargar rutas
const indexRouter = require('./routes/index');
const pacientesRouter = require('./routes/pacientes');
app.use('/', indexRouter);
app.use('/pacientes', pacientesRouter);

// Manejo de errores
app.use((req, res, next) => {
  res.status(404).render('error', { message: 'Página no encontrada' });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

/* Aclaracion/Explicación:

    Configura Pug como motor de plantillas.
    Sirve archivos estáticos (CSS) desde public/.
    Parsea datos de formularios (urlencoded) y JSON.
    Conecta con la base de datos usando Sequelize.
    Carga rutas iniciales (index y pacientes).
    Maneja errores 404 con una vista de error. */