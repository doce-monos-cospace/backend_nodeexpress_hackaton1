const { Schema, model } = require('mongoose');

const dummySchema = new Schema({
  test: String,
  number: Number,
});

const Dummy = model('dummies', dummySchema);

module.exports = Dummy;
