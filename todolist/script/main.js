const btn = document.getElementById('button');
const input = document.getElementById('input');
const content = document.getElementById('content');

btn.addEventListener('click', () => {
	if( input.value !== "" ){
		if( btn.textContent === "Submit" ){
			createnewTask();
			toDelete();
			toEdit();
		}	
	}
});

function createnewTask() { 
	const newTask = document.createElement('div');
	const paraG = document.createElement('p');
	const icons = document.createElement('div');
	const iconEdit = document.createElement('i');
	const iconDel = document.createElement('i');
	paraG.textContent = input.value;

	newTask.classList.add('newtask', 'px-4', 'py-1', 'mt-8', 'hover:bg-blue-100', 'rounded-md');
	paraG.classList.add('text-base', 'tracking-widest', 'text-gray-800');
	iconEdit.classList.add('far', 'fa-edit', 'text-green-400', 'hover:text-green-600', 'cursor-pointer');
	iconDel.classList.add('far', 'fa-trash-alt', 'ml-2', 'text-red-400', 'hover:text-red-600', 'cursor-pointer');

	icons.appendChild(iconEdit);
	icons.appendChild(iconDel);
	newTask.appendChild(paraG);
	newTask.appendChild(icons);

	newTask.classList.add('flex', 'justify-between');
	content.appendChild(newTask);
	input.value = "";
}

function toDelete(){
	const deleteButtons = document.querySelectorAll('.fa-trash-alt');
	deleteButtons.forEach( (e) => {
		e.addEventListener('click', () => {
			e.parentNode.parentNode.remove();
		});
	});
}
/*
function toEdit(){
	const editButtons = document.querySelectorAll('.fa-edit');
	editButtons.forEach( (e) => {
		e.addEventListener('click', () => {
			input.value = e.parentNode.previousElementSibling.textContent;
			btn.textContent = "Edit";
			btn.addEventListener('click', () => {
				if ( btn.textContent === "Edit" ) {
					e.parentNode.previousElementSibling.textContent = input.value;
					btn.textContent = "Submit";
				}
			});
		});
	});
}*/