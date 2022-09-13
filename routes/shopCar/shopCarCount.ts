var express = require('express');
const databaseCtrolshopCarCount = require("../../db/goodsDatabase");
var router = express.Router();


router.post("/", async function (req, res) {
    try {
        let result = await databaseCtrolshopCarCount.shopCarCount();
        res.json(result);
    } catch (err) {
        console.log("shopCarCount_err", err);
        res.json({
            status: "error",
        })
    }
})

module.exports = router;