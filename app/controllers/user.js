const UserManager = require("../modules/user-manager")
const {
  errorResponse,
  successResponse } = require("../utils/response");

class UserController {
  static async registerUserController(req, res) {
    try{
      const result = await UserManager.register(req.body);

      if (result.statusCode === 400)
        return errorResponse(res, result.statusCode, result.message);

      return successResponse(
        res,
        result.statusCode,
        result.message,
        result.data
      )
    }catch(error){
      errorResponse(res, 500, "Oops!")
    }
  }


    /**
       * @description - this method is used to login a user
       * @param {object} data - the data of the user
       * @param {object} - the response of the user
       */
     static async loginUserController(req, res){
      try {
        const result = await UserManager.login(req.body);

        if (result.statusCode === 400 || result.statusCode === 404) {
            return errorResponse(res, result.statusCode, result.message);
        }

            return successResponse(
                res, 
                result.statusCode,
                result.message,
                result.data
            );
   } catch (error) {
return errorResponse(res, 500, error.message)
}
     };
  }

module.exports = UserController;


