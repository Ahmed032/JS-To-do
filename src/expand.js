function expand(current){
	if(current.parentNode.classList.contains("expand")){
		current.parentNode.classList.remove("expand");
	}else{
		current.parentNode.classList.add("expand");
	}
}
export {expand};