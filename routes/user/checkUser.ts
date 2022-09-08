var express = require('express');
var databaseCtrol = require('../../db/hgpdatabaseCtrol');
var router = express.Router();

router.get('/', async function (req, res, next) {
    // 1.处理数据
    let username = req.query.username;


    console.log('username', username);

    // 2.连接数据库

    try {
        let result = await databaseCtrol.checkUser({
            username,
        });
        console.log(result);

        if (result.length == 1) {
            res.json({
                status: 'fail',
            })
        } else {
            res.json({
                status: 'success',
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            status: 'error',
        })

    }

    // 3.响应数据

})


module.exports = router;