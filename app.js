const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const rotaBolinhos = require('./src/routes/bolinho');
const rotaColaborador = require('./src/routes/colaborador');

app.use(bodyParser.json());

app.use('/bolinho', rotaBolinhos);
app.use('/colaborador', rotaColaborador);

module.exports = app;