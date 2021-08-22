const { User } = require('../models/User');

// 인증 처리
const auth = (req, res, next) => {
  let token = localStorage.getItem('authorization');

  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, error: true });

    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = { auth };
