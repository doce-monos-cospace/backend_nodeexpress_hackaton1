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

router.post('/', async(req, res) => {
    const {name = '', startTime = Date.now(), endTime = Date.now() } = req.query;
    const message = await taskService.create({ name, startTime, endTime });

    return res.status(200).send('Task successfully created');
});

router.put('/', async (req, res) => {
    const {
        id = '',
        name = '',
        startTime = Date.now(),
        endTime = Date.now(),
        isPaused = false,
        isEnded = false,
        accumulated = endTime - startTime } = req.query;
    
    const message = await taskService.update({ id, name, startTime, endTime, isPaused, isEnded, accumulated });

    return res.status(200).send('Task successfully updated');
});

module.exports = router;