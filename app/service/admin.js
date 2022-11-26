const mongoose = require("mongoose");
const keys = require("../config/keys");
const { generatePassword } = require("../validation/validationHelpers");
const generateToken = require("../utils/token");
const AdminSchema = require("../models/admin");
const Admin = require("../class/admin");
const AdminModel = require("../models/admin");
const AdminManager = require("../utils/manager/admin-manager");
const { successResponse, errorResponse } = require("../utils/response");
const logger = require("../utils/logger");
const bodyparser = require("body-parser");
const HelperFunction = require("../utils/helperFunction");

/*
 * @description - Admin auth
 */
console.log();
class AdminService {
  /**
   * @description return a JSON data
   * @param {Object} admin - req body from admin controllers
   * @return {Object} Returns object
   */

  static async signUpAdminService(data) {
    try {
      const { email,  password} = data;
      const admin = await AdminManager.findAdminById(email);
      if (admin)
        return  errorResponse(res, 409, "Admin already exists, please login");
      //  hash password
      const hashPassword = await HelperFunction.hashPassword(password);
      const newAdmin = new AdminManager(email, hashPassword);
      const result = await AdminManager.createAdmin(newAdmin);
      return successResponse(res, 201, "Admin created successfully",result)
    } catch (error) {
      logger.info(error.message);
      return errorResponse(res, 500, "Internal Server Error");
    }
  }

  static async signInAdminService(req, res) {
    try {
      const { email, password } = req.body;

      const admin = await AdminModel.findOne({ email, password });
      if (!admin)
        return {
          message: "admin not found",
          statusCode: 409,
        };
    } catch (error) {
      logger.info(error.message);
      return errorResponse(res, 500, "Internal Server Error");
    }
  }
}

module.exports = AdminService;
