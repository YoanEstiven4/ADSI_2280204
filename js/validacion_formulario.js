"use strict"

function guardarInfo(){
    let numeroDocumento = document.getElementById("numeroDocumento").value;
    if (numeroDocumento == "")  {
        alert("Por favor, Ingresar el numero de Documento");
        return false;
    }
    if (document.getElementById("nombreUsuario").value == "") {
        alert("Por favor, Ingresar el nombre de Usuario");
        return false;
    }
    if (document.getElementById("apellidoUsuario").value == "") {
        alert("Por favor, Ingresar el apellido de Usuario");
        return false;
    }
    if (document.getElementById("fechaUsuario").value == "") {
        alert("Por favor, Ingresar la fecha de Usuario");
        return false;
    }
    if (document.getElementById("municipioUsuario").value == "") {
        alert("Por favor, Ingresar el municipio de Residencia");
        return false;
    }
    alert("Informacion guardada con Exito");
    limpiarFormulario();
    return true;
}
function limpiarFormulario() {
    document.getElementById("numeroDocumento").value = "";
    document.getElementById("nombreUsuario").value = "";
    document.getElementById("apellidoUsuario").value = "";
    document.getElementById("fechaUsuario").value = "";
    document.getElementById("municipioUsuario").value = "";
    
}
