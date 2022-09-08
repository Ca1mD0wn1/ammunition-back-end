var express = require('express');
var bcrypt = require('bcrypt');
var databaseCtrol = require('../../db/hgpdatabaseCtrol');
var router = express.Router();

interface IData {
    username?: String,
    password?: String,
}

router.post('/', async function (req, res, next) {
    // 1.处理数据
    console.log(req.body);

    let obj: IData = getData(req);
    console.log(obj.password);
    let salt = bcrypt.genSaltSync(10);
    obj.password = bcrypt.hashSync(obj.password, salt);


    // 2.请求数据库
    try {
        let result = await databaseCtrol.regUser(obj)
        if (result) {
            res.json({
                status: 'success',
            })
        }
    } catch (error) {
        res.json({
            status: 'fail',
        })
    }

    // 3.响应数据

})

function getData(req) {
    return req.body;
}

module.exports = router;
