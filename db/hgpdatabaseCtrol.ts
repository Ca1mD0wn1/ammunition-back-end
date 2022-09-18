
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
                resovle(true);
            }
        })
    })
}

// 查询分类数据

function getClassData(): Promise<[]> {

    let sql = `select * from classification`;

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

function getClassDataSort(flag): Promise<[]> {
    let sql = '';
    console.log('flag', flag);

    if (flag == 'false') {
        sql = `select * from classification order by price ASC`;
    } else if (flag == 'true') {
        sql = `select * from classification order by price DESC`;

    }


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

function getClassDataSection(start, end): Promise<[]> {
    let sql = `select *from classification where price between ${start} and ${end}`;



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
function getClassDataComment(): Promise<[]> {
    let sql = `select * from classification order by judge desc`;



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

module.exports = {

    checkUser,
    regUser,
    getClassData,
    getClassDataSort,
    getClassDataSection,
    getClassDataComment
}