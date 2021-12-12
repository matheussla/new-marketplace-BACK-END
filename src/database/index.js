const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dev:mongo123@newmarketplace.rs4tg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;

module.exports = mongoose;
