var express = require('express');
var databaseCtrol = require('../../db/hgpdatabaseCtrol');
var router = express.Router();

router.post('/', async function (req, res, next) {
    // 1.处理数据



    // 2.连接数据库

    try {
        let result = await databaseCtrol.getClassData();

        // result.forEach(item => {

        //     JSON.parse(item.list);
        //     JSON.parse(item.icons);
        //     console.log(item.list);

        // });
        // result = JSON.stringify(result);
        if (result) {
            res.json({
                status: result,
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

// 价格排序
router.post('/sort', async function (req, res, next) {
    // 1.处理数据

    let flag = req.body.flag;

    // 2.连接数据库

    try {
        let result = await databaseCtrol.getClassDataSort(flag);

        // result.forEach(item => {

        //     JSON.parse(item.list);
        //     JSON.parse(item.icons);
        //     console.log(item.list);

        // });
        // result = JSON.stringify(result);
        if (result) {
            res.json({
                status: result,
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

// 价格区间
router.post('/section', async function (req, res, next) {
    // 1.处理数据

    let start = req.body.start;
    let end = req.body.end;



    // 2.连接数据库

    try {
        let result = await databaseCtrol.getClassDataSection(start, end);
        if (result) {
            res.json({
                status: result,
            })
        }
    } catch (error) {
        res.json({
            status: 'error',
        })

    }

    // 3.响应数据

})

// 评论数量
router.post('/comment', async function (req, res, next) {
    // 1.处理数据



    // 2.连接数据库

    try {
        let result = await databaseCtrol.getClassDataComment();

        // result.forEach(item => {

        //     JSON.parse(item.list);
        //     JSON.parse(item.icons);
        //     console.log(item.list);

        // });
        // result = JSON.stringify(result);
        if (result) {
            res.json({
                status: result,
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