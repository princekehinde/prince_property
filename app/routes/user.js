const express = require("express");
const validate = require("../validation/user");
const Middleware = require("../middleware/authmiddleware");
const {
  registerUserController,
  loginUserController,
} = require("../controllers/user");

const router = express();
// REGISTER USER
router.post(
    "/register", 
    validate.registerUser,
    registerUserController
    );

// LOGIN USER
router.post(
  "/logIn",
  validate.loginUser,
  loginUserController
  );

module.exports = router;