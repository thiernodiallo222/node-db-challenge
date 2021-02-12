const express = require("express");
const projects = require("./project-model");
const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    if (!req.body.name) {
      res.json({message: "Name is required. Please provide one."})
    } else {
       const payload = {
      name: req.body.name,
      description: req.body.description,
      completed: req.body.completed,
       }
     const created = await projects.add(payload)
      if (created) {
        res.status(200).json(created);
      }
 res.status(500).json({ message: 'Failed to create new project' });
    }    
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req, res, next) => {
    try {
        const data = await projects.getProjects()
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
    const data = await projects.getById(req.params.id)
    if (!data) {
          res.json({message:"data is not found."})
        
        } else {
      res.json(data);
          
    }
  }catch (error) {
          next(error);
      }
})
router.get('/:id/detailedView', async(req, res, next)=> {
  try {
    const project = await projects.getProjectsTR(req.params.id);
    if (!project) {
      res.json({message:"Sorry, we cannot find a specific project"})
    }
    res.json(project);
  } catch (error) {
    next(error);
  }
})
    
module.exports = router;