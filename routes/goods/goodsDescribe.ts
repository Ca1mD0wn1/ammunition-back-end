var express = require('express');
const databaseCtrolgoodsDescribe = require("../../db/goodsDatabase");
var router = express.Router();


router.post("/", async function (req, res) {
    let goods_id: number = req.body.goods_id;
    console.log(goods_id);
    try {
        let result = await databaseCtrolgoodsDescribe.selectGoodsDescribe(goods_id);
        res.json(result);
    } catch (err) {
        console.log("goodsList.ts_err", err);
        res.json({
            status: "error",
        })
    }
})

module.exports = router;