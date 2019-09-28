const router = require('express').Router();
const db = require('../../db');

const createTaskService = require('./service');
const taskService = createTaskService(db);

router.get('/',async (req, res) =>{
const message = await taskService.getTasks();
return res.json({ message });
})

router.get('/finish',async (req, res) =>{
    const message = await taskService.getTasksFinished();
    return res.json({ message });
 })

module.exports = router;