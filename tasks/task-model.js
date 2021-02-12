const db = require("../data/config");

function add(payload) {
   return db("tasks").insert(payload);
    }

    function  getTasks(){
        return db("tasks")
    }

    function getById(task_id){
        if (!task_id) {
            return null;
        }
        return db("tasks").where("tasks.id", task_id ).first();
    }

module.exports = {
    getTasks,
    getById,
    add,
    }