var express = require('express');
const databaseCtrolupdateList = require("../../db/goodsDatabase");
var router = express.Router();

router.post("/", async function (req, res) {
    try {
        let result = await databaseCtrolupdateList.updateList();
        res.send(result);
    } catch (err) {
        // console.log("selectList.ts_err", err);
        res.json({
            status: "error",
        })
    }
})

module.exports = router;