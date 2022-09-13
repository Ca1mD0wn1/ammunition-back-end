var db = require('./dbConn');
var dbConn_index = require("./dbConn");
function selectGoodsIndex() {
    var sqlStr = 'SELECT * FROM goods';
    return new Promise(function (resolve, reject) {
        dbConn_index.query(sqlStr, function (err, result) {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    });
}
module.exports = {
    selectGoods: selectGoodsIndex,
};
