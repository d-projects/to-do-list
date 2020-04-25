

document.addEventListener('click', function (event) {
	let element = event.target;
	console.log(element);
	if (element.attributes.name.value == "finish") {
		finish(element);
	}
	else if (element.attributes.name.value == "remove"){
		remove(element);
	}
	else if (element.attributes.name.value == "add") {
		add(element);
	}
});

const input = document.querySelector('.new-todo');
input.addEventListener('keyup', function(event) {
	let element = event.target;
	if (event.keyCode === 13){
		event.preventDefault;
		add();
	}
});

function add(){
	const new_input = document.querySelector('.new-todo');
	const todo = new_input.value;
	const insert = 
			`<li class = "list-group-item">
				<div class = "row">
					<div class = "col-2">
						<i class = "fa fa-circle-thin choose" name="finish"></i>
					</div>
					<div class = "col-8">
						<p class = "text"> ${todo} </p>
					</div>
					<div class = "col-2">
						<i class = "fa fa-trash trash" name = "remove"></i>
					</div>
				</div>
			</li>`
	document.querySelector('.list-group').insertAdjacentHTML('afterbegin', insert);
	new_input.value = '';
}


function finish(e){
	e.classList.toggle("fa-circle-thin");
	e.classList.toggle("choose");
	e.classList.toggle("fa-check-circle");
	e.classList.toggle("check");
}

function remove(e) {
	element_to_remove = e.parentNode.parentNode.parentNode;
	element_to_remove.parentNode.removeChild(element_to_remove);
}



