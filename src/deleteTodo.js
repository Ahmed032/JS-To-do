function deleteTodo(current){
	let div = current.parentNode.parentNode.parentNode;
	div.remove();
}
export {deleteTodo};