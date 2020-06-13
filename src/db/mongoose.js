const mongoose = require('mongoose');

const mongodbAtlas = process.env.MONGODB_URL;

mongoose.connect(mongodbAtlas, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
