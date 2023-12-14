import express from "express";

const router = express.Router();

import {newUserController,
  loginUserController} from "../controllers/users/index.js";

router.post("/users/register", newUserController);
router.post("/users/login", loginUserController);

export default router;

