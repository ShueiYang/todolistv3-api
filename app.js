const express = require('express');
const cors = require("cors");

const apiRoute = require("./routes/api.route");


const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=> {
    res.send("Welcome to todoList-v3 API 👋🌏✨🌈")
})

app.use("/v1", apiRoute);


app.all("*", (req, res) => {
    res.status(404).json({ message: "This route does not exist" });
});

module.exports = app;