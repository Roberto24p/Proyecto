let bttRegistrar = document.getElementById("bttRegistrar");
let nombreVariable = document.getElementById('nombreVariable');
let cintaUsuario = document.getElementById('nombreUsuario');

bttRegistrar.addEventListener('click', function(){
    let inputApellido = document.getElementById('inputApellido');
    let inputCorreo = document.getElementById('inputCorreo');
    let inputContraseni = document.getElementById('inputContrase');
    let input =  document.getElementById("inputNombre");
    if(inputApellido.value != "" && input.value != ""&&inputCorreo.value != "" && inputContraseni.value != ""){
        cintaUsuario.style.display = "inline-block";
        nombreVariable.innerHTML = "<h5>Registrado: "+input.value +"</h5>"
        inputApellido.value = "";
        input.value = "";
        inputCorreo.value = "";
        inputContraseni.value = "";
    }
    
})