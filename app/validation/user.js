const Joi = require('joi');
const { errorResponse } = require('../utils/response');

class validate{
    static async registerUser(req, res, next) { 
        try{
            const registerFormSchema = Joi.object().keys({
                email: Joi.string().email().required(),
                username: Joi.string().required(),
                phoneNumber: Joi.string().required(),
                password: Joi.string().min(8).required(),
                address: Joi.string().required(),
              });
        
              await registerFormSchema.validateAsync(req.body, {
                abortEarly: false,
              });
              next();

        }catch(error){
            errorResponse(res, 400, error.message);
        }
    }

    // LOGIN USER
    static async loginUser(req, res, next){
        try{
            const logInFormSchema = Joi.object().keys({
                email: Joi.string().required(),
                password: Joi.string().min(8).required(),
            })

            await logInFormSchema.validateAsync(req.body,{
                abortEarly: false,
            })

            next()
        }catch(error){
            errorResponse(res, 400, error.message);
        }
    }
}
module.exports = validate;