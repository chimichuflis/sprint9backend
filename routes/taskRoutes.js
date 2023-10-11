const express = require("express");
const router = express.Router();

const {task, tasks, addTask, updateTask} = require("../controllers/taskController.js");

// routes
router.get("/task", tasks);
router.get("/task/:id", task);
router.post("/task", addTask);
router.put("/task/:id", updateTask);




module.exports = router;
