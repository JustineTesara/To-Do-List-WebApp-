const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
  const taskName = taskInput.value;

  if (taskName) {
    const li = document.createElement("li");

    // Task Text
    const span = document.createElement("span");
    span.textContent = taskName;
    span.style.flex = "1";
    li.appendChild(span);

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("btn-delete");
    deleteBtn.addEventListener("click", function () {
      taskList.removeChild(li);
    });
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    taskInput.value = "";

    // Mark as Completed
    const completeBtn = document.createElement("button");
    completeBtn.classList.add("btn");
    completeBtn.textContent = "Complete";
    completeBtn.classList.add("btn-complete");
    completeBtn.addEventListener("click", function () {
      span.style.textDecoration = "line-through";
    });
    li.appendChild(completeBtn);
  }
});
