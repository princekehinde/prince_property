const express = require("express");
const realtorController = require("../controllers/realtor");
const bcrypt = require("bcrypt");
const Token = require("../utils/token");
const RealtorModel = require("../models/realtor");

class RealtorService {
  constructor() {}

  static RealtorResponse = (data) => {
    return {
      email: data.email,
      username: data.username,
      id: data.id,
    };
  };

  /**
   * @param {string} username the username of the realtor
   * @param {string} email the email of the realtor
   * @param { string} password the password of the realtor
   */

  static async register(data) {
    try {
      const { email, password } = data;
      console.log();
      const realtor = await RealtorModel.findOne({
        email: email.toLowerCase(),
      });

      if (realtor)
        return {
          statusCode: 400,
          message: "realtor already exists",
        };

      const hashpassword = await bcrypt.hashSync(password, 6);

      const createRealtor = await RealtorModel.create({
        email: email.toLowerCase(),

        password: hashpassword,
      });

      return {
        statusCode: 200,
        message: "Realtor created successfully",
        data: await RealtorService.realtorResponse(createRealtor),
      };
    } catch (error) {
      throw new Error(error);
    }
  }

  static async login(data) {
    try {
      const { email, password } = data;

      const realtor = await RealtorModel.findOne({
        email: email.toLowerCase(),
      });

      if (!realtor)
        return {
          statusCode: 400,
          message: "Invalid credentials",
        };

      const isPasswordValid = await bcrypt.compareSync(password, realtor.password);

      if (!isPasswordValid)
        return {
          statusCode: 400,
          message: "Invalid credentials",
        };

      const token = await Token.generateToken(user.id);

      return {
        statusCode: 200,
        message: "Login successful",
        data: {
          token,
          realtor: await RealtorService.RealtorResponse(realtor),
        },
      };
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = RealtorService;
