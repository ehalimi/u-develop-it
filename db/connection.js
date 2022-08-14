const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: '',
        password: '',
        database: 'election'
    }
);

module.exports = db;