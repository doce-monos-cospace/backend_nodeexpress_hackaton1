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

router.post('/newTask', async(req, res) => {
    const {name = '', startTime = Date.now(), endTime = ''} = req.query;
    const message = await taskService.setNewTask({ name, startTime, endTime });

    return res.status(201).send('Task successfully created ');
});

module.exports = router;