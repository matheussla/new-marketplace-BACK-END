const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://matheus_la:<mongo123>@newmarketplace.rs4tg.mongodb.net/test', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;
