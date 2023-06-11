var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('newBack')




function chameleon() {
	body.style.background = "linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")"
	// the next line of code calls the specs of the color on the screen 
	css.textContent = body.style.background + ";";
}



color1.addEventListener("input", chameleon);
color2.addEventListener("input", chameleon);