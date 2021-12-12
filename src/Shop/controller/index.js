const Shop = require('../model/shop');

const createShop = async (req, res) => {
  const { body } = req;
  const { name } = body;
  try {
    if (await Shop.findOne({ name })) { return res.status(400).send({ error: 'Shop already exists' }); }

    const shop = await Shop.create(req.body);

    return res.send({ shop });
  } catch (err) {
    return res.status(400).send({ error: 'Failed' });
  }
};

const getShops = async (req, res) => {
  try {
    const shops = await Shop.find({});

    if (!shops) {
      return res.status(404).send({ error: 'Not Found' });
    }

    return res.status(200).send(shops);
  } catch (err) {
    return res.status(500).send({ error: 'Failed' });
  }
};

const getShop = async (req, res) => {
  const { param } = req;
  const { id } = param;
  try {
    const shop = await Shop.findOne({ id });

    if (!shop) {
      return res.status(404).send({ error: 'Not Found' });
    }

    return res.status(200).send(shop);
  } catch (err) {
    return res.status(500).send({ error: 'Failed' });
  }
};

module.exports = {
  createShop,
  getShops,
  getShop,
};
