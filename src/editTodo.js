import {toDos, dateField, titleDesc, titleField} from "./globals.js";
let div_todo = document.querySelector(".todo");
//let newValue = button.getAttribute("value");
function edit(current, type){
//	let index = current.getAttribute("button-src");
//	console.log(toDos[index].title);
	let val = current.innerHTML;
	alert(val);
	let button = document.createElement("input")
	button.setAttribute('type', 'text');
	button.setAttribute('value', val);
	current.classList.add("fields-hidden");
	button.classList.add(type);
	let fieldGet = document.querySelector(".todo .h3");

	current.after(button);

	

}
function editFields(){

}
export {edit};