const Task = require("../models/todolist.model");


async function toggleTasks(req, res) {
    try {
        const { id, status } = req.body
        const newStatus = !status

        const result = await Task.findByIdAndUpdate(id, {done: newStatus})
        if(result === null) {
            throw { status: 404, message: "Unable to update Tasks" };
        } 
        return res.status(200).json({message: "Task status updated"})

    } catch (err) {
        console.error(err)
        res.status(err.status || 500).json({ message: err.message || "Internal Server Error" });
    }
}

module.exports = toggleTasks;