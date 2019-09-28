const mongoose = require('mongoose');

const Dummy = require('../domain/dummy/model');
const Task = require('../domain/tasks/model');

const start = mongoose.connect(
  'mongodb+srv://docemonos:pass1234@stridermongo-4ef3j.mongodb.net/conexion_mongo',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.error(err.message);
      throw err;
    }

    console.log('MongoDB conectado');
  },
);

// Aquí se exportan los modelos
module.exports = {
  start,
  Dummy,
  Task,
};
