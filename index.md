var indexRouter = require("./routes/index/index");
var saleRouter = require("./routes/index/sale");

app.use('/index', indexRouter);
app.use('/sale', saleRouter);
