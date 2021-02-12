exports.seed = function(knex) {
  return knex("tasks").insert([
      {
          id: 1,
          description: "this is the task 1 description",
          note: "this is a note about the task one not to be ignored please",
          completed: false,
          project_id:2,
      },
        {
          id: 2,
          description: "this is the task 2 description",
          note: "this is a very important note about the task one not to be ignored please",
          completed: false,
          project_id:3,
      },
             {
          id: 3,
          description: "this is the task 3 description",
          note: "this is also a note about the task one not to be ignored please",
          completed: false,
          project_id:1,
      },
        {
          id: 4,
          description: "this is the task 4 description",
          note: "this is, too, a very important note about the task one not to be ignored please",
          completed: false,
          project_id:4,
      },
        {
          id: 5,
          description: "this is the task 5 description",
          note: "this is, too, a very important note about the task one not to be ignored please",
          completed: false,
          project_id:4,
      },
      {
         id: 6,
          description: "this is the task 6 description",
          note: "Did I tell you that this is, too, a very important note about the task one not to be ignored please",
          completed: false,
          project_id:1,
      },
       {
         id: 7,
          description: "this is the task 7 description",
          note: "I guess that I have told l you that this is, too, a very important note about the task one not to be ignored please",
          completed: false,
          project_id:2,
      },
        {
         id: 8,
          description: "this is the task 8 description",
          note: "Hey, I tell you that this is, too, a very important note about the task one not to be ignored please",
          completed: false,
          project_id:3,
      },
         {
         id: 9,
          description: "this is the task 9 description",
          note: "Bouba, I have though balalal I tell you that this is, too, a very important note about the task one not to be ignored please",
          completed: false,
          project_id:1,
      },
          {
         id: 10,
          description: "this is the task 10 description",
          note: "Thierno, I tell you that this is, too, a very important note about the task one not to be ignored please",
          completed: false,
          project_id:3,
         },
      
  ]);
};