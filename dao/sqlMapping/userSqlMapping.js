// dao/sqlMapping/userSqlMapping.js
// CRUD SQL语句
var userSqlMapping = {
    insert:'insert into user(id, name, age) values(0,?,?)',
    update:'update user set name=?, age=? where id=?',
    delete: 'delete from user where id=?',
    queryById: 'select * from user where id=?',
    queryAll: 'select * from user'
};

module.exports = userSqlMapping;