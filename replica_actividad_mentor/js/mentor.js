function intercambiarImagen(ruta) {
    document.getElementById("imgPrincipal").src = ruta;
}
function mostrarMensajeCasillas(ruta) {
    document.getElementById("imgPrincipal").src = ruta;
}

/*Otas funcion grid*/
function intercambiarMian(ruta) {
    document.getElementById("imgMain").src = ruta;
}
function mostrarMensajeMian(ruta) {
    document.getElementById("imgMain").src = ruta;
}


/* funcion: ocultar y abrir ventana*/

let botonChatear=document.getElementById("chatear");
let cuadroDialogo=document.getElementById("cuadroDialogo");
let salirCuadroDialogo=document.getElementById("salirCuadro");
botonChatear.addEventListener("click",()=>{
    botonChatear.classList.remove("chatear");
    botonChatear.classList.add("chatearInvisible");
    cuadroDialogo.classList.remove("cuadroDialogoInvisible");
    cuadroDialogo.classList.add("cuadroDialogoVisible");
})

salirCuadroDialogo.addEventListener("click",()=>{
    cuadroDialogo.classList.remove("cuadroDialogoVisible");
    cuadroDialogo.classList.add("cuadroDialogoInvisible");
    botonChatear.classList.remove("chatearInvisible");
    botonChatear.classList.add("chatear");
})