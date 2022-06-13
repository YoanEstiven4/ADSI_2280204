function guardarInfo() {
    let numeroDocumento = document.getElementById("numeroDocumento").value;
    if (numeroDocumento == "") {
        alert("Ingresa el numero de documento");
        return false;
    }
    if (document.getElementById("nombre").value == "") {
        alert("Ingrese su Nombre de usuario");
        return false;
    }
    if (document.getElementById("apellido").value == "") {
        alert("Ingrese su Apellido");
        return false;
    }
    if (document.getElementById("direccion").value == "") {
        alert("Ingrese su Direccion");
        return false;
    }
    if (document.getElementById("telefono").value == "") {
        alert("Ingrese su Telefono");
        return false;
    }
    alert("Informacion guardada con exito");
    limpiarformulario();
    return true;
}
function limpiarformulario() {
    document.getElementById("numeroDocumento").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("telefono").value = "";
}