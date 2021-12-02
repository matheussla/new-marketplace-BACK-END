const express = require('express');
const bodyParse = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(bodyParse.json());
app.use(routes);

module.exports = app;
