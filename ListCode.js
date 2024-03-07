function addTask(ele, event) {
  if (event.key === 'Enter') {
    var ul = document.getElementById("toDo");
    var li = document.createElement("li");

    var spanText = document.createElement("span");
    spanText.textContent = ele.value;
    li.appendChild(spanText);

    var completeTaskGroup = document.createElement("div");
    var spanCompleteTask = document.createElement('span');
    spanCompleteTask.textContent = "Complete Task:          ";
    completeTaskGroup.appendChild(spanCompleteTask);
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function () { completeTask(li); };
    completeTaskGroup.appendChild(checkbox);
    li.appendChild(completeTaskGroup);

    var dueDateGroup = document.createElement("div");
    var spanDueDate = document.createElement("span");
    spanDueDate.textContent = "Due Date:          ";
    dueDateGroup.appendChild(spanDueDate);
    var dateBox = document.createElement("input");
    dateBox.type = "date";
    dueDateGroup.appendChild(dateBox);
    li.appendChild(dueDateGroup);

    var colorGroup = document.createElement("div");
    var spanColor = document.createElement("span");
    spanColor.textContent = "Select Color:          ";
    colorGroup.appendChild(spanColor);
    var color = document.createElement("input");
    color.type = "color";
    color.addEventListener("change", watchColorPicker, false);
    colorGroup.appendChild(color)
    li.appendChild(colorGroup);

    var subtaskGroup = document.createElement("div");
    var spanSubtask = document.createElement("span");
    spanSubtask.textContent = "Add a subtask:          ";
    subtaskGroup.appendChild(spanSubtask);
    var subtask = document.createElement("input");
    subtask.type = "text";
    subtask.addEventListener("keydown", function (event) { if (event.key === 'Enter') { addSubtask(this, li) }});
    subtaskGroup.appendChild(subtask);
    li.appendChild(subtaskGroup);


    var deleteGroup = document.createElement("div");
    var spanDelete = document.createElement("span");
    spanDelete.textContent = "Delete Task:          ";
    deleteGroup.appendChild(spanDelete);
    var deleteBox = document.createElement("input");
    deleteBox.type = "checkbox";
    deleteBox.onclick = function () { li.remove() };
    deleteGroup.appendChild(deleteBox);
    li.appendChild(deleteGroup);

    var subtaskList = document.createElement("ul");
    li.appendChild(subtaskList);
    li.classList.add("default");
    ul.appendChild(li);
    ele.value = "";
    event.preventDefault();
  }
}

function addSubtask(ele, task) {
    var ul = task.querySelector("ul");
    var li = document.createElement("li");
    var spanText = document.createElement("span");
    spanText.textContent = ele.value;
    li.appendChild(spanText);

    var completeTaskGroup = document.createElement("div");
    var spanCompleteTask = document.createElement('span');
    spanCompleteTask.textContent = "Complete Subtask:          ";
    completeTaskGroup.appendChild(spanCompleteTask);
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function () { completeSubtask(li); };
    completeTaskGroup.appendChild(checkbox);
    li.appendChild(completeTaskGroup);

    var dueDateGroup = document.createElement("div");
    var spanDueDate = document.createElement("span");
    spanDueDate.textContent = "Due Date:          ";
    dueDateGroup.appendChild(spanDueDate);
    var dateBox = document.createElement("input");
    dateBox.type = "date";
    dueDateGroup.appendChild(dateBox);
    li.appendChild(dueDateGroup);

    var colorGroup = document.createElement("div");
    var spanColor = document.createElement("span");
    spanColor.textContent = "Select Color:          ";
    colorGroup.appendChild(spanColor);
    var color = document.createElement("input");
    color.type = "color";
    color.addEventListener("change", watchColorPicker, false);
    colorGroup.appendChild(color)
    li.appendChild(colorGroup);

    var deleteGroup = document.createElement("div");
    var spanDelete = document.createElement("span");
    spanDelete.textContent = "Delete Subtask:          ";
    deleteGroup.appendChild(spanDelete);
    var deleteBox = document.createElement("input");
    deleteBox.type = "checkbox";
    deleteBox.onclick = function () { li.remove() };
    deleteGroup.appendChild(deleteBox);
    li.appendChild(deleteGroup);

    li.classList.add("default");
    ul.appendChild(li);
    ele.value = "";
    event.preventDefault();
}


