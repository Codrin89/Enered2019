//element.addEventListener('click', function(){
//
//})
document.getElementById('btn-add').addEventListener('click', function(){
	// alert();
	const form = document.getElementsByClassName('add-form')[0];
	form.classList.remove('displayNone');
});

document.getElementById('btn-save-add').addEventListener('click',function(){
	const saveData = {
		'name': document.getElementById('name-add').value,
		'hour': document.getElementById('hour-add').value,
		'day': document.getElementById('day-add').value,
		'todo': document.getElementById('todo-add').value
	};
	let array = JSON.parse(window.localStorage.getItem('todo-data')) || [];
	array.push(saveData);

	//what push does:
	//let array = [0,7,8,12]
	//array.push(20) --> array = [0,7,8,20]

	window.localStorage.setItem('todo-data', JSON.stringify(array));
	// console.log(saveData);
	window.location.reload();//refresh
});	
function initPage(){
	const getData = JSON.parse(window.localStorage.getItem('todo-data')) || [];
	const container = document.getElementsByClassName('list')[0];
	for( let i = 0; i < getData.length; i++ )
	{
		container.innerHTML += '<div class = "row"> <div class="column">' + 
		getData[i].name +'</div><div class="column">' +getData[i].hour + 
		'</div><div class="column">' +getData[i].day + '</div><div class="column">' +getData[i].todo + 
		'</div><button class="button btn-update" data-id="'
		+i+'">Update</button><button class="button btn-delete" data-id="'
		+i+'">Delete</button></div>' 
		;
	}

}
function addEventListenerRows(){
	const deleteButtons = document.getElementsByClassName('btn-delete');
	const updateButtons = document.getElementsByClassName('btn-update');
	for (var i = 0; i < deleteButtons.length; i++) {
		deleteButtons[i].addEventListener('click', function(event){
			const allInfo = JSON.parse(window.localStorage.getItem('todo-data'));//get all data from localStorage
			allInfo.splice(event.target.getAttribute('data-id'),1);//delete 1 the element from index to end
			window.localStorage.setItem('todo-data', JSON.stringify(allInfo));
			window.location.reload();
		});
		updateButtons[i].addEventListener('click', function(event){
			const index = event.target.getAttribute('data-id');
			window.localStorage.setItem('item-update',index);
			const form = document.getElementsByClassName('update-form')[0];
				 form.classList.remove('displayNone');
				 //index -> data row
				 const data = JSON.parse(window.localStorage.getItem('todo-data'));
				 document.getElementById('name-update').value = data[index].name;
				 document.getElementById('hour-update').value = data[index].hour;
				 document.getElementById('day-update').value = data[index].day;	
				 document.getElementById('todo-update').value = data[index].todo;	
				});
	}
}
document.getElementById('btn-save-update').addEventListener('click', function(event){
		 const data = JSON.parse(window.localStorage.getItem('todo-data'));
		 const index = window.localStorage.getItem('item-update');
		 data[index] = {
		 	'name': document.getElementById('name-update').value,
			'hour': document.getElementById('hour-update').value,
			'day': document.getElementById('day-update').value,
			'todo': document.getElementById('todo-update').value
		 };
		 window.localStorage.setItem('todo-data', JSON.stringify(data));
		 window.location.reload();
});
initPage();
addEventListenerRows();
//LOCALSTORAGE ------>JSON parse------>JAVASCRIPT  bring data from localstorage
//LOCALSTORAGE<-------JSON stringify<------JAVASCRIPT send data to localstorage
document.getElementById('btn-sort-day').addEventListener('click', function(event){
	 const data = JSON.parse(window.localStorage.getItem('todo-data'));
	 data.sort(function(a,b){
	 	if(a.day > b.day){
	 		return 1;
	 	}
	 	else {
	 		return -1;
	 	}
	});
	 window.localStorage.setItem('todo-data', JSON.stringify(data));
	 window.location.reload();
});
document.getElementById('btn-sort-hour').addEventListener('click', function(event){
	 const data = JSON.parse(window.localStorage.getItem('todo-data'));
	 data.sort(function(a,b){
	 	if(a.hour > b.hour){
	 		return 1;
	 	}
	 	else {
	 		return -1;
	 	}
	});
	 window.localStorage.setItem('todo-data', JSON.stringify(data));
	 window.location.reload();
});
//element.addEventListener('...', callback);
//function callback(event){
//	...
//}