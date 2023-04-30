const Task = require("../models/todolist.model");


async function addTask(req, res) {
    try {
        const task = req.body.title
        if(!task) {
          throw { status: 400, message: "Please provide a Task" };
        }  
        const newTask = new Task({title: task});
        const saveTask = await newTask.save(); 
        return res.status(201).json({
            message: "task successfully add",
            task : saveTask,
        })

    } catch (err) {
        console.error(err)
        res.status(err.status || 500).json({ message: err.message || "Internal Server Error" });
    }
}


module.exports = addTask;