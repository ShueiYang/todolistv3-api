const Task = require("../models/todolist.model");


async function getTasks(req, res) {
   
    try {
        const result = await Task.find({}).exec();
        res.status(200).json(result);

    } catch (err) {
        console.error(err)
        res.status(err.status || 500).json({ message: err.message || "Internal Server Error" });
    }
}

module.exports = getTasks;