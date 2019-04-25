const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/sei1-auth-app';

mongoose.connect(DB_URL, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => console.log('mongo duuuuude 🤙'))
  .catch((err) => console.log(err));


module.exports = {
  User: require('./user'),
}