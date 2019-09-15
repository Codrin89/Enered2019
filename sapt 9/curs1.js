//element.addEventListner(function(){
//
//})
document.getElementById('btn-add').addEventListener('click', function(){
	const form = document.getElementsByClassName('add-form')[0];
	form.classList.remove('displayNone');

});

document.getElementById('btn-save-add').addEventListener('click', function(){
	const saveData = {
		'name':document.getElementById('name-add').value,
		'hour':document.getElementById('hour-add').value,
		'day':document.getElementById('day-add').value,
		'todo':document.getElementById('todo-add').value
	};
	let array = JSON.parse(window.localStorage.getItem('todo-add')) || [];
	array.push(saveData);
	window.localStorage.setItem('todo-add', JSON.stringify(array));
	console.log(saveData);
});

function initPage() {
	const getData = JSON.parse(window.localStorage.getItem('todo-add')) || [];
	const container = document.getElementsByClassName('list')[0];
	for(let i = 0; i< getData.length; i++)
	{
		container.innerHTML += '<div class="row"> <div class="colomn">' +getData[i].name+'</div><div class="colomn">'+getData[i].hour+'</div><div class="colomn">'
		+getData[i].day+'</div><div class="colomn">'+getData[i].todo+ '</div><button class="btn-update" data-id="'+i+'">Update</button><button class="btn-delete" data-id="'+i+'">Delete</button></div>';
	}
}

function addEventListenerRows() {
	const deleteButtons = document.getElementsByClassName('btn-delete');
	for (let i = 0; i < deleteButtons.length; i++) {
		deleteButtons[i].addEventListener('click', function(event)
		{
			const index = event.target.getAttribute('data-id');
			const data = JSON.parse(window.localStorage.getItem('todo-add'));
			data.splice(index,1);
			window.localStorage.setItem('todo-add',JSON.stringify(data));
			window.location.reload();
		})
	}
}


initPage();
addEventListenerRows();