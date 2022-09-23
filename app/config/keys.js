require("dotenv").config();

module.exports = {
  TEST_DB: process.env.TEST_DB,
  DATABASE_URI: process.env.DATABASE_URI,
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  JWTSECRET: process.env.JWTSECRET,
  BCRYPT: process.env.BCRYPT,
};