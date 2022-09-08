let regRouter = require('./routes/user/reg');
let checkUserRouter = require('./routes/user/checkUser');
let loginRouter = require('./routes/user/login');

app.use('/reg', regRouter);
app.use('/check', checkUserRouter);
app.use('/login', loginRouter);