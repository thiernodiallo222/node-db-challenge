const express = require('express');
const projects = require("./project-model.js");
const router = express.Router();


router.get('/', async (req, res, next) => {
    try {
        const data = await projects.getProjects();
        if (!data) {
            res.json({message: "data not found"})
        }
            res.json(data) 
    } catch (error) {
        
    }
})
    
