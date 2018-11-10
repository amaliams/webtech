var b = document.getElementById("like-1");
var c = document.getElementById("like-2");
var d = document.getElementById("like-3");
var f = document.getElementById("like-4");
var h = document.getElementById("like-5");

var a = false;

function addLike(counterElement) {
    let num = parseInt(counterElement.innerHTML);
    if (a) {
        counterElement.innerHTML = num + 1;
    } else {
        counterElement.innerHTML = num - 1;
    };
}

function changeLike(e) {
    var x = this;
    var counterElement = document.getElementById(this.id + '-counter');
    if (x.value == "Like") {
        x.style.backgroundColor = 'rgb(255, 60, 60)';
        x.style.color = 'white';
        x.value = "Liked"
        x.style.transition = "0.3s ease"
        a = true;
        addLike(counterElement);
    } else {
        x.style.backgroundColor = "transparent";
        x.style.color = "dimgrey";
        x.value = "Like"
        x.style.transition = "0.3s ease"
        a = false;
        addLike(counterElement);
    }
}

function setLike(counterElem, value){
    counterElem.innerHTML = value;
}

function setLikeByLikeButton(likeButton, value){
    var counterElem = document.getElementById(likeButton.id + '-counter');
    setLike(counterElem,value);
}

b.addEventListener('click', changeLike, false);
c.addEventListener('click', changeLike, false);
d.addEventListener('click', changeLike, false);
f.addEventListener('click', changeLike, false);
h.addEventListener('click', changeLike, false);

setLikeByLikeButton(b, 2451);
setLikeByLikeButton(c, 3114);
setLikeByLikeButton(d, 5184);
setLikeByLikeButton(f, 2743);
setLikeByLikeButton(h, 19034);
