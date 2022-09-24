const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const logger = require("../config/logger")


const userRouter = require("./user");
// const adminRouter = require("./admin");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// app.use('/', )

module.exports = app;