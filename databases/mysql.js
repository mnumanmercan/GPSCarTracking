const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'node-app',
    password: '108778'
})

con.connect((err) => {
    if (err) {
        throw err;
    } else {
        console.log('Mysql database connected');
    }
})


module.exports = con;