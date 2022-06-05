"use strict"


class Automovil {
    constructor(marca,modelo,anyo) {
        this.marca = marca;
        this.modelo = modelo;
        this.anyo = anyo;
    }
}

let auto = new Automovil();

auto.Anyo = 2025;
auto.Marca = "Toyota";
auto.Modelo = "3 prime";


let buscarAutos = document.getElementById("buscarAutos");

buscarAutos.addEventListener("click", function() {
  let infoAutomovil = auto.Marca + " " + auto.Modelo + " Modelo " + auto.Anyo;
  document.getElementById("infoAuto").innerHTML = infoAutomovil;
});

function maquetacion () {
    let mainContent = document.getElementById("mainContent");
    let marca = document.createElement("label");
    let textoMarca = document.createTextNode("Hola, como estan");
    marca.appendChild(textoMarca);
    mainContent.appendChild(marca);
}