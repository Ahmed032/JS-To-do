import {list, ul, projects, newLi} from "./globals.js";
import {prepLists} from "./prepApp.js";

function renderProject(){
	console.log(projects[0].name);
	for(let i = 0; projects.length > i; i++){
		newLi[i] = document.createElement("li"); 
		newLi[i].append(projects[i].name);
		ul.append(newLi[i]);
		console.log("NEW LI" + projects[i].name);
	}
	console.error(newLi);
	prepLists();
} 
export {renderProject};