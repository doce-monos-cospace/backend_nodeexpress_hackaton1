const router = require('express').Router();
const db = require('../../db');

const createTaskService = require('./service');
const taskService = createTaskService(db);

router.get('/',async (req, res) =>{
const tasks = await taskService.getTasks();
return res.json({ tasks });
})

router.get('/finish',async (req, res) =>{
    const finishedTasks = await taskService.getTasksFinished();
    return res.json({ finishedTasks });
 })

module.exports = router;