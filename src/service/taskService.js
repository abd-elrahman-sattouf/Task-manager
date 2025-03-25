const tasks = [
  { id: 1, todo: "task 1", time: "01:00" },
  { id: 2, todo: "task 2", time: "02:00" },
  { id: 3, todo: "task 3", time: "03:00" },
  { id: 4, todo: "task 4", time: "04:00" },
  { id: 5, todo: "task 5", time: "05:00" },
  { id: 6, todo: "task 6", time: "06:00" },
  { id: 7, todo: "task 7", time: "07:00" },
  { id: 8, todo: "task 8", time: "08:00" },
  { id: 9, todo: "task 9", time: "09:00" },
  { id: 10, todo: "task 10", time: "10:00" },
];

function getTasks() {
  return tasks;
}

function getTask(id) {
  return tasks.find((task) => task.id === parseInt(id));
}

function postTask(task) {
  tasks.push(task);
  return { message: "element created" };
}

function updateTask(task) {
  tasks.push(task)
  return { message: "element updated" };
}

function deleteTask(id) {
  const task = tasks.pop(tasks.find((task)=>task.id === parseInt(id)))
  return task;
}
module.exports = { getTasks, getTask, postTask, updateTask, deleteTask };
