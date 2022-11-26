const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const adminRoutes = require("./admin");
const userRoutes = require("./user")
const logger = require("../config/logger");
const morgan = require("morgan");

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("combined", { stream: logger.stream }));

app.use("/admin", adminRoutes);
app.use("/user", userRoutes)

app.get("/", (req, res) => {
  const welcomeText =
    "<div style= text-align:center;'><h1 style='color:red;'>Welcome to PrinceHomes Realestate Ecommerce .</h1><h3 style='color:red;'>Server is up and running, visit <a href='https://github.com/princekehinde/Prince_property'>link</a> for more info.</h3>  </div>";
  res.status(200).send(welcomeText);
});

module.exports = app;