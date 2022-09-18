var express = require('express');
const databaseCtrolDeleteshopCar = require("../../db/goodsDatabase");
var router = express.Router();


router.post("/", async function (req, res) {
    let goods_id: number = req.body.goods_id;

    try {
        let result = await databaseCtrolshopCar.deleteShopCar(goods_id);
        res.json(result);
    } catch (err) {
        console.log("goodsdelete.ts_err", err);
        res.json({
            status: "error",
        })
    }
})

module.exports = router;