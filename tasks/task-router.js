const express = require("express");
const tasks = require("./task-model");
const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    if (!req.body.description||!req.body.project_id) {
      res.json({message: "Somme information is missing. Please fill out all required fields."})
    } else {
       const payload = {
      description: req.body.description,
      note: req.body.note,
      completed: req.body.completed,
      project_id:req.body.project_id,
       }
     const created = await tasks.add(payload)
      if (created) {
        res.status(200).json(created);
      }
 res.status(500).json({ message: 'Failed to create new task' });
    }    
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req, res, next) => {
    try {
        const data = await tasks.getTasks()
        if (!data) {
            res.json({message:"Empty resource"})
        }
        res.json(data);
    } catch (error) {
        next(error);
    }
})

router.get('/:id', async (req, res, next) => {
  try {
    // const id = req.params.id;
    const data = await tasks.getById(req.params.id)
        if (data) {
          res.json(data);
        } else {
          res.json({message:"data is not found."})
    }
  }catch (error) {
          next(error);
      }
})
    
module.exports = router;