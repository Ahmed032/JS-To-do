import {toDos, dateField, titleDesc, titleField} from "./globals.js";
import {buttons} from "./renderTodos.js";
let div_todo = document.querySelector(".todo");
let newClass1;
let newClass2;
let newClass3;
let button;
function edit(current, type){
	let index = current.parentNode.getAttribute("data-src");
//	console.log(toDos[index].title);
	let val = current.innerHTML;
	alert(val);
	button = document.createElement("input")
	button.setAttribute('type', 'text');
	button.setAttribute('value', val);
	current.classList.add("fields-hidden");
	current.classList.add(type);
	button.classList.add("fields");
	current.after(button);
	newClass1 = document.querySelector("."+type);

	console.log(index);

	buttons[index].addEventListener("click", function(){editFields(this, current, type);}, false);

}
function editFields(current, clicked, type){
	let editedValues = [];
	editedValues.push(button);
	let index = current.getAttribute("button-src");

	for(let i = 0; editedValues.length > i; i++){
		editedValues[i].classList.add("fields-hidden");
		console.log("Edited value: " + editedValues[i].value);
		if(type === "h3"){
			toDos[index].title = editedValues[i].value;
		}else if(type === "p"){
			toDos[index].description = editedValues[i].value;
		}
		newClass1.innerHTML = editedValues[i].value;
		clicked.classList.remove("fields-hidden");
	}
}
export {edit, editFields};