const mysql2 = require("mysql2/promise");

const db = mysql2.createPool(
    {
        host:"localhost",
        user:"root",
        password:"your_password",
        database:"task_manager"
    }
)

module.exports = db;
