var express = require('express');
var router = express.Router();
var userService = require('../service/userService');
var userDAO = require('../dao/userDAO');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/findUser/', function(req, res, next) {
  userService.findById(req, res, next);
});

module.exports = router;
