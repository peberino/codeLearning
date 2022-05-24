let task = prompt("What would you like to do?");
let todo = 0;
const todos = [];

while (task !== "quit") {
  // Add task
  if (task === "new") {
    console.log("Specify the new task.");
    let todo = prompt("Specify the new task.");
    todos.push(todo);
    console.log(`${todo} has been added to the task list.`);
    task = prompt("What would you like to do next?");
    // Delete option
  } else if (task === "delete") {
    console.log("Please enter the index of the task you want to remove."); // Stuck as fuck
    let todo = prompt("Please enter the index of the task you want to remove.");
    if (todo >= 0 && todo <= todos.length) {
      todos.splice(todo, 1);
      for (tasks of todos) {
        console.log(tasks);
      }
      task = prompt("What would you like to do next?");
    } else {
      console.log(`${todo} is not a valid number. Please try again.`);
    }
    // Print the list.
  } else if (task === "list") {
    for (tasks of todos) {
      console.log(`${todos.indexOf(tasks)} | ${tasks}`);
    }
    task = prompt("What would you like to do next?");
  } else {
    console.log("Instruction not recognized. What would you like to do next?");
    task = prompt(
      "Instruction not recognized. What would you like to do next?"
    );
  }
}
console.log("Program ended.");
