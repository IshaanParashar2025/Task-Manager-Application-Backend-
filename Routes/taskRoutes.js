const express = require("express");
const router = express.Router();

const taskController = require("../Controllers/taskController");
const auth = require("../Middleware/authMiddleware");

router.post("/tasks", auth, taskController.createTask);
router.delete("/tasks", auth, taskController.deleteTask);
router.get("/tasks/:id", auth, taskController.displayTasks);
router.put("/task/:id", auth, taskController.updateTask);

module.exports = router;