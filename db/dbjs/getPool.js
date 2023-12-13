import mysql from "mysql2/promise";

let pool;

const getPool = async () => {
  try {
    if (!pool) {
      pool = mysql.createPool({
        connectionLimit: 10,
        host: "localhost",
        user: "root",
        password: "Aquí va tu contraseña",
        database: "secondproject",
        timezone: "Z",
      });
    }

    return pool;
  } catch (err) {
    console.error(err);
  }
};

export default getPool;
