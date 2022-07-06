let inputField = document.getElementById('inputField');
let addButton = document.getElementById('add-to-do');
let toDoItems = document.getElementById('toDoItems');

addButton.addEventListener('click', function() {
	let paragraph = inputField.value;
	let newLi = document.createElement('li');
	let deleteButton = document.createElement('button');
	let newPara = document.createElement('p');
	newPara.innerHTML = paragraph;
	newPara.setAttribute('id', 'newPara')
	newLi.setAttribute('id', 'toDoItem')
	deleteButton.setAttribute('id', 'xButton')
	deleteButton.innerHTML = 'x';
	newLi.appendChild(newPara);
	newLi.appendChild(deleteButton);
	toDoItems.appendChild(newLi);
	inputField.value = '';
	deleteButton.addEventListener('click', function() {
		toDoItems.removeChild(newLi);
	})
})



