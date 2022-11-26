const Joi = require("Joi");

const { errorResponse } = require("../utils/response");

class RealtorValidation {
  static async registerRealtor(req, res, next) {
    try {
      const RealtorRegisterForm = Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
      });

      await RealtorRegisterForm.validateAsync(req.body, {
        abortEarly: false,
      });
      next();
    } catch (error) {
      return errorResponse(res, error.message, 400);
    }
  }

  static async loginRealtor(req, res, next) {
    try {
      const RealtorLoginForm = Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
      });
      await RealtorLoginForm.validateAsync(req.body, {
        abortEarly: false,
      });

      next();
    } catch (error) {
      return errorResponse(res, error.message, 400);
    }
  }

}

module.exports = RealtorValidation;
