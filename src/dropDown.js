import {projects} from "./globals.js";
import{ spans, invisibleDivs, dropDowndots} from "./renderTodos.js";
function dropDown(current){
	console.log(current);
	let invisibleDiv = current.querySelector(".dropDown-content");
	console.log(invisibleDiv);
	if(!current.classList.contains("active-downdots")){
       invisibleDiv.classList.remove("dropdown-invisible");
       invisibleDiv.classList.add("dropdown-visible");
       current.classList.add("active-downdots");
    }else{
    	invisibleDiv.classList.add("dropdown-invisible");
    	invisibleDiv.classList.remove("dropdown-visible");
        current.classList.remove("active-downdots");
    }
}
function prepDropdown(counter){
		invisibleDivs[counter] = document.createElement("div");
	    for(let p = 0; projects.length > p; p++){
    	   spans[p] = document.createElement("span");
    	   spans[p].append(projects[p].name);
    	   invisibleDivs[counter].append(spans[p]);
    	   invisibleDivs[counter].classList.add("dropdown-invisible", "dropDown-content");
    	   dropDowndots[counter].append(invisibleDivs[counter]);
    	   spans[p].addEventListener("click", function(){moveProject(this);}, false);
		 }
}

function moveProject(current){
    let name = current.innerHTML;
    let theDiv = current.parentNode.parentNode.parentNode;
    console.log(name);
    console.error(theDiv);
    window[name].push(theDiv);
}

export {moveProject, prepDropdown, dropDown};