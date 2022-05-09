var nombre = document.getElementById('nombre');
var password = document.getElementById('password');
var error = document.getElementById('error');
error.style.color = 'red';

function enviarFormulario(){
    console.log('Enviando formulario...');

    var mensajesError = [];

    if(nombre.value === null || nombre.value === ''){
         mensajesError.push('Ingresa tu Nombre');
    }

    if(nombre.value === null || nombre.value === ''){
         mensajesError.push('Ingresa tu Nombre');
    }

    error.innerHTML = mensajesError.join(', ');

    return false;
}

var form = document