import {projects, toDos, lists} from "./globals.js";
import {clickedList} from "./projectClicked.js";
import {newLi} from "./globals.js";
function Project(name){
	this.name = name;
}
function prepToDo(title,description, dueDate){
	this.title = title;
	this.description = description;
	this.dueDate = dueDate;
}
function prepLists(){
	for(let i = 0; newLi.length > i; i++){
		newLi[i].addEventListener("click", function(){ clickedList(this);}, false)
	}
}
function newToDo(){
	let todo = new prepToDo("Feed fish", "Give fist food", "Tomorrow");
	let todo2 = new prepToDo("Push ups", "Do 20 push-ups", "Tomorrow");
	let todo3 = new prepToDo("Watch that movie", "Watch a movie", "Tomorrow");
	let todo4 = new prepToDo("Go for a walk", "You need to go for a walk", "Tomorrow");
	toDos.push(todo, todo2, todo3, todo4);
}
(function newProject(){
	let project = new Project("Personal");
	let project2 = new Project("Work");
	projects.push(project, project2);
	console.log(projects);
})();
export default newToDo;
export {prepLists};