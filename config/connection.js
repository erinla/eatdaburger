var mysql = require("mysql");
require("dotenv").config();

var config = {
    host: "localhost",
    port: 8889,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}

var connection;
var host;

if (process.env.JAWSDB_URL) {
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
    host = "JAWSDB";
} else {
    connection = mysql.createConnection(config);
    host = "localhost";
}


connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;

    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;