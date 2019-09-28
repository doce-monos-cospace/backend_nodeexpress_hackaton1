const express = require('express');

const app = express();

const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const dummyRouter = require('./domain/dummy/routes');
const tasksRouter = require('./domain/tasks/routes');

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./db');

app.use('/dummy', dummyRouter);
app.use('/tasks', tasksRouter);


app.listen(8082, () => console.log('Servidor iniciado en el puerto 8082'));
