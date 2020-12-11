function addTask() {
  const taskList = document.querySelector('#lista-tarefas');
  const taskButton = document.querySelector("#criar-tarefa");

  taskButton.addEventListener('click', () => {
      const inputText = document.querySelector('#texto-tarefa');
    const taskElement = document.createElement('li');
    taskElement.innerHTML = inputText.value;
    taskList.appendChild(taskElement);
    taskList.next;
    inputText.value = '';
  });
}

addTask();

function addTaskColor() {
  const taskList = document.querySelector('#lista-tarefas');
  taskList.addEventListener('click', (event) => {
    const chosen = document.querySelector('.chosen');
    if (chosen == null) {
      event.target.classList.add('chosen');
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    } else {
      chosen.classList.remove('chosen');
      chosen.style.backgroundColor = '';
      event.target.classList.add('chosen');
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
  });
}
addTaskColor();

function completedTasks() {
  const item = document.querySelector('#lista-tarefas');
  item.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}
completedTasks();

function cleanList() {
  const cleanButton = document.querySelector('#apaga-tudo');
  cleanButton.addEventListener('click', () => {
    const taskList = document.querySelector('#lista-tarefas');
    taskList.innerHTML = '';
  });
}
cleanList();

function eraseCompleted() {
  const buttonEraseCompleted = document.querySelector('#remover-finalizados');
  buttonEraseCompleted.addEventListener('click', () => {
    const taskList = document.querySelector('#lista-tarefas');
    for (let index = 0; index < taskList.children.length; index++) {
      if (taskList.children[index].classList.contains('completed')) {
        taskList.removeChild(taskList.children[index]);
        index -= 1;
      }
    }
  });
}
eraseCompleted();
