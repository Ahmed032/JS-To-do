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

	buttons[index].addEventListener("click", function(){editFields(this, current);}, false);
	console.error("Howm any times");

}
function editFields(current, clicked){
	let editedValue = button.value;
	let index = current.getAttribute("button-src");

	button.classList.add("fields-hidden");

	console.log("Edited value: " + editedValue);

	toDos[index].title = editedValue;
	alert("New value" + editedValue);
	newClass1.innerHTML = editedValue;
	clicked.classList.remove("fields-hidden");
}
export {edit, editFields};