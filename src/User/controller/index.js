const User = require('../model/user');

const authentication = async (req, res) => {
  const { body } = req;
  const { email } = body;
  try {
    if (await User.findOne({ email })) { return res.status(400).send({ error: 'User already exists' }); }

    const user = await User.create(req.body);

    user.password = undefined;

    return res.send({ user });
  } catch (err) {
    return res.status(400).send({ error: 'Failed' });
  }
};

const getUser = async (req, res) => {
  const { body } = req;
  const { email, password } = body;
  try {
    const user = await User.findOne({ email });

    if (user.password !== password) {
      return res.status(400).send({ error: 'Invalid data' });
    }

    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ error: 'Failed' });
  }
};

module.exports = {
  authentication,
  getUser,
};
