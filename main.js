let inputField = document.getElementById('inputField');
let addButton = document.getElementById('add-to-do');
let toDoItems = document.getElementById('toDoItems');
let toDoInMonthHeader = [
	document.getElementById('toDoInMonthHeaderJul'),
	document.getElementById('toDoInMonthHeaderAug'),
	document.getElementById('toDoInMonthHeaderSept'),
	document.getElementById('toDoInMonthHeaderOct'),
	document.getElementById('toDoInMonthHeaderNov'),
	document.getElementById('toDoInMonthHeaderDec'),
	document.getElementById('toDoInMonthHeaderJan'),
	document.getElementById('toDoInMonthHeaderFeb'),
	document.getElementById('toDoInMonthHeaderMar'),
	document.getElementById('toDoInMonthHeaderApr'),
	document.getElementById('toDoInMonthHeaderMay')];
let toDoInMonthHeaderStyling = document.getElementsByClassName('to-do-in-month-header');

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
	addMonthHeader();
})

const addMonthHeader = () => {
	if(toDoInMonthHeader[0]) {
		console.log('july');
		toDoInMonthHeaderStyling.style.display = 'block';
	}
	if(toDoInMonthHeader[1]) {}
	if(toDoInMonthHeader[2]) {}
	if(toDoInMonthHeader[3]) {}
	if(toDoInMonthHeader[4]) {}
	if(toDoInMonthHeader[5]) {}
	if(toDoInMonthHeader[6]) {}
	if(toDoInMonthHeader[7]) {}
	if(toDoInMonthHeader[8]) {}
	if(toDoInMonthHeader[9]) {}
	if(toDoInMonthHeader[10]) {}
}