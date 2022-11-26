const { errorResponse, successResponse } = require("../utils/response");
const AdminService = require("../service/admin");
const logger = require("../utils/logger");

class adminController {
  /**
   *
   * @description return a JSON
   * @param {Object} req - http request
   * @param {Object} res - http response
   * @return {Object} Returned object
   * */

  static async signUpAdminController(req, res, next) {
    try {
      const result = await AdminService.signUpAdminService(req.body);
      logger.info(`Admin Succesfully SignUp ${JSON.stringify(result)}`);
      if (result.statusCode === 409)
        return errorResponse(res.status, result.statusCode, result.message);
      return successResponse(
        res.status,
        result.statusCode,
        "Admin successfully SignUp",
        result.data
      );
    } catch (error) {
      logger.info(`Admin Controller error ${JSON.stringify(error.message)}`);
      return errorResponse(res.status, 500, error.message);
    }
  }

  static async signInAdminController(req, res) {
    try {
      const result = await AdminService.signInAdminService(req.body);
      logger.info(`Admin Succesfully signIn ${JSON.stringify(result)}`);
      if (result.statusCode === 409)
        return errorResponse(res, result.statusCode, result.message);
      return successResponse(
        res,
        result.statusCode,
        "Admin successfully signIn",
        result.data
      );
    } catch (error) {
      logger.info(`Admin Controller error ${JSON.stringify(error.message)}`);
      return errorResponse(res, 500, error.message);
    }
  }
}

module.exports = adminController;
