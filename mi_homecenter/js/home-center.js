let navegador=document.getElementById("divNav");

let buscar=document.getElementById("buscar");
let salir=document.getElementById("salir");
let barraBusqueda=document.getElementById("barraBusqueda");
buscar.addEventListener("click",()=>{
    navegador.classList.remove("navVisible");
    navegador.classList.add("navInvisible");
    barraBusqueda.classList.remove("buscadorInvisible");
    barraBusqueda.classList.add("buscadorVisible")
})

salir.addEventListener("click",()=>{
    barraBusqueda.classList.remove("buscadorVisible");
    barraBusqueda.classList.add("buscadorInvisible");
    navegador.classList.remove("navInvisible");
    navegador.classList.add("navVisible");
})

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