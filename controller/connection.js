const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'td_device_actions_histories'
});

connection.connect();

module.exports = connection;