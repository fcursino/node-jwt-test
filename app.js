const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const rotaBolinhos = require('./src/routes/bolinho');
const rotaColaborador = require('./src/routes/colaborador');
const swaggerUI = require('swagger-ui-express')
const swaggerDashboard = require('./dashboard.json')
const swaggerHome = require('./home.json')

app.use(bodyParser.json());

app.use('/bolinho', rotaBolinhos);
app.use('/colaborador', rotaColaborador);
app.use('/doc-dashboard', swaggerUI.serve, swaggerUI.setup(swaggerDashboard))
// app.use('/doc-home', swaggerUI.serve, swaggerUI.setup(swaggerHome))

module.exports = app;