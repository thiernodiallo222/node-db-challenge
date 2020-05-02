const express = require("express");
const projects = require("./resource-model");
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

router.get('/:id/instructions', async (req, res, next) => {
  try {
    // const id = req.params.id;
    const data = await recipes.getInstructions(req.params.id)
        if (data.length) {
          res.json(data);
        } else {
          res.json({message:"data is not found."})
    }
  }catch (error) {
          next(error);
      }
})
    
module.exports = router;