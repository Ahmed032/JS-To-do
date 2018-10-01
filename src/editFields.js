import {buttons} from "./renderTodos.js";
import {toDos, descField, titleField} from "./globals.js";

let fields = [];
let values =[];
let fieldDiv = [];
let title;
let desc;
function editTodoFields(current){
	let index = current.getAttribute("button-src");
	console.log(current.parentNode);
	let titleDOM = current.parentNode.parentNode.querySelector(".title");
	let descDOM = current.parentNode.parentNode.querySelector(".desc");
	let div = current.parentNode;
	let elements = current.parentNode.parentNode.querySelectorAll("*:not(button)");
	console.error(typeof(toDos[index]));
	if(typeof(toDos[index]) === "undefined"){
		title = titleField.value;
		desc = descField.value;
		alert("undefined hehe");
	}else{
		title = toDos[index].title;
		desc = toDos[index].description;
	}

	console.log(title);

	fieldDiv = document.createElement("div");
	fieldDiv.classList.add("fields");

	values = [title, desc];
	if(fields.length < 2){
		for(let i = 0; fields.length < 2; i++){
			fields[i] = document.createElement("input");
			fields[i].setAttribute('type', 'text');
			fields[i].setAttribute('value', values[i]);
			fieldDiv.append(fields[i]);
			div.before(fieldDiv);
			console.log("New fields are suppsed to have been created")
		}
		for(let i = 0; elements.length > i; i++){
			elements[i].classList.add("fields-hidden");
		}
	}else{
		let div2 = current.parentNode.parentNode.parentNode.querySelector(".fields");
		console.error(fields);
		let titleEditedValue = fields[0].value;
		let editedDescValue = fields[1].value;
		if(typeof(toDos[index]) !== "undefined"){
		toDos[index].title = titleEditedValue;
		}
		titleDOM.innerHTML = titleEditedValue;
		descDOM.innerHTML = editedDescValue;
		fields = [];
		console.log(div2);
		div2.remove();
		for(let i = 0; elements.length > i; i++){
			elements[i].classList.remove("fields-hidden");
		}
	}
	console.error(elements);
}
export {editTodoFields};