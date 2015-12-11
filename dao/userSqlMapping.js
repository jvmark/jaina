// dao/userSqlMapping.js
// CURD SQL 语句
var user = {
	insert: 'INSERT INTO user(id, name, age) values (0, ?, ?)',
	update: 'UPDATE user SET name = ?, age = ?, where id = ?',
	delete: 'DELETE from user where id = ?',
	queryById: 'SELECT * from user where id = ?',
	queryAll: 'SELECT * from user'
}

module.exports = user;