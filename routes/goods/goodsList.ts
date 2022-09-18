var express = require('express');
const databaseCtrolgoodsList = require("../../db/goodsDatabase");
var router = express.Router();

router.post("/", async function (req, res) {
    try {
        let result = await databaseCtrolgoodsList.selectGoods();
        res.send(result);
    } catch (err) {
        // console.log("goodsList.ts_err", err);
        res.json({
            status: "error",
        })
    }
})

module.exports = router;