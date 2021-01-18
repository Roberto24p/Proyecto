let next = adelante, prev = atras;

let img = document.getElementsByClassName("fondo");


let imagenes = [ "css/imagenes/bb.jpg", "css/imagenes/avengers.jpg", "css/imagenes/padrino.jpg"];
img[1].style.backgroundImage ="url('" + imagenes[0] + "')";
img[2].style.backgroundImage ="url('" + imagenes[1] + "')";
img[0].style.backgroundImage ="url('" + imagenes[imagenes.length-1] + "')";
console.log(img)
var atras = imagenes.length - 1;
var adelante = 1;




function setNext_Prev(next, prev) {
    adelante = next;
    atras = prev;
}

window.onload = setInterval(function(){ transicionD()}, 8000);

function transicionI() {
    next = adelante, prev = atras;
  
    img[1].style.animationName = "desplazarse3";
    img[0].style.animationName = "desplazarse4";
    
    setTimeout(callbackIzquierda, 2450)
}

function transicionD() {
    next = adelante, prev = atras;

    img[1].style.animationName = "desplazarse";
    img[2].style.animationName = "desplazarse2";

    setTimeout(callbackDerecha, 2450);
}

function callbackIzquierda() {
    
    img[1].style.backgroundImage = "url('" + imagenes[atras] + "')";

    next--;
    prev--;
    
    setNext_Prev(next, prev);
    if (next == -1) {
        next = imagenes.length - 1;
    }
    if (prev == -1) {
        prev = imagenes.length - 1;
    }
    setNext_Prev(next, prev);
    
    intercambio();
    noneAnimation(0);
    img[0].style.animationName = "none";
    img[1].style.animationName = "none";


}

function callbackDerecha() {
    
    img[1].style.backgroundImage = "url('" + imagenes[adelante] + "')";

    next++;
    prev++;
    
    setNext_Prev(next, prev);

    if (prev == imagenes.length) {
        prev = 0;
    }
    if (next == imagenes.length) {
        next = 0;
    }
    setNext_Prev(next, prev);
    
    intercambio();
    noneAnimation(2);



}

function intercambio() {
    img[2].style.backgroundImage = "url('" + imagenes[next] + "')";
    img[0].style.backgroundImage = "url('" + imagenes[prev] + "')";
}

function noneAnimation(dato) {
    img[1].style.animationName = "none";
    img[dato].style.animationName = "none";
}
