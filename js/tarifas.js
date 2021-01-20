let quienesSomos = document.getElementById("quienesSomos");
let terminosUso = document.getElementById("terminosUso");
let hover1 = document.getElementById('hover1');
let hover2= document.getElementById('hover2');


console.log("holamudno");
hover2.addEventListener('click', function(){
    quienesSomos.style.display = "none";
    terminosUso.style.display = "block";
    terminosUso.style.backgroundColor = "#d2eff0";
    hover2.classList.add("eventoClick") ;
    hover1.classList.remove("eventoClick") ;


})

hover1.addEventListener('click', function(){
    terminosUso.style.display = "none";
    quienesSomos.style.display = "block";
    hover1.classList.add("eventoClick") ;
    hover2.classList.remove("eventoClick") ;

})


