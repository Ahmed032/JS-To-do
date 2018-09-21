import {clickedList} from "./projectClicked.js";
import {projects, newLi, ul} from "./globals.js";

let field = document.querySelector("aside .new-project")
let newList;

function newProject(){
	newList = document.createElement("li");
	let content = field.value;
	console.log(content);
	newList.append(content);
	ul.append(newList);
	console.log(newList);
	newLi.push(newList);
	console.log(projects);
	console.log(newLi);
	newList.addEventListener("click", function(){clickedList(this)} , false)
}
function click(){
}
export {newProject, click};