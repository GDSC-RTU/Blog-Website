const mongoose = require('mongoose');
const { DB_URI } = require('./serverConfig');
const connect = async () => {
    mongoose.connect(DB_URI);
};

module.exports = connect;
