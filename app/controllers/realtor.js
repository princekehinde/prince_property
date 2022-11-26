const express = require("express");
const { errorResponse, successResponse } = require("../utils/response");
const RealtorService = require("../service/realtor");

class realtorController {
     /**
   *
   * @description return a JSON
   * @param {Object} req - http request
   * @param {Object} res - http response
   * @return {Object} Returned object
   * */

  static async registerRealtor(req, res) {
    try {
      const result = await RealtorService.signUpRealtorService(req.body);
      logger.info(`Realtor Succesfully SignUp ${JSON.stringify(result)}`);
      if (result.statusCode === 409)
        return errorResponse(res, result.statusCode, result.message);
      return successResponse(
        res,
        result.statusCode,
        "Realtor successfully SignUp",
        result.data
      );
    } catch (error) {
      logger.info(`Realtor Controller error ${JSON.stringify(error.message)}`);
      return errorResponse(res, 500, error.message);
    }
  }

  static async loginRealtor(req, res) {
    try {
      const result = await RealtorService.signInRealtorService(req.body);
      logger.info(`Realtor Succesfully signIn ${JSON.stringify(result)}`);
      if (result.statusCode === 409)
        return errorResponse(res, result.statusCode, result.message);
      return successResponse(
        res,
        result.statusCode,
        "Realtor successfully signIn",
        result.data
      );
    } catch (error) {
      logger.info(`Realtor Controller error ${JSON.stringify(error.message)}`);
      return errorResponse(res, 500, error.message);
    }
  }

}

module.exports = realtorController;
