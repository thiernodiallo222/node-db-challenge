const express = require("express");
const resources = require("./resource-model");
const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    if (!req.body.name) {
      res.json({message: "Name is required. Please provide one."})
    } else {
       const payload = {
      name: req.body.name,
      description: req.body.description,
      // completed: req.body.completed,
       }
     const created = await resources.add(payload)
      if (created) {
        res.status(200).json(created);
      }
 res.status(500).json({ message: 'Failed to create new resource' });
    }    
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req, res, next) => {
    try {
        const data = await resources.getResources()
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
    const data = await resources.getById(req.params.id)
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