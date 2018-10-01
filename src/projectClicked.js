import {toDos, personalProjects} from "./globals.js";
import {renderTodos} from "./renderTodos.js";
let container = document.querySelector("section");
let allProjects = document.querySelector("#all-projects");

function clickedList(current){
    let name = current.innerHTML;
    console.log(window[name]);
    alert("Clickedlist name is" + name);
    container.innerHTML = "";
    for(let i = 0; window[name].length > i; i++){
        container.append(window[name][i]);
        alert(window[name][i])
    }
    current.classList.add("project-clicked");
}
(function renderAll(){
    alert("banee");
    allProjects.addEventListener("click", function(){renderTodos();}, false);
})();
export {clickedList};