const mysql = require('mysql2');

const db = mysql.createConnection({
        host: 'localhost',

        user: 'root',
        password: 'travisalston',
        database: 'election'
    });

    module.exports = db;