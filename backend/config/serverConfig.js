const dotenv = require('dotenv');

// Specifying the env file for the development
dotenv.config({ path: '.env.development.local' });

module.exports = {
    PORT: process.env.PORT,
    DB_URI: process.env.DB_URI,
};
