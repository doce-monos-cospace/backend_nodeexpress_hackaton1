const router = require('express').Router();
const db = require('../../db');

const createTaskService = require('./service');
const taskService = createTaskService(db);

router.get('/',async (req, res) =>{
const tasks = await taskService.getTasks();
return res.json({ tasks });
})

router.get('/finish',async (req, res) =>{
    const finishedTasks = await taskService.getFinishedTasks();
    return res.json({ finishedTasks });
 })

 router.delete('/',async (req, res) =>{
    const deleteTask = await taskService.deleteTask();
    return res.json({ deleteTask });
 })

module.exports = router;
