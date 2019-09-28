const router = require('express').Router();
const db = ('../../db');

const createTaskService = require('./service');
const taskService = createTaskService(db);

router.get('/', (req, res) => {
    const { name } = req.query;
    const message = taskService.getTasksByName({ name });

    return res.json({ message });
});

module.exports = router;