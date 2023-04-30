
const Task = require("../models/todolist.model");


async function deleteTask(req, res) {
    try {
        const id = req.params.id

        const result = await Task.findByIdAndDelete(id)
        if(result === null) {
            throw { status: 404, message: "Unable to delete Tasks" };
        } 
        return res.status(200).json({message: "Task successfully deleted"})

    } catch (err) {
        console.error(err)
        res.status(err.status || 500).json({ message: err.message || "Internal Server Error" });
    }
}

module.exports = deleteTask;