const mysql = require("mysql");
// 创建数据库的连接
const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: "root",
    password: "root",
    database: "第二阶段项目"
})
// 连接数据库
connection.connect();
//返回数据库连接对象
module.exports = connection;
