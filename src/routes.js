const router = require('express').Router();
const { authentication, getUser } = require('./User/controller');

const { createShop, getShops, getShop } = require('./Shop/controller');

router.post('/register', (req, res) => authentication(req, res));

router.get('/getUser', (req, res) => getUser(req, res));

router.post('/shop', (req, res) => createShop(req, res));

router.get('/shops', (req, res) => getShops(req, res));

router.get('/shop/:id', (req, res) => getShop(req, res));

router.get('/health', (req, res) => res.status(204).send());

module.exports = router;
