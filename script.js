
function addTask() {
    var taskInput = document.getElementById('taskInput');
    var dueDateInput = document.getElementById('dueDate');
    var taskText = taskInput.value.trim();
    var dueDate = dueDateInput.value;
  
    if (taskText !== '') {
      var taskList = document.getElementById('taskList');
      var newTask = document.createElement('li');
      newTask.innerHTML = taskText + ' - Due: ' + dueDate + '<span class="close" onclick="removeTask(this)">×</span>';
      taskList.appendChild(newTask);
  
      // Clear the input fields
      taskInput.value = '';
      dueDateInput.value = '';
    }
  }
  
  // Function to remove a task
  function removeTask(task) {
    task.parentNode.remove();
  }
  