var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Create pool connection for database
var dbConnectionPool = mysql.createPool({
  host: 'localhost',
  database: 'event_planning',
  user: 'root',
  password: 'root'
});

module.exports = router;
