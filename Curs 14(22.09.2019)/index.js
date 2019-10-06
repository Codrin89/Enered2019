const prof=['FrontEnd', 'Backend', 'DevOps'];
for(i =0; i<prof.length; i++) {
	const container = document.getElementById('profession');
	container.innerHTML += '<option>' + prof[i]+ '</option>';
}