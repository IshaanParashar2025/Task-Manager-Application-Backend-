const taskModel = require("../Models/taskModel");

exports.createTask = async (req, res) => {
    const {content} = req.body;
    if (!content) return res.status(400).json({
        success: false,
        message:"Content is required"
    })
    
    const id = req.user.user_id;

    const {result} = await taskModel.createTask(id, content);
    res.json({
        success: true,
        message: "Task created",
        data: result
    });
};

exports.deleteTask = async (req, res) => {
    const task_id = req.param.id;
    
    const user_id = req.user.user_id;
    
    const {result} = await taskModel.deleteTask(task_id, user_id);
    res.json({
        success: true,
        message: "Task created",
        data: result
    });
};

exports.displayTasks = async (req, res) => {
    const user_id = req.user.user_id;

    const [result] = await taskModel.displayTasks(user_id);

    res.json({
        success: true,
        message: "Task created",
        data: result
    });
};

exports.updateTask = async (req, res) => {
    const {content} = req.body;

    if (!content) return res.status(400).json({
        success: false,
        message: "Content is missing"
    });

    const task_id = req.param.id;

    const user_id = req.user.user_id;

    const {result} = taskModel.updateTask(task_id, user_id, content);

    res.json({
        success: true,
        message: "Task Updated",
        data: result
    })
}