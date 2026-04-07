const db = require("../Config/db");

exports.createUser = async (name, email, password) => {
    const sql = "INSERT INTO users (name, email, password) VALUES (?,?,?)";

    const {result} = await db.query(sql, [name, email, password]);
    return result;
};

exports.deleteUser = async (user_id) => {
    const sql = "DELETE FROM users WHERE user_id = ?";

    const {result} = await db.query(sql, [user_id]);
    return result;
};

exports.findUserByEmail = async (email) => {
    const sql = "SELECT * FROM users WHERE email = ?";
    const [rows] = await db.query(sql, [email]);
    return rows[0];
}