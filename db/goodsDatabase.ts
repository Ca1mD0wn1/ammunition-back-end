
const dbConn = require("./dbConn");


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



function selectShopCarId(goods_id: number): Promise<boolean> {
    let sqlStr = `SELECT * FROM shopcar WHERE goods_id=${goods_id}`;

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



function updateShopCarId(goods_id: number, goods_count: number): Promise<boolean> {
    let sqlStr = `update shopcar SET goods_count =${goods_count} WHERE goods_id=${goods_id};`;
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



function insertShopCarId(goods_id: number, goods_count: number): Promise<boolean> {
    let sqlStr = `INSERT INTO shopcar(goods_id,goods_count) VALUES (${goods_id},${goods_count})`;
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

function shopCarCount(): Promise<boolean> {
    let sqlStr = `SELECT * FROM shopcar`;
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
    selectShopCarId,
    insertShopCarId,
    updateShopCarId,
    shopCarCount,
}