import bcrypt from "bcrypt";

import getPool from "../dbjs/getPool.js";

import {
  emailAlreadyRegisteredError,
  userAlreadyRegisteredError,
} from "../services/errorService.js";

const insertUserModel = async (name, email, password_hash) => {
  const pool = await getPool();

  let [users] = await pool.query(`SELECT id FROM users WHERE name = ?`, [name]);

  if (users.length > 0) {
    userAlreadyRegisteredError();
  }

  [users] = await pool.query(`SELECT id FROM users WHERE email = ?`, [email]);

  if (users.length > 0) {
    emailAlreadyRegisteredError();
  }

  const hashedPass = await bcrypt.hash(password_hash, 10);

  await pool.query(
    `INSERT INTO users(name, email, password_hash) VALUES(?, ?, ?)`,
    [name, email, hashedPass]
  );
};

export default insertUserModel;
