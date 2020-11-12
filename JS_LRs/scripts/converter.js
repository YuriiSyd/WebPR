function convert(){
	let quart = document.getElementById('quarts').value;
	let litres = quart * 291; 
	let x = document.getElementById('liters');	
	x.innerHTML = "Liters: " + litres;
}