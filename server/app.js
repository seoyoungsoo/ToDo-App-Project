const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3035;

const { User } = require('./models/User');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect('mongodb+srv://youngqaa:dudtndhqk12@nestcluster.a3zpl.mongodb.net/todolist', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log(err));

app.post('/register', (req, res) => {
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.status(500).json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
