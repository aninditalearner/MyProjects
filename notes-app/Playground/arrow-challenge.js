const tasks = {
  tasks: [
    {
      text: "Grocery shopping",
      completed: true,
    },
    {
      text: "Clean yard",
      completed: false,
    },
    {
      text: "Film course",
      completed: false,
    },
  ],

  getTasksToDo() {
    const workToDo = this.tasks.filter(function (task) {
      return !task.completed;
    });
    return workToDo.map((task) => task.text);
  },
};

console.log(tasks.getTasksToDo());
