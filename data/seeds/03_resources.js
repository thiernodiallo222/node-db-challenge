exports.seed = function(knex) {
  return knex("resources").insert([
      {
          id: 1,
          name: "computer",
          description: "It helps organize and keep track of information"
      },
      {
          id: 2,
          name: "conference Room",
          description: "It helps gather team and discuss about the project and keep track of information"
      },
      {
          id: 3,
          name: "microphone",
          description: "It helps raise the voice in public  and keep track of information"
      },
      {
          id: 4,
          name: "delivery van",
          description: "It helps deliver stuff and keep track of information"
      },
      {
          id: 5,
          name: "Office phone",
          description: "It helps make calls  and keep track of information"
      },
  ]);
};