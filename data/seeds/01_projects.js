
exports.seed = function(knex) {
  return knex("projects").insert([
      {
          id:1,
          name: "project one",
          description: "this is the first project's description",
          completed:false,
      },
       
      {
          id:2,
          name: "project two",
          description: "this is the third project's description",
          completed:false,
      },
      {
          id:3,
          name: "project tree",
          description: "this is the fourth project's description",
          completed:false,
        },
      {
          id:4,
          name: "project four",
          description: "this is the first project's description",
          completed:false,
      },
  ]);
};