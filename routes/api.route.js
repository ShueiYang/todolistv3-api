const express = require('express');
const apiRoute = express.Router();

const addTask = require('../controllers/addTask');
const getTasks = require("../controllers/getTasks");
const toggleTasks = require('../controllers/updateTask');
const deleteTask = require('../controllers/deleteTask');


apiRoute.get("/", getTasks);    

apiRoute.post("/add", addTask); 

apiRoute.put("/update", toggleTasks);    

apiRoute.delete("/delete/:id",  deleteTask);    
  

module.exports = apiRoute;