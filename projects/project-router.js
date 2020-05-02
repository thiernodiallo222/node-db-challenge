const express = require("express");
const projects = require("./project-model");
const router = express.Router();

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
    
module.exports = router;