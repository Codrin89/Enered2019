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
		'</div><button class="button btn-update">Update</button><button class="button btn-delete" data-id="'
		+i+'">Delete</button></div>' 
		;
	}

}
function addEventListenerRows(){
	const deleteButtons = document.getElementsByClassName('btn-delete');
	for (var i = 0; i < deleteButtons.length; i++) {
		deleteButtons[i].addEventListener('click', function(event){
			const allInfo = JSON.parse(window.localStorage.getItem('todo-data'));//get all data from localStorage
			allInfo.splice(event.target.getAttribute('data-id'),1);//delete 1 the element from index to end
			window.localStorage.setItem('todo-data', JSON.stringify(allInfo));
			window.location.reload();
		});
	}
}
initPage();
addEventListenerRows()