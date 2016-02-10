var db = require('./database/mysqlPool');
var jsonWrite = require('../model/jsonWrite')
var $sql = require('./sqlMapping/userSqlMapping');

module.exports = {
  find: function(param, res, next) {
    // 从mysql 连接池中获取连接
    db.mysqlPool.getConnection(function(err, connection) {
      // 执行 sql
      connection.query($sql.queryById, [param.id], function(err, result) {
        next(res, result);
      });
    })
  },
  save: function(req, res, next) {
    db.mysqlPool.getConnection(function(err, connection) {
      var name = req.body.name;
      var password = req.body.password;
      connection.insert($sql.insert, [name, password], function(err, result) {
        next(res, resutl);
      });
    })
  }
};