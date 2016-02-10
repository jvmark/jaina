// dao/sqlMapping/userSqlMapping.js
// CRUD SQL语句
var userSqlMapping = {
    insert:'insert into user(user_id, name, password, create_time) values(?,?,?,?)',
    update:'update user set name=?, age=? where user_id=?',
    delete: 'delete from user where id=?',
    queryById: 'select * from user where id=?',
    queryAll: 'select * from user'
};

module.exports = userSqlMapping;