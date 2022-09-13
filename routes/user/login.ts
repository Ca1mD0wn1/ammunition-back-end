var express = require('express');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var databaseCtrol = require('../../db/hgpdatabaseCtrol');
var router = express.Router();

router.post('/', async function (req, res, next) {
    let obj = {
        username: req.body.username,
    }


    try {

        let result = await databaseCtrol.checkUser(obj);
        console.log('aaa', req.body, result[0].password);

        let isMatch = bcrypt.compareSync(req.body.password, result[0].password);
        console.log('isMatch', isMatch);

        if (result.length == 1 && result[0].username == obj.username) {
            if (isMatch) {
                let token = jwt.sign(obj.username, '__清酒__');
                console.log(token);

                res.json({
                    status: 'success',
                    level: result[0].level,
                    token,
                })
            }
        } else {
            res.json({
                status: 'fail',
            })
        }
    } catch (error) {
        res.json({
            status: 'error',
        })
    }
})

module.exports = router;