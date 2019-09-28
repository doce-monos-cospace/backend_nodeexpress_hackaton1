const router = require('express').Router();
const db = require('../../db');

const createTaskService = require('./service');
const taskService = createTaskService(db);

router.get('/', async (req, res) => {
    const { name = '' } = req.query;
    const message = await taskService.getTasksByName({ name });

    return res.json({ message });
});

router.get('/active', async(req, res) => {
    const activeTasks = await taskService.getActiveTasks();
    return res.json({ activeTasks });
});

router.delete('/:id',async (req, res) =>{
    const { id } = req.params;
    const deleteTask = await taskService.deleteTask(id);
    return res.json({ deleteTask });
 })

router.post('/', async(req, res) => {
    const { body } = req;
    const createdTask = await taskService.create(body);

    return res.status(200).send(createdTask);
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    
    const message = await taskService.updateTask({ id, body });

    return res.status(200).send('Task successfully updated');
});

module.exports = router;
