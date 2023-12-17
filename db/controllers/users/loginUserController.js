import bcrypt from "bcrypt";

import selectUserEmailModel from "../../models/selectUserEmailModel.js";

import validateSchemaUtil from "../../utils/validateSchemaUtil.js";

import loginUserSchema from "../../schemas/loginUserSchema.js";

import { invalidCredentialsError } from "../../services/errorService.js";

const loginUserController = async (req, res, next) => {
  try {
    const { email, password_hash } = req.body;

    await validateSchemaUtil(loginUserSchema, req.body);

    const user = await selectUserEmailModel(email, password_hash);

    let validPass;

    if (user) {
      validPass = await bcrypt.compare(password_hash, user.password_hash);
    }

    if (!user || !validPass) {
      invalidCredentialsError();
    }

    res.send({
      status: "ok",
      data: {
        id: user.id,
      },
    });
  } catch (err) {
    next(err);
  }
};

export default loginUserController;
