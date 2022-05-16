"use strict"

function guardarInfo(){
    let numeroDocumento = document.getElementById("numeroDocumento").value;
    if (numeroDocumento == "")  {
        alert("Por favor, Ingresar el numero de Documento");
        return false;
    }
    if (document.getElementById("passwordUsuario").value == "") {
        alert("Por favor, Ingresar la contraseña de Usuario");
        return false;
    }
    alert("Informacion guardada con Exito");
    limpiarFormulario();
    return true;
}
function limpiarFormulario() {
    document.getElementById("numeroDocumento").value = "";
    document.getElementById("passwordUsuario").value = "";
    
}
