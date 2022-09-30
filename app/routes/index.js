const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

const userRoutes = require('./user')

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(morgan("combined", { stream: logger.stream }));



app.use("/users", userRoutes);

app.get("/", (req, res) => {
  const welcomeText =
    "<div style='text-align: center;'><h1>Welcome to Prince Property Real estate project .</h1><p>Server is up and running, visit <a href='https://github.com/princekehinde/prince_property'>link</a> for more info.</p></div>";
  res.status(200).send(welcomeText);
});

module.exports = app;