
var express = require('express');
const goodsDescribeInsert = require("../../db/goodsDatabase");
var router = express.Router();


router.post("/", async function (req, res) {
    let goods_id: number = req.body.goods_id;
    let goods_count: number = req.body.goods_count;

    // console.log("goods_id", goods_id, "goods_count", goods_count);

    try {
        let result = await goodsDescribeInsert.insertShopCarId(goods_id, goods_count);
        res.json(result);
    } catch (err) {
        // console.log("goodsList.ts_err", err);
        res.json({
            status: "error",
        })
    }
})

module.exports = router;