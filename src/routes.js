const router = require('express').Router();
const { authentication, getUser } = require('./User/controller');

router.post('/register', (req, res) => authentication(req, res));

router.get('/getUser', (req, res) => getUser(req, res));

router.get('/health', (req, res) => res.status(204).send());

module.exports = router;
