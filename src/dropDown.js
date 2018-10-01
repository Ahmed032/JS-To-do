let invisibleDiv;
import {projects, personalProjects, projectNames} from "./globals.js";
function dropDown(current){
    console.log(current);
    if(!current.classList.contains("active-downdots")){
        invisibleDiv.classList.remove("dropdown-visible")
        invisibleDiv.classList.add("dropdown-invisible")
        current.classList.add("active-downdots");
        invisibleDiv.remove();
    }else{
        invisibleDiv = document.createElement("div");
        let span = document.createElement("span");
        span.append("Move to project");
        invisibleDiv.classList.add("dropdown-visible");
        invisibleDiv.append(span);
        current.append(invisibleDiv);
        current.classList.remove("active-downdots");
        prepDropdown(current);
    }
}
let spans = [];
function prepDropdown(current){
    for(let i = 0; projects.length > i; i++){
        spans[i] = document.createElement("span");
        spans[i].append(projects[i].name);
        invisibleDiv.append(spans[i]);
        spans[i].addEventListener("click", function(){moveProject(this);}, false);
    }
}
function moveProject(current){
    let name = current.innerHTML;
    let theDiv = current.parentNode.parentNode.parentNode;
    console.log(name);
    console.error(theDiv);
    window[name].push(theDiv);
}

export {dropDown};