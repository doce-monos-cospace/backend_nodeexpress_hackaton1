const router = require('express').Router();
const db = ('../../db');

const createTaskService = require('./service');
const taskService = createTaskService(db);

router.get('/', async (req, res) => {
    const { name = '' } = req.query;
    const message = await taskService.getTasksByName({ name });

    return res.json({ message });
});

router.get('/active', async(req, res) => {
    const message = await taskService.getActiveTasks();
    return res.json({ message });
});

router.delete('/:id',async (req, res) =>{
    const deleteTask = await taskService.deleteTask(id);
    return res.json({ deleteTask });
 })

router.post('/', async(req, res) => {
    const {name = '', startTime = Date.now(), endTime = Date.now() } = req.query;
    const message = await taskService.create({ name, startTime, endTime });

    return res.status(200).send('Task successfully created');
});

module.exports = router;
