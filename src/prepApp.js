import {projects, toDos, lists} from "./globals.js";
import {clickedList} from "./projectClicked.js";
import {newLi} from "./globals.js";
let projectLis = document.querySelectorAll("aside ul li");
function Project(name){
	this.name = name;
}
function prepToDo(title,description, priorty,dueDate){
	this.title = title;
	this.description = description;
	this.priorty = priorty;
	this.dueDate = dueDate;
}
function prepLists(){
	for(let i = 0; newLi.length > i; i++){
		newLi[i].addEventListener("click", function(){ clickedList(this);}, false)
	}
}
function newToDo(){
	let todo = new prepToDo("Feed fish", "Give fist food", "high","Tomorrow");
	let todo2 = new prepToDo("Push ups", "Do 20 push-ups", "high", "Tomorrow");
	let todo3 = new prepToDo("Watch that movie", "Watch a movie", "medium", "Tomorrow");
	let todo4 = new prepToDo("Go for a walk", "You need to go for a walk", "low", "Tomorrow");
	toDos.push(todo, todo2, todo3, todo4);
}
(function newProject(){
	let project = new Project("personal");
	let project2 = new Project("work");
	projects.push(project, project2);
	window[project.name] = [];
	window[project2.name] = [];
	console.log(projects);
})();
export default newToDo;
export {prepLists};