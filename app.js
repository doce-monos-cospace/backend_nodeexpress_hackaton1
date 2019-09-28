const express = require('express');

const app = express();

const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const dummyRouter = require('./domain/dummy/routes');

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/dummy', dummyRouter);

require('./db');

app.listen(process.env.PORT || 8082, () => console.log('Servidor iniciado en el puerto 8082'));
