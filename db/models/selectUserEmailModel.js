import getPool from '../dbjs/getPool.js';

const selectUserEmailModel = async (email) => {
    const pool = await getPool();

    const [users] = await pool.query(
        `SELECT id, password_hash FROM users WHERE email = ?`,
        [email]
    );

    return users[0];
};

export default selectUserEmailModel;
