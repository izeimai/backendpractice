const express = require('express');
const mysql = require('mysql');
const PORT = process.env.PORT || 3000;
const app = express();

/*Create connection and Connect to database (needs mysql) */
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'yourRootPassword',
    database: 'simple-react-sql-db'
});

connection.connect(function(err) {
    (err) ? console.log(err) : console.log(connection);
});


/*Require the routes in the routes folder*/
require('./routes/html-routes')(app, connection);

/*Start server*/
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});