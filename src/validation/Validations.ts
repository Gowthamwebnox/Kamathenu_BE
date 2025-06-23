import Joi from "joi";

function EmailValidation(userValue: { name: string; email: string }) {
  try {
    console.log(userValue);
    const emailValidate = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      email: Joi.string().email().required(),
    });
    const { error, value } = emailValidate.validate(userValue);
    if (error) {
      return {
        value: false,
        err: error,
      };
    } else {
      return {
        value: true,
        mes: value,
      };
    }
  } catch (err) {
    console.log(err + "error in console");
  }
}

function UserData(userValue: {
  name: string;
  email: string;
  password: string;
  otp: string;
  firstname: string;
  lastname: string;
  number: number;
}) {
  try {
    console.log(userValue);

    const signupSchema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).max(100).required(),
      otp: Joi.number().integer().min(100000).max(999999).required(),
      firstname: Joi.string().min(1).max(50).required(),
      lastname: Joi.string().min(1).max(50).required(),
      number: Joi.number().required(),
    });

    const { error, value } = signupSchema.validate(userValue);

    if (error) {
      return {
        value: false,
        err: error,
      };
    } else {
      return {
        value: true,
        mes: value,
      };
    }
  } catch (err) {
    console.log(err + " error in console");
  }
}

function LoginUserData(){

}

module.exports = { EmailValidation, UserData, LoginUserData };
