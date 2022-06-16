var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  req.pool.getConnection(function(err, connection) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    else {
      connection.query('SELECT User_ID FROM users WHERE username = ? AND password = ?', [username, password], function(err, rows, fields) {
        connection.release();
        if (err) {
          console.log(err);
          res.sendStatus(500);
        }
        else {
          if (rows.length == 0) {
            res.sendStatus(401);
          }
          else {
            res.sendStatus(200);
            req.session.userid = rows[0].User_ID;
          }
        }
      });
    }
  });
});

router.post('/signup', function(req, res, next) {
  req.pool.getConnection(function(err, connection) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    else {
      var username = req.body.username;
      var password = req.body.password;
      connection.query('SELECT User_ID FROM users WHERE username = ?', [username], function(err, rows, fields) {
        connection.release();
        if (err) {
          console.log(err);
          res.sendStatus(500);
        }
        else {
          if (rows.length > 0) {
            res.sendStatus(401);
          }
          else {
            req.pool.getConnection(function(err, connection) {
              if (err) {
                console.log(err);
                res.sendStatus(500);
              }
              else {
                connection.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], function(err, rows, fields) {
                  connection.release();
                  if (err) {
                    console.log(err);
                    res.sendStatus(500);
                  }
                  else {
                    res.sendStatus(200);
                    req.session.userid = rows.insertId;
                  }
                });
              }
            });
          }
        }
      });
    }
  });
});

module.exports = router;
