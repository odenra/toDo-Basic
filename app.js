document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");

  addTaskBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      const newTask = document.createElement("li");
      newTask.innerHTML = `
                <span class="task-text">${taskText}</span>
                <div class="actions">
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                    <button class="complete-btn">Complete</button>
                </div>
            `;

      const deleteBtn = newTask.querySelector(".delete-btn");
      const editBtn = newTask.querySelector(".edit-btn");
      const completeBtn = newTask.querySelector(".complete-btn");
      const taskTextSpan = newTask.querySelector(".task-text");

      deleteBtn.addEventListener("click", function () {
        newTask.remove();
      });

      editBtn.addEventListener("click", function () {
        const updatedText = prompt("Enter updated task:", taskText);
        if (updatedText !== null) {
          taskTextSpan.textContent = updatedText;
        }
      });

      completeBtn.addEventListener("click", function () {
        newTask.classList.toggle("completed");
      });

      taskList.appendChild(newTask);
      taskInput.value = "";
    }
  });
});
