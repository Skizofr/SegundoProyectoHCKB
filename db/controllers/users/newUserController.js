import randomstring from "randomstring";

import insertUserModel from "../../models/insertUserModel.js";

import validateSchemaUtil from "../../utils/validateSchemaUtil.js";

import newUserSchema from "../../schemas/newUserSchema.js";

const newUserController = async (req, res, next) => {
  try {
    const { name, email, password_hash } = req.body;

    await validateSchemaUtil(newUserSchema, req.body);

    const registrationCode = randomstring.generate(30);

    await insertUserModel(name, email, password_hash, registrationCode);

    res.send({
      status: "ok",
      message: "Usuario creado",
    });
  } catch (err) {
    next(err);
  }
};

export default newUserController;
