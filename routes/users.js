var express = require('express');
var router = express.Router();
var jsonWrite = require('../model/jsonWrite');
var userService = require('../service/userService');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login/', function(req, res, next) {

  res.send('hello');
})

router.get('/query/', function(req, res, next) {
  param = req.query;
  if (typeof param.id === 'undefined') {
    jsonWrite(res, param);
  } else {
    userService.findById(param, res, function(err, result) {
      jsonWrite(err, param, result);
    });
  }
});

module.exports = router;