const db = require("../data/config");

function add(payload) {
   return db("resources").insert(payload);
    }

    function  getResources(){
        return db("resources")
    }

    function getById(resource_id){
        if (!resource_id) {
            return null;
        }
        return db("resources").where("resources.id", resource_id ).first();
    }

module.exports = {
    getResources,
    getById,
    add,
    }