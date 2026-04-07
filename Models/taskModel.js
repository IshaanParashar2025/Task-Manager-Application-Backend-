const db = require("../Config/db");

exports.createTask = async (user_id, content) => {
    const sql = "INSERT INTO tasks (user_id, content) VALUES (?,?)";
    const [result] = await db.query(sql, [user_id, content]);
    return result;
};

exports.deleteTask = async (task_id, user_id) => {
    const sql = "DELETE FROM tasks WHERE task_id = ? AND user_id = ?";
    const [result] = await db.query(sql, [task_id]);
    return result;
};

exports.displayTasks = async (user_id) => {
    const sql = "SELECT * FROM tasks WHERE user_id = ?";
    const rows = await db.query(sql, [user_id]);
    return rows;
};

exports.updateTask = async (task_id, user_id, content) => {
    const sql = "UPDATE tasks SET content = ? WHERE task_id = ? AND user_id = ?"
    const [result] = await db.query(sql, [content, task_id, user_id]);
    return result;
}