const express = require('express');
const router = express.Router();
const {getTasks, getTask, postTask, updateTask, deleteTask} = require('../service/taskService.js');

router.get('/tasks', (req, res) => {
    const tasks = getTasks();
    return res.status(200).json(tasks);
});

router.get('/task/:id', (req, res) => {
    const id = req.params.id;
    const task = getTask(id);
    if(task){
        return res.status(200).json(task)
    }else{
        return res.status(404).send({msg:"task isn't found"})
    } ;
});

router.post('/tasks',(req,res) =>{
    const Task = req.body;
    const showTask = postTask(Task);
    return res.status(201).json(showTask)
})

router.put('/tasks', (req,res)=>{
    const updatedTask = req.body
    return res.status(200).send(updateTask(updatedTask))
})

router.delete('/task/:id', (req,res)=>{
    const id = req.params.id
    const deletedTask = deleteTask(id)
    if(deletedTask){
        return res.status(204).json({msg:"task was deleted"})
    }else{
        res.status(404).send("task not found")
    }
})

module.exports = router