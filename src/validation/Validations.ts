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

function LoginUserData(userValue: { 
  email: string;
  password: string;
  }){
    try{
        const loginSchema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().min(6).max(100).required(),
          });
          const { error, value } = loginSchema.validate(userValue);
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
    } 
    catch(err){
        console.log(err + " error in console");
    }

}
export const adminContactValidation = (userValue: { name: string; email: string; message: string; subject: string }) => {
  try {
    const adminContactSchema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      email: Joi.string().email().required(),
      message: Joi.string().required(),
      subject: Joi.string().required(), 
    });
    const { error, value } = adminContactSchema.validate(userValue);
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
module.exports = { EmailValidation, UserData, LoginUserData,adminContactValidation };
