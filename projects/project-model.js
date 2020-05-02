const db = require("../data/config");

    function  getProjects(){
        return db("projects")
    }

    function getById(project_id){
        if (!project_id) {
            return null;
        }
        return db("projects").where("projects.id", project_id ).first();
    }
function add(payload) {
   return db("projects").insert(payload);
    }

module.exports = {
    getProjects,
    getById,
    add,
    }