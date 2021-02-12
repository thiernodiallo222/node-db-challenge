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
    
function getProjectsTR(id) {
    return db("projects").select("projects.id", "projects.name", "projects.description", "projects.completed")
        .join("tasks", "projects.id", "tasks.project_id").select("tasks.id", "tasks.description", "tasks.note", "tasks.completed")
    .where("projects.id", id)
}

module.exports = {
    getProjects,
    getById,
    add,
    getProjectsTR,
    }