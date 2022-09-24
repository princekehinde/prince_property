const express = require("express");
const validate = require("../validation/user");
const {
  signupUserController,
} = require("../controllers/user");

const router = express();

router.post(
    "/signUp", 
    validate.signupUser,
    signupUserController
    );

// router.post("/logIn", validate.signInAdmin, signInAdminController);

module.exports = router;