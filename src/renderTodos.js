import {toDos, section, dateField, descField, titleField, priorityField, projects} from "./globals.js";
import {edit, editFields} from "./editTodo.js";
import {expand} from "./expand.js";
import {editTodoFields} from "./editFields.js";
import {deleteTodo} from "./deleteTodo.js";
import {changePriorty} from "./changePriorty.js";
import {moveProject, prepDropdown, dropDown} from "./dropDown.js";
let add = document.querySelector("section .add-todo");

let toDosArrh3 = [];
let toDosArrp = [];
let toDosSp = [];
let div = [];
let buttons = [];
let expandClass = [];
let deleteButtons = [];
let priorityButtons = [];
let buttonsDiv = [];
let dropDowndots = [];
let spans = [];
let invisibleDivs = [];

function renderTodos(){
	for(let i = 0; toDos.length > i; i++){
		div[i] = document.createElement("div");
		div[i].classList.add("todo");
		section.append(div[i]);

		toDosArrh3[i] = document.createElement("h3");
		toDosArrp[i] = document.createElement("p");
		toDosSp[i] = document.createElement("span");
		buttons[i] = document.createElement("button");
		expandClass[i] = document.createElement("div");
		deleteButtons[i] = document.createElement("button");
		priorityButtons[i] = document.createElement("button");
		buttonsDiv[i] = document.createElement("div");
		dropDowndots[i] = document.createElement("div");

		expandClass[i].classList.add("expand");
		expandClass[i].classList.add("values");
		dropDowndots[i].classList.add("dropDowndots");


		div[i].append(dropDowndots[i]);

		toDosArrh3[i].append(toDos[i].title);
		toDosArrp[i].append(toDos[i].description);
		toDosSp[i].append(toDos[i].date);
		buttons[i].append("Edit");
		deleteButtons[i].append("Delete");
		priorityButtons[i].append(toDos[i].priorty);

		buttons[i].classList.add("edit-button");
		deleteButtons[i].classList.add("delete-button");
		buttonsDiv[i].classList.add("todo-buttons-wrapper");

		buttons[i].setAttribute("button-src", i);

		div[i].append(expandClass[i]);
		expandClass[i].append(toDosArrh3[i]);
		expandClass[i].append(toDosArrp[i]);
		expandClass[i].append(toDosSp[i]);
		buttonsDiv[i].append(buttons[i]);
		buttonsDiv[i].append(deleteButtons[i]);
		buttonsDiv[i].append(priorityButtons[i]);
		expandClass[i].append(buttonsDiv[i]);
		expandClass[i].setAttribute("data-src", i);
		
		
		

		assignPriority(i);

	//	for(let r = 0; fields.length > r; r++){
		//	fields[r].addEventListener("dblclick", function(){edit(this, fields[r].nodeName.toLowerCase());})
	//	}
	
		prepDropdown(i);	
	
		toDosArrh3[i].classList.add("title");
		toDosArrp[i].classList.add("desc");
		toDosArrh3[i].addEventListener("click", function(){ expand(this); });
		buttons[i].addEventListener("click", function(){ editTodoFields(this); });
		deleteButtons[i].addEventListener("click", function(){ deleteTodo(this); });
		priorityButtons[i].addEventListener("click", function(){ changePriorty(this); });
		dropDowndots[i].addEventListener("click", function(){ dropDown(this); });
	}
}

function addToDos(){
	alert("Add Todos");
	var moment = require('moment');

	let title = titleField.value;
	let desc = descField.value;
	let date = dateField.value;
	let priority = priorityField.value.toLowerCase();

	console.log(date);
	let result = moment(date).fromNow();

	let div = document.createElement("div");
	let values = document.createElement("div");
	let buttonsDiv = document.createElement("div");
	let priorityButton = document.createElement("button");
	let button = document.createElement("button");
	let deleteButton = document.createElement("button");
	let span = document.createElement("span");

	let h3 = document.createElement("h3");
	h3.classList.add("title");
	let par = document.createElement("p");
	par.classList.add("desc");


	button.classList.add("edit-button");
	deleteButton.classList.add("delete-button");
	div.classList.add("todo");
	values.classList.add("values");
	values.classList.add("expand");
	buttonsDiv.classList.add("todo-buttons-wrapper");
	
	alert(priority);
	if(priority === "low"){
		priorityButton.classList.add("priorty-"+priority);
	}else if(priority === "medium"){
		priorityButton.classList.add("priorty-"+priority);
	}else if(priority === "high"){
		priorityButton.classList.add("priorty-"+priority);
	}

	h3.append(title);
	par.append(desc);
	span.append(result);
	button.append("Edit");
	deleteButton.append("Delete");
	priorityButton.append(priority);

	values.append(h3);
	values.append(par);
	values.append(span);
	buttonsDiv.append(button);
	buttonsDiv.append(deleteButton);
	buttonsDiv.append(priorityButton);
	values.append(buttonsDiv);
	div.append(values);
	section.append(div);


	button.addEventListener("click", function(){ editTodoFields(this); });
	deleteButton.addEventListener("click", function(){ deleteTodo(this); });
	h3.addEventListener("click", function(){expand(this)});
	priorityButton.addEventListener("click", function(){ changePriorty(this); });
}
function assignPriority(i){
	if(toDos[i].priorty === "low"){
		priorityButtons[i].classList.add("priorty-"+toDos[i].priorty);
	}else if(toDos[i].priorty === "medium"){
		priorityButtons[i].classList.add("priorty-"+toDos[i].priorty);
	}else if(toDos[i].priorty === "high"){
		priorityButtons[i].classList.add("priorty-"+toDos[i].priorty);
	}
}



export {renderTodos, addToDos, add, buttons, spans, invisibleDivs, dropDowndots};