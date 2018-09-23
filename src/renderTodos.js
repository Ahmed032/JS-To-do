import {toDos, section, dateField, titleDesc, titleField} from "./globals.js";
import {edit, editFields} from "./editTodo.js";
let add = document.querySelector("section .add-todo");

let toDosArrh3 = [];
let toDosArrp = [];
let toDosSp = [];
let div = [];
let buttons = [];
let fields;

function renderTodos(){
	for(let i = 0; toDos.length > i; i++){
		div[i] = document.createElement("div");
		div[i].classList.add("todo");
		section.append(div[i]);

		toDosArrh3[i] = document.createElement("h3")
		toDosArrp[i] = document.createElement("p")
		toDosSp[i] = document.createElement("span");
		buttons[i] = document.createElement("button");

		toDosArrh3[i].append(toDos[i].title);
		toDosArrp[i].append(toDos[i].description)
		toDosSp[i].append(toDos[i].date);
		buttons[i].append("Edit");
		buttons[i].classList.add("edit-button");

		buttons[i].setAttribute("button-src", i);

		div[i].append(toDosArrh3[i]);
		div[i].append(toDosArrp[i]);
		div[i].append(toDosSp[i]);
		div[i].append(buttons[i]);
		div[i].setAttribute("data-src", i);
		
		console.log(buttons[i]);
		fields = [toDosArrh3[i], toDosArrp[i], toDosSp[i]];
		for(let r = 0; fields.length > r; r++){
			fields[r].addEventListener("dblclick", function(){edit(this, fields[r].nodeName.toLowerCase());})
		}
	}
}

function addToDos(){
	alert("Add Todos");
	var moment = require('moment');

	let title = titleField.value;
	let desc = titleDesc.value;
	let date = dateField.value;

	console.log(date);
	let result = moment(date).fromNow();

	let div = document.createElement("div");
	let h3 = document.createElement("h3");
	let par = document.createElement("p");
	let par2 = document.createElement("p");
	let span = document.createElement("span");
	let button = document.createElement("button");


	button.classList.add("edit-button");
	div.classList.add("todo");
	h3.append(title);
	par.append(desc);
	span.append(result);
	button.append("Edit");

	div.append(h3);
	div.append(par);
	div.append(span);
	div.append(button);

	section.append(div);


}


export {renderTodos, addToDos, add, buttons};