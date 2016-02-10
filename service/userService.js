var userDAO = require('../dao/userDAO');

module.exports = {
  findById: function(param, res, next) {
    userDAO.find(param, res, function(err, result){
    	next(err, result);
    });
  }
};