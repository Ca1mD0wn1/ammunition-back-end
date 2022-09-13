let regRouter = require('./routes/user/reg');
let checkUserRouter = require('./routes/user/checkUser');
let loginRouter = require('./routes/user/login');

app.use('/reg', regRouter);
app.use('/check', checkUserRouter);
app.use('/login', loginRouter);

<!-- token -->
// 验证token
app.use((req, res, next) => {
  let token = req.body.token;
  if (!token) {
    res.json({
      status: 'fail',
      msg: '没有权限哦！',
    })
  } else {
    let yes = jwt.verify(token, '__清酒__');
    if (yes) {
      next()
    } else {
      res.json({
        status: 'fail',
        msg: '没有权限哦！',
      })
    }
  }
})