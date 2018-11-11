onload  = startSlide;

function startSlide(){

var i = 1;

function switchImage(){
	i = (i % 4) + 1;
	document.getElementById('image-button-' + i).checked = true;
}

setInterval(switchImage, 5000);

}
