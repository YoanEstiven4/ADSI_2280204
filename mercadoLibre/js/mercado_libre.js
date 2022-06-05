class Variados {
    constructor(marca,  version_year,precio, pais, imagen) {
        this.marca = marca;
        this.version_year = version_year;
        this.precio = precio;
        this.pais = pais;
        this.imagen = this.imagen;
    }
};

let variado1 = new Variados("Motorola", 2020, 2500000, "USA", "img/Motorola.jpg");
let variado2 = new Variados("Televisor OLED", 2021, 2900000, "USA", "img/oled.jpg");
let variado3 = new Variados("Televisor SAMSUNG", 2019, 2000000, "CANADA", "img/Samsung.jpg");
let variado4 = new Variados("Samsung Doblado", 2019, 59000000, "BRAZIL", "img/samsung-doblado.jpg");
let variado5 = new Variados("TV Antigua", 2002, 2500000, "INGLATERRA", "img/television.jpg");
let variado6 = new Variados("Televisor UHD", 2018, 3000000, "INGLAERRA", "img/uhd_v.png");
let variado7 = new Variados("Televisor Antiguo (Segunda)", 2018, 3590000, "MEXICO", "img/uhd_v.png");

function mostrarVariados(variado) {
    let maincontent = document.getElementById("main-content");
    let contentImg = document.createElement("div");
    contentMain.appendChild(contentImg);
    contentImg.setAttribute("class", "mainImg");

    let imgVariados = document.createElement("img");
    imgVariados.setAttribute("src", variado.imagen);
    imgVariados.setAttribute("class", "estilo-img");
    maincontent.appendChild(imgVariados);

    let valorVariados = document.createElement("label");

    let precioSugerido = new Intl.NumberFormat('es-ES', {}).format(variado.precio);
    
    
    let textValorvariados = document.createTextNode("$" + precioSugerido);
    valorVariados.appendChild(textValorvariados);
    valorVariados.setAttribute("class", "precio");
    contentImg.appendChild(valorVariados);

    let describeTuVariado = document.createElement("label");
    let descripcion = document.createTextNode(variado.marca + " " + variado.version);
    describeTuVariado.appendChild(descripcion);
    describeTuVariado.setAttribute("class", "descripcion");
    maincontent.appendChild(describeTuVariado);


    let anyoVariado = document.createElement("label");
    let descriVariadoAnyo = document.createTextNode(variado.anyo);
    maincontent.appendChild(descriVariadoAnyo);
    
    anyoVariado.setAttribute("class", "anyo");
};

window.addEventListener("keydown", function(event) {
    let busqueda = document.getElementById("busquedaOrdenada").value;
    if(event.key == "tclaEnter") {
        limpiar();
        if (busqueda == "USA") {
            mostrarVariados(variado1);
            mostrarVariados(variado2);
            mostrarVariados(variado3);
            mostrarVariados(variado4);
        }
        else if (busqueda == "INGLATERRA") {
            mostrarVariados(variado5);
            mostrarVariados(variado6);
            mostrarVariados(variado7);
        }
        else {
        this.alert("El elemento ingresado no ha sido encontrado. Lo Sentimos...");
        }
    }
});
function limpiar() {
    document.getElementById("main-content").innerHTML = "";
};