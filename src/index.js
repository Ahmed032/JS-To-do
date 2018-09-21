import newToDo from "./prepApp.js";
import {newProject} from "./newProject.js";
import {renderProject} from "./renderProjects.js";
import {renderTodos, addToDos, add} from "./renderTodos";
let button = document.querySelector("aside button");
(function(){
	renderProject();
	newToDo();
	renderTodos();

})();
button.addEventListener("click", newProject, false);
add.addEventListener("click", addToDos, false)
