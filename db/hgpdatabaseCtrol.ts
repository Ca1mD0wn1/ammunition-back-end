
var db = require('./dbConn');
interface IData {
    username?: String,
    password?: String,
}

// 验证用户名是否重复
function checkUser(obj: IData): Promise<[]> {

    let sql = `select * from user where 1=1`;

    for (let k in obj) {
        sql += ` and ${k}='${obj[k]}'`
    }
    console.log(sql);

    return new Promise(function (resovle, reject) {
        db.query(sql, function (error, result, fields) {
            if (error) {
                reject(error);
            } else {

                resovle(result);
            }
        })
    })
}

function regUser(data: IData): Promise<boolean> {

    let sql = `insert into user(username,password) values('${data.username}','${data.password}')`;

    return new Promise(function (resovle, reject) {
        db.query(sql, function (error, result, fields) {
            if (error) {
                reject(false);
            } else {
                console.log('result', result);
                resovle(true);
            }
        })
    })
}




module.exports = {
    checkUser,
    regUser
}