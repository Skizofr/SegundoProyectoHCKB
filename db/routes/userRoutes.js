import express from "express";

const router = express.Router();

import {newUserController} from "../controllers/users/index.js";

router.post("/users/register", newUserController);

export default router;