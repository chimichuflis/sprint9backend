const express = require("express");
const taskRoutes = require("./routes/taskRoutes.js");

const app = express();
app.use(express.json());
const port = 8000;



app.get("/", (req,res)=>{
  res.json("Hola mundo");
});
app.use("/api",taskRoutes);
app.get("*", (req,res)=>{
  res.status(404).json("not found!");
});


app.listen(port,()=>{
  console.log("Listening on port " + port);
})
