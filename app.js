const express = require('express');

const app = express();

const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./db');

app.listen(3000, () => console.log('Servidor iniciado en el puerto 3000'));