function completeTask(li) {
  var completedList = document.getElementById("completed");
  var toDoList = document.getElementById("toDo");
  if (li.parentNode === toDoList) {
    var subtasks = li.querySelector("ul");
    while (li.childNodes.length > 1) {
      li.removeChild(li.lastChild);
    }
    var audio = new Audio('check.mp3');
    audio.play();
    let completionDate = new Date().toDateString();
    console.log(completionDate);


    var span = document.createElement('span');
    span.textContent = "Task completed on:\n" + completionDate;
    li.appendChild(span);

    var uncompleteTaskGroup = document.createElement("div");
    var spanUncompleteTask = document.createElement('span');
    spanUncompleteTask.textContent = "Uncomplete Task:          ";
    uncompleteTaskGroup.appendChild(spanUncompleteTask);
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function () { uncompleteTask(li); };
    uncompleteTaskGroup.appendChild(checkbox);
    li.appendChild(uncompleteTaskGroup);

    var deleteGroup = document.createElement("div");
    var spanDelete = document.createElement("span");
    spanDelete.textContent = "Delete Task:          ";
    deleteGroup.appendChild(spanDelete);
    var deleteBox = document.createElement("input");
    deleteBox.type = "checkbox";
    deleteBox.onclick = function () { li.remove() };
    deleteGroup.appendChild(deleteBox);
    li.appendChild(deleteGroup);
    li.appendChild(subtasks);
    subtasks.style.display = "none";


    li.classList.add("default");
    completedList.appendChild(li);
    li.firstChild.style.color = "grey";
  }
}


function completeSubtask(li) {
  var completedList = document.getElementById("completed");
  var taskItem = li.parentElement.parentElement;
  if (taskItem.parentNode === document.getElementById("toDo")) {
    li.originalParent = taskItem;
    while (li.childNodes.length > 1) {
      li.removeChild(li.lastChild);
    }
    var audio = new Audio('check.mp3');
    audio.play();
    let completionDate = new Date().toDateString();
    console.log(completionDate);


    var span = document.createElement('span');
    span.textContent = "Subtask completed on:\n" + completionDate;
    li.appendChild(span);

    var uncompleteTaskGroup = document.createElement("div");
    var spanUncompleteTask = document.createElement('span');
    spanUncompleteTask.textContent = "Uncomplete Subtask:          ";
    uncompleteTaskGroup.appendChild(spanUncompleteTask);
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function () { uncompleteSubtask(li); };
    uncompleteTaskGroup.appendChild(checkbox);
    li.appendChild(uncompleteTaskGroup);

    var deleteGroup = document.createElement("div");
    var spanDelete = document.createElement("span");
    spanDelete.textContent = "Delete Subtask:          ";
    deleteGroup.appendChild(spanDelete);
    var deleteBox = document.createElement("input");
    deleteBox.type = "checkbox";
    deleteBox.onclick = function () { li.remove() };
    deleteGroup.appendChild(deleteBox);
    li.appendChild(deleteGroup);
    li.classList.add("default");
    completedList.appendChild(li);
    li.firstChild.style.color = "grey";
  }
}


function uncompleteTask(li) {
  var completedList = document.getElementById("completed");
  var toDoList = document.getElementById("toDo");
  if (li.parentNode === completedList) {
    var subtasks = li.querySelector("ul");

    while (li.childNodes.length > 1) {
      li.removeChild(li.lastChild);
    }

    var completeTaskGroup = document.createElement("div");
    var spanCompleteTask = document.createElement('span');
    spanCompleteTask.textContent = "Complete Task:          ";
    completeTaskGroup.appendChild(spanCompleteTask);
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function () { completeTask(li); };
    completeTaskGroup.appendChild(checkbox);
    li.appendChild(completeTaskGroup);

    var dueDateGroup = document.createElement("div");
    var spanDueDate = document.createElement("span");
    spanDueDate.textContent = "Due Date:          ";
    dueDateGroup.appendChild(spanDueDate);
    var dateBox = document.createElement("input");
    dateBox.type = "date";
    dueDateGroup.appendChild(dateBox);
    li.appendChild(dueDateGroup);

    var colorGroup = document.createElement("div");
    var spanColor = document.createElement("span");
    spanColor.textContent = "Select Color:          ";
    colorGroup.appendChild(spanColor);
    var color = document.createElement("input");
    color.type = "color";
    color.addEventListener("change", watchColorPicker, false);
    colorGroup.appendChild(color)
    li.appendChild(colorGroup);

    var subtaskGroup = document.createElement("div");
    var spanSubtask = document.createElement("span");
    spanSubtask.textContent = "Add a subtask:          ";
    subtaskGroup.appendChild(spanSubtask);
    var subtask = document.createElement("input");
    subtask.type = "text";
    subtask.addEventListener("keydown", function (event) { if (event.key === 'Enter') { addSubtask(this, li) }});
    subtaskGroup.appendChild(subtask);
    li.appendChild(subtaskGroup);

    var deleteGroup = document.createElement("div");
    var spanDelete = document.createElement("span");
    spanDelete.textContent = "Delete Task:          ";
    deleteGroup.appendChild(spanDelete);
    var deleteBox = document.createElement("input");
    deleteBox.type = "checkbox";
    deleteBox.onclick = function () { li.remove() };
    deleteGroup.appendChild(deleteBox);
    li.appendChild(deleteGroup);

    li.appendChild(subtasks);
    subtasks.style.display = "initial";

    toDoList.append(li);
    li.classList.add("default");
    li.firstChild.style.color = "black";
  }
}

