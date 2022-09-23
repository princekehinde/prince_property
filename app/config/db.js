const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const { DATABASE_URI, TEST_DB} = require("./keys");

let mongoUrl = null;

const mongoConnection = () => {
  if (process.env.NODE_ENV === "prince_property") {
    mongoUrl = TEST_DB || "mongodb://localhost:27017";
  } else {
    mongoUrl = DATABASE_URI;
  }
  return mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = mongoConnection;