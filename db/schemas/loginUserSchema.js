import joi from "joi";

import joiErrorMessages from "../schemas/joiErrorMessages.js";

const loginUserSchema = joi.object({
  password_hash: joi.string().required().messages(joiErrorMessages),
  email: joi.string().email().required().messages(joiErrorMessages),
});

export default loginUserSchema;
