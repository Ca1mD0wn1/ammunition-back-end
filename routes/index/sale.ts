var express = require("express");
var databaseCtrolgoodsListindex = require("../../db/databaseCtro_index");
var router = express.Router();

router.post("/", async (req, res) => {

    try {
        let data = await databaseCtrolgoodsListindex.selectGoods();
        res.json({
            status: "success",
            data,
        });

    } catch (error) {
        res.json({
            status: "fail"
        });
    }
});

module.exports = router;