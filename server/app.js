const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const { User } = require('./models/User');
const { url } = require('./config/key');
const { auth } = require('./middlewares/auth');

const app = express();
const port = 3035;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// DB 연동
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log(err));

// 회원가입
app.post('/api/users/signup', (req, res) => {
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.status(500).json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

// 로그인
app.post('/api/users/login', (req, res) => {
  User.findOne({ id: req.body.id }, (err, user) => {
    if (!user) {
      return res.status(400).json({
        loginSuccess: false,
        message: '유저 정보 없음',
      });
    }

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        return res.status(400).json({ loginSuccess: false, message: '비밀번호 오류' });
      }

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);

        // res.cookie('access_token', user.token).status(200).json({
        //   loginSuccess: true,
        //   userId: user._id,
        // });
        return res.status(200).json({
          loginSuccess: true,
          userId: user.id,
          authorization: user.token,
        });
      });
    });
  });
});

app.get('/api/users/auth', auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
  });
});

app.get('/api/users/logout', auth, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    {
      token: '',
    },
    (err, user) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).send({
        success: true,
      });
    },
  );
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
