var express = require("express");
var databaseCtrolgoodsListindex = require("../../db/databaseCtro_index");
var router = express.Router();

router.post("/", async (req, res) => {

    try {
        let data = await databaseCtrolgoodsListindex.selectGoods();
<<<<<<< HEAD
        // console.log("data", data);

=======
>>>>>>> cd4d2ba35200c57f440d25ae372c9de34f2bdd56
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