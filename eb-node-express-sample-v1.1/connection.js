var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "officespace.cxs0e9l0dunb.us-west-2.rds.amazonaws.com",
    user: "OfficeSpace",
    password: "Password1",
    port: 3306
});

connection.connect(function (err) {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }

    console.log('Connected to database.');
});

connection.end();