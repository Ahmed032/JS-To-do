let i = 0;
function changePriorty(current) {
	let equals = false;
	let priorties = ["low", "medium", "high"];
	console.log("Outside Current html: "+current.innerHTML);
	while(equals === false){
		if(current.innerHTML === priorties[i]){
			if(i === priorties.length-1){
				i = -1;
				alert(i);
			}
			if(i === -1){
				current.classList.remove("priorty-"+priorties[2]);
				current.classList.add("priorty-"+priorties[0]);
			}else{
				current.classList.remove("priorty-"+priorties[i]);
				current.classList.add("priorty-"+priorties[i+1]);
			}
			current.innerHTML = priorties[i+1];
			equals = true;
		}else{
			i++;
		}
	}
	
}
export {changePriorty}