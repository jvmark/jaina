var mysql = require('mysql');
var config = require('../../conf/mysqlConf');

var mysqlPool = mysql.createPool(config.mysql);

exports.mysqlPool = mysqlPool;