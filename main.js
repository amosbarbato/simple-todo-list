const taskInput = document.querySelector('.taskInput');

const taskBtn = document.querySelector('.taskBtn');
taskBtn.addEventListener("click", addTask);

const taskList = document.querySelector('.taskList');
taskList.addEventListener("click", deleteCheck);

function addTask(e) {
    e.preventDefault();

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    const newTask = document.createElement("li");
    newTask.innerText = taskInput.value;
    taskInput.value = "";
    newTask.classList.add("taskItem");
    taskDiv.appendChild(newTask);


    const finishBtn = document.createElement("button");
    finishBtn.innerHTML = '<i class="fas fa-check"></i>';
    finishBtn.classList.add("finishBtn");
    taskDiv.appendChild(finishBtn);


    const trashBtn = document.createElement("button");
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add("trashBtn");
    taskDiv.appendChild(trashBtn);
    

    taskList.appendChild(taskDiv);
}

function deleteCheck(e) {
    const item = e.target;

    if (item.classList[0] === 'trashBtn') {
        const task = item.parentElement;
        task.classList.add("fall");
        task.addEventListener('transitionend', function() {
            task.remove();
        });
    }

    if (item.classList[0] === 'finishBtn') {
        const task = item.parentElement;
        task.classList.toggle("finished");
    }
}
