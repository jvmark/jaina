var db = require('./database/mysqlPool');
var jsonWrite = require('../model/jsonWrite')
var $sql = require('./sqlMapping/userSqlMapping');

module.exports = {
	find: function(req, res, next) {
		// get a connection from the pool
		db.mysqlPool.getConnection(function(err, connection) {
			var param = req.query || req.id;
				// make the query
				connection.query($sql.queryById, [param.id], function(err, result) {
				// 以json形式，把操作结果返回给前台页面
				jsonWrite(res, result);
			});
		})
	}
};