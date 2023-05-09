function showfield(name){
	if(name == 'Other') {
		document.getElementById('otherdiv').innerHTML = 'Precisez: <input type="text" class="other" required name="other" />';
	}
	else {
		document.getElementById('otherdiv').innerHTML='';
	}	
}