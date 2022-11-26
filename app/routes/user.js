const express = require("express");
const validate = require("./../validation/user");
const controller = require("./../controllers/user");
const Middleware = require("./.././middleware/user-middleware");
const Validate = require("./.././controllers/user");
const Controller = require("./.././validation/user");

const router = express.Router();

router.post("/register", Validate.registerUser, controller.registerUser);

router.post("/login", validate.loginUser, controller.loginUser);

router.put(
  "/change-password",
  //Middleware.isUserAuthenticated,
  validate.changePassword,
  controller.changePassword
);

module.exports = router;
