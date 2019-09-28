const router = require('express').Router();
const db = require('../../db');

const createDummyService = require('./service');

const dummyService = createDummyService(db);

router.get('/', (req, res) => res.json({ message: 'Hola mundo!' }));

router.get('/hello', (req, res) => {
  const { name } = req.query;
  const message = dummyService.sayHello({ name });

  return res.json({ message });
});

module.exports = router;
