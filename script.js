const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
function addTask() {
    const text = taskInput.value.trim();

    if (text === "") {
        alert("Veuillez saisir une tâche !");
        return;
    }

    const li = document.createElement("li");
    const check = document.createElement("span");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");

    check.className = "task-check";
    span.className = "task-text";
    deleteBtn.className = "delete-btn";
    
    span.textContent = text;
    deleteBtn.textContent = "×";
    li.appendChild(check);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    check.addEventListener("click", function () {
        li.classList.toggle("completed");
    });
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });
    console.log("Tâche ajoutée :", text);
    taskInput.value = "";
}
addBtn.addEventListener("click", addTask);




console.log(taskInput)
console.log(addBtn)
console.log(taskList)