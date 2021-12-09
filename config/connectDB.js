const mongoose = require("mongoose");
const connectDB = () =>
  mongoose.connect('mongodb://localhost/restapi', () => {
    try {
      console.log("the database is connected..");
    } catch (error) {
      console.log(error);
    }
  });
module.exports = connectDB;