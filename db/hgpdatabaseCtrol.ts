
var db = require('./dbConn');
const dbConn = require("./dbConn");
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
function selectGoods(): Promise<boolean> {
    let sqlStr = 'SELECT * FROM goods';
    return new Promise(function (resolve, reject) {
        dbConn.query(sqlStr, function (err, result) {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}
function selectGoodsDescribe(goods_id: number): Promise<boolean> {
    let sqlStr = 'SELECT * FROM `describe` INNER JOIN goods ON `describe`.goods_id = goods.goods_id WHERE goods.goods_id =  '
    sqlStr += goods_id;
    return new Promise(function (resolve, reject) {
        dbConn.query(sqlStr, function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result)
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
function selectShopCar(goods_id: number): Promise<boolean> {
    let sqlStr = 'SELECT * FROM goods where goods_id ='
    sqlStr += goods_id;
    return new Promise(function (resolve, reject) {
        dbConn.query(sqlStr, function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result)
            }
        })
    })
}


function selectList(): Promise<boolean> {
    let sqlStr = 'SELECT * FROM `describe` INNER JOIN goods ON `describe`.goods_id = goods.goods_id ';
    return new Promise(function (resolve, reject) {
        dbConn.query(sqlStr, function (err, result) {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

function updateList(): Promise<boolean> {
    let sqlStr = 'SELECT * FROM `describe` INNER JOIN goods ON `describe`.goods_id = goods.goods_id ';
    return new Promise(function (resolve, reject) {
        dbConn.query(sqlStr, function (err, result) {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

module.exports = {
    selectGoods,
    selectGoodsDescribe,
    selectShopCar,
    selectList,
    updateList,
    checkUser,
    regUser
}