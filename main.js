
var task_storage = [];

const stored = localStorage.getItem('tasks');
if (stored){
	task_storage = JSON.parse(stored);
	display_saved();
}

class Task {
	constructor(task, finished) {
		this.task = task;
		this.finished = finished;
	}
}

document.addEventListener('click', function (event) {
	let element = event.target;
	if (element.attributes.name.value == "finish") {
		finish(element);
	}
	else if (element.attributes.name.value == "remove"){
		remove(element);
	}
	else if (element.attributes.name.value == "add") {
		add();
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
	const text = new_input.value;
	if (text == ''){
		return;
	}
	const task = new Task(text, false);

	task_storage.push(task);
	new_input.value = '';
	localStorage.setItem('tasks', JSON.stringify(task_storage));

	create(task);
}

function create(t) {
	const finished = t.finished ? 'fa-check-circle check' : 'fa-circle-thin choose';
	const text = t.task;
	const insert = 
		`<li class = "list-group-item">
			<div class = "row">
				<div class = "col-2">
					<i class = "fa ${finished}" name="finish"></i>
				</div>
				<div class = "col-8">
					<p class = "text"> ${text} </p>
				</div>
				<div class = "col-2">
					<i class = "fa fa-trash trash" name = "remove"></i>
				</div>
			</div>
		</li>`;

	const task_list_div = document.querySelector('.list-group');
	task_list_div.insertAdjacentHTML('beforeend', insert);

	const card_body_div = document.querySelector('.card-body');
	card_body_div.scrollTop = card_body_div.scrollHeight;
}

function display_saved(){
	task_storage.forEach( function(task){
		create(task);
	});
}


function finish(e){
	e.classList.toggle("fa-circle-thin");
	e.classList.toggle("choose");
	e.classList.toggle("fa-check-circle");
	e.classList.toggle("check");

	pos = position(e);
	task_storage[pos].finished = (e.classList.contains('check')) ? true : false;
	localStorage.setItem('tasks', JSON.stringify(task_storage));
}

function remove(e) {
	pos = position(e);
	task_storage.splice(pos, 1);
	localStorage.setItem('tasks', JSON.stringify(task_storage));

	element_to_remove = e.parentNode.parentNode.parentNode;
	element_to_remove.parentNode.removeChild(element_to_remove);

}

function position(e){
	let children = e.parentNode.parentNode.parentNode.parentNode.children;
	let i = 0;
	for (i = 0; i < children.length; i++){
		if (e.parentNode.parentNode.parentNode == children[i]){
			break;
		}
	}
	return (i);
}



