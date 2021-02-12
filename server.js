const express = require('express');
const server = express();
const projectsRouter = require("../node-db-challenge/projects/project-router");
const tasksRouter = require('../node-db-challenge/tasks/task-router');
const resourcesRouter = require('../node-db-challenge/resources/resource-router');

server.use(express.json());

server.use('/api/projects', projectsRouter);
server.use('/api/tasks', tasksRouter);
server.use('/api/resources', resourcesRouter);

module.exports = server;

