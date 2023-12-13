import joi from "joi";

import joiErrorMessages from "./joiErrorMessages.js";

const newUserSchema = joi.object({
  name: joi.string().required().messages(joiErrorMessages),
  email: joi.string().email().required().messages(joiErrorMessages),
  password_hash: joi
    .string()
    .pattern(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[¡!$%^&*()_+|~=`{}:";'<>¿?,.])[a-zA-Z0-9¡!$%^&*()_+|~=`{}:";'<>¿?,.]{8,}$/
    )
    .required()
    .messages(joiErrorMessages),
});

export default newUserSchema;
