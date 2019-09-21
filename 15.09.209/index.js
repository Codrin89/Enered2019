// element.addEventListener('click', function(){

// });
document.getElementById('btn-add').addEventListener('click', function(){
	const form = document.getElementsByClassName('add-form')[0];
	form.classList.remove('displayNone');
});

document.getElementById('btn-save-add').addEventListener('click', function(){
	const saveData = {
		'name': document.getElementById('name-add').value,
		'hour': document.getElementById('hour-add').value,
		'day': document.getElementById('day-add').value,
		'todo': document.getElementById('todo-add').value
	};
	let array = JSON.parse(window.localStorage.getItem('todo-data')) || [];
	array.push(saveData);
	window.localStorage.setItem('todo-data', JSON.stringify(array));
	window.location.reload();
});

function initPage() {
	const getData = JSON.parse(window.localStorage.getItem('todo-data')) || [];
	const container = document.getElementsByClassName('list')['0'];
	for (let i = 0; i < getData.length; i++){
		container.innerHTML += '<div class="row"><div class="column">'+ getData[i].name +'</div><div class="column">'+ getData[i].hour +'</div><div class="column">'+ getData[i].day +'</div><div class="column">'+ getData[i].todo +'</div><div class="column"><button class="btn-update" data-id="'+ i +'">Update</button><button class="btn-delete" data-id="'+ i +'">Delete</button></div></div>';
	}
}

function addEventListenerRows() {
	const updateButtons = document.getElementsByClassName('btn-update');
	const deleteButtons = document.getElementsByClassName('btn-delete');
	for ( let i=0; i < deleteButtons.length; i++) {
		deleteButtons[i].addEventListener('click', function(event){
			var confirmation = confirm('Are you sure?');
			if ( confirmation == true) {
				//console.log('Clicked on the row with id:' + i);
				const index = event.target.getAttribute('data-id');
				const data = JSON.parse(window.localStorage.getItem('todo-data'));
				data.splice(index, 1);
				window.localStorage.setItem('todo-data', JSON.stringify(data));
				window.location.reload();
				console.log(data);
			}
		});
	}
	for ( let i=0; i < updateButtons.length; i++) {
		updateButtons[i].addEventListener('click', function(event){
			//console.log('Clicked on the row with id:' + i);
			console.log(event.target);
		});
	}
}
initPage();
addEventListenerRows();