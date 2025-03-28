const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_ATLAS_URL;
async function connectToMongo(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("connected to mongoDB");
    await mongoose.connect(mongoURI);
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
module.exports = connectToMongo;
