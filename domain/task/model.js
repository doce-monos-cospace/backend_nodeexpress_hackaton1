const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
    name: String,
    startTime: Date,
    endTime: Date,
    isPaused: Boolean,
    isEnded: Boolean,
    accumulated: Date,
});

const Task = model('tasks', taskSchema);

module.exports = Task;