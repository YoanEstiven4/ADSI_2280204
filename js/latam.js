"use strict"

let fechaVuelo = undefined;
let jornada = undefined;
let horarioVuelo = undefined;
let horarioSalida = new Date(2022, 2, 10, 8, 12, 0);
let horarioLlegada = new Date(2022, 2, 13, 12, 12, 0);

class Vuelos {
    constructor (horarioSalida, horarioLlegada, duracion, origen, destino, precio, stopping, economic) {
        this.horarioSalida = horarioSalida;
        this.horarioLlegada = horarioLlegada;
        this.duracion = duracion;
        this.origen = origen;
        this.destino = destino;
        this.precio = precio;
        this.stopping = stopping;
        this.economic = economic;
    }
}

window.onload = function() {
    buscarVuelos();
}