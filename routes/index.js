var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ONMYSKY' });
});

router.get('/login/', function(req, res, next) {
  res.render('login', { title: 'ONMYSKY' });
});

router.get('/logout/', function(req, res, next) {
	res.render('logout');
});

router.get('/')

module.exports = router;
