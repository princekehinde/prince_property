const express = require("express");
const validate = require("./../validation/realtor");
const controller = require("./../controllers/realtor");
const Middleware = require("./.././middleware/realtor-middleware");

const router = express.Router();

router.post("/register", validate.registerRealtor, controller.registerRealtor);

router.post("/login", validate.loginRealtor, controller.loginRealtor);


module.exports = router;
