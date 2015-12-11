var express = require('express');
var router = express.Router();
var userDAO = require('../dao/userDAO')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/adduser', function(req, resp, next){
	userDAO.add(req, resp, next);
})

module.exports = router;
