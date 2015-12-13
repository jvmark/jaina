var userDAO = require('../dao/userDAO');
var jsonWrite = require('../model/jsonWrite');

module.exports = {
  findById: function(req, res, next) {
    userDAO.find(req, res, function(err, result){
      var a = result;
      result[0].name = 'test';
      jsonWrite(res, result);
    });
  }
};