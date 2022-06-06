class Variados {
    constructor(marca,  version_year,precio, pais, imagen) {
        this.marca = marca;
        this.version_year = version_year;
        this.precio = precio;
        this.pais = pais;
        this.imagen = imagen;
    }
};

let variado1 = new Variados("Motorola", 2020, 2500000, "USA", "img/Motorola.jpg");
let variado2 = new Variados("Televisor OLED", 2021, 2900000, "USA", "img/oled.jpg");
let variado3 = new Variados("Televisor SAMSUNG", 2019, 2000000, "CANADA", "img/Samsung.jpg");
let variado4 = new Variados("Samsung Doblado", 2019, 59000000, "BRAZIL", "img/samsung-doblado.jpg");
let variado5 = new Variados("TV Antigua", 2002, 2500000, "INGLATERRA", "img/television.jpg");
let variado6 = new Variados("Televisor UHD", 2018, 3000000, "INGLAERRA", "img/uhd_v.png");
let variado7 = new Variados("Televisor Antiguo (Segunda)", 2018, 3590000, "MEXICO", "img/uhd_v.png");

function mostrarBusquedaCompleta(variado){
    let contentmain=document.getElementById("main-content");
    let contnt= document.createElement("div");
     contentmain.appendChild(contnt);
     contnt.setAttribute("class","contenido");

    let imgVariado= document.createElement("img");
    imgVariado.setAttribute("src", variado.imagen);
    imgVariado.setAttribute("class","img");
    contnt.appendChild(imgVariado);

    let valorVariado= document.createElement("label");

    let precioSugerido = new Intl.NumberFormat('es-ES', {}).format(variado.precio);

    let descriValor= document.createTextNode("$" + precioSugerido);
    valorVariado.appendChild(descriValor);
    valorVariado.setAttribute("class","precio");
    contnt.appendChild(valorVariado);

    let descripcionVariados= document.createElement("label");
    let textoVariado=document.createTextNode(variado.marca);
    descripcionVariados.appendChild(textoVariado);
    descripcionVariados.setAttribute("class","descripcion");

    contnt.appendChild(descripcionVariados);

    let yearVariado=document.createElement("label");
    let textoyearVariado=document.createTextNode('Version ' + variado.version_year);
    yearVariado.appendChild(textoyearVariado);
    yearVariado.setAttribute("class","year");
    contnt.appendChild(yearVariado);

    /*let kilometrajecar=document.createElement("label");
    let textkilometraje=document.createTextNode(car.kilometraje+" kilometros");
    kilometrajecar.appendChild(textkilometraje);
    kilometrajecar.setAttribute("class","kilometraje");
    contimg.appendChild(kilometrajecar);*/

    let country=document.createElement("label");
    let textocountry=document.createTextNode('Pais '+ variado.pais);
    country.appendChild(textocountry);
    country.setAttribute("class","pais");
    contnt.appendChild(country);

}

window.addEventListener("keydown",function(event){
    let busquedaAvanzada=document.getElementById("busquedaOrdenada").value;
    if(event.key=="Enter"){
        console.log(busquedaAvanzada);
        clean();
        if(busquedaAvanzada=="Motorola"){
            mostrarBusquedaCompleta(variado1);           
        }
        else if(busquedaAvanzada=="Televisor OLED"){
            mostrarBusquedaCompleta(variado2);
            mostrarBusquedaCompleta(variado3);
            mostrarBusquedaCompleta(variado5);
            mostrarBusquedaCompleta(variado6);
            mostrarBusquedaCompleta(variado7);
        }
       
        else if(busquedaAvanzada=="Samsung Doblado"){
            mostrarBusquedaCompleta(variado4);
        }
        
       
        
        else{
            alert("No se encontro esta busqueda...Lo Sentimos...");
        }
    }
})
function clean(){
    document.getElementById("main-content").innerHTML="";
}