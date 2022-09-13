
var goodsListRouter = require("./routes/goods/goodsList")
var goodsDescribeRouter = require("./routes/goods/goodsDescribe");
var shopCarRouter = require("./routes/shopCar/shopCar");
var selectListRouter = require("./routes/admin/selectList");
var updateListRouter = require("./routes/admin/updateList");
var insertShopCarRouter = require("./routes/goods/insertShopCar");
var shopCarCountRouter = require("./routes/shopCar/shopCarCount");


app.use("/shopCarCountRouter", shopCarCountRouter);
app.use("/goodsListRouter", goodsListRouter);
app.use("/goodsDescribeRouter", goodsDescribeRouter);
app.use("/shopCarRouter", shopCarRouter);
app.use("/selectListRouter", selectListRouter);
app.use("/updateListRouter", updateListRouter);
app.use("/insertShopCarRouter", insertShopCarRouter)
// api结束