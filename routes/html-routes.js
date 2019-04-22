const mysql = require('mysql');

module.exports = (app, connection) => {
    app.get('/', function (req, res) {
        connection.query('SELECT * FROM users', function (err, data) {
            (err) ? res.send(err) : res.json({ users: data });
        })
    });
}