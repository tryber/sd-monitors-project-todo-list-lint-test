function cleanList() {
  const cleanButton = document.querySelector('#apaga-tudo');
  cleanButton.addEventListener('click', () => {
    const taskList = document.querySelector('#lista-tarefas');
    taskList.innerHTML = '';
  });
}
cleanList();
