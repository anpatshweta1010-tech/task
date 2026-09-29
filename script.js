function addTask() {

    // Get input value
    let taskInput = document.getElementById("taskInput");

    let task = taskInput.value.trim();

    // Check if input is empty
    if (task === "") {

        alert("Please enter a task!");

        return;
    }

    // Create new list item
    let li = document.createElement("li");

    // Create task text
    let taskText = document.createElement("span");

    taskText.textContent = task;

    // Create delete button
    let deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.className = "delete-btn";

    // Delete task
    deleteButton.onclick = function() {

        li.remove();

    };

    // Add task and button to li
    li.appendChild(taskText);

    li.appendChild(deleteButton);

    // Add li to task list
    document.getElementById("taskList").appendChild(li);

    // Clear input
    taskInput.value = "";
}