function uncompleteSubtask(li) {
  var completedList = document.getElementById("completed");
  var toDoList = document.getElementById("toDo");
  if (li.parentNode === completedList) {
    var taskItem = li.originalParent;
    if (taskItem && taskItem.parentNode === toDoList) {
    while (li.childNodes.length > 1) {
      li.removeChild(li.lastChild);
    }


    var completeTaskGroup = document.createElement("div");
    var spanCompleteTask = document.createElement('span');
    spanCompleteTask.textContent = "Complete Subtask:          ";
    completeTaskGroup.appendChild(spanCompleteTask);
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function () { completeSubtask(li); };
    completeTaskGroup.appendChild(checkbox);
    li.appendChild(completeTaskGroup);

    var dueDateGroup = document.createElement("div");
    var spanDueDate = document.createElement("span");
    spanDueDate.textContent = "Due Date:          ";
    dueDateGroup.appendChild(spanDueDate);
    var dateBox = document.createElement("input");
    dateBox.type = "date";
    dueDateGroup.appendChild(dateBox);
    li.appendChild(dueDateGroup);

    var colorGroup = document.createElement("div");
    var spanColor = document.createElement("span");
    spanColor.textContent = "Select Color:          ";
    colorGroup.appendChild(spanColor);
    var color = document.createElement("input");
    color.type = "color";
    color.addEventListener("change", watchColorPicker, false);
    colorGroup.appendChild(color)
    li.appendChild(colorGroup);



    var deleteGroup = document.createElement("div");
    var spanDelete = document.createElement("span");
    spanDelete.textContent = "Delete Subtask:          ";
    deleteGroup.appendChild(spanDelete);
    var deleteBox = document.createElement("input");
    deleteBox.type = "checkbox";
    deleteBox.onclick = function () { li.remove() };
    deleteGroup.appendChild(deleteBox);
    li.appendChild(deleteGroup);

    var subtaskList = taskItem.querySelector("ul");
    subtaskList.appendChild(li);
    li.classList.add("default");
    li.firstChild.style.color = "black";
    }
  }
}


function watchColorPicker(event) {
  var listItem = event.target.parentNode.parentNode;
  var textNode = listItem.childNodes[0];
  var span = document.createElement('span');
  span.style.color = event.target.value;
  span.textContent = textNode.textContent;
  listItem.replaceChild(span, textNode);
}
function append() {
  var listItems = document.querySelectorAll(".default");
  listItems.forEach(function(li) {
    var completeTaskGroup = document.createElement("div");
    var spanCompleteTask = document.createElement('span');
    spanCompleteTask.textContent = "Complete Task:          ";
    completeTaskGroup.appendChild(spanCompleteTask);
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function () { completeTask(li); };
    completeTaskGroup.appendChild(checkbox);
    li.appendChild(completeTaskGroup);

    var dueDateGroup = document.createElement("div");
    var spanDueDate = document.createElement("span");
    spanDueDate.textContent = "Due Date:          ";
    dueDateGroup.appendChild(spanDueDate);
    var dateBox = document.createElement("input");
    dateBox.type = "date";
    dueDateGroup.appendChild(dateBox);
    li.appendChild(dueDateGroup);

    var colorGroup = document.createElement("div");
    var spanColor = document.createElement("span");
    spanColor.textContent = "Select Color:          ";
    colorGroup.appendChild(spanColor);
    var color = document.createElement("input");
    color.type = "color";
    color.addEventListener("change", watchColorPicker, false);
    colorGroup.appendChild(color)
    li.appendChild(colorGroup);

    var subtaskGroup = document.createElement("div");
    var spanSubtask = document.createElement("span");
    spanSubtask.textContent = "Add a subtask:          ";
    subtaskGroup.appendChild(spanSubtask);
    var subtask = document.createElement("input");
    subtask.type = "text";
    subtask.addEventListener("keydown", function (event) { if (event.key === 'Enter') { addSubtask(this, li) }});
    subtaskGroup.appendChild(subtask);
    li.appendChild(subtaskGroup);

    var deleteGroup = document.createElement("div");
    var spanDelete = document.createElement("span");
    spanDelete.textContent = "Delete Task:          ";
    deleteGroup.appendChild(spanDelete);
    var deleteBox = document.createElement("input");
    deleteBox.type = "checkbox";
    deleteBox.onclick = function () { li.remove() };
    deleteGroup.appendChild(deleteBox);
    li.appendChild(deleteGroup);
    var subtaskList = document.createElement("ul");
    li.appendChild(subtaskList);
  });
}
function toggleSubtaskInput() {
  var subtaskInputs = document.querySelectorAll("#toDo input[type='text']");
  subtaskInputs.forEach(function(input) {
    input.style.display = (input.style.display === "none") ? "block" : "none";
  });
}
window.onload = function() {
  append();
};
