const taskList = require("../api/task.js");
const knex = require("../config/knex");


const tasks = async (req,res)=>{
  try {
    const result = await knex("tareas");
    res.json(result);
  } catch (error) {
    res.status(400).json(error)
  }
}

const task = async (req,res)=>{
  try{
    const result = await knex("tareas")
      .select("titulo", "usuario_id", "prioridad_id", "completado")
      .where("id", req.params.id)
      .first()
    res.json(result);
  }catch(err){
      res.status(400).json({error: err});
  }
}


const addTask = async (req,res)=>{
  try{
    const newTask = req.body;
    if(newTask.titulo && newTask.usuario_id && newTask.prioridad_id){
      newTask.completado = false;

      await knex("tareas").insert(newTask);

      res.json("se agregaron datos correctamente...")
    }else{
      res.status(404).json("datos incorrectos");
    }
  }
  catch(err){
    res.json(err);
  }
}

const updateTask = async (req,res)=>{
  try{
    await knex("tareas")
      .update(req.body)
      .where("id", req.params.id);
    res.json(req.body);
  }
  catch(err){
    res.status(400).json({error: err});
  }
}

module.exports = {tasks, task, addTask, updateTask}
