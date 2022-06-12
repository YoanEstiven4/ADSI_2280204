"use strict"

/*let fechaVuelo = undefined;*/
let jornada = undefined;
/*let horarioVuelo = undefined;*/

class Vuelos {
    constructor(horaSalida, horaLlegada, duracion, origen, destino, precio, stopping, economic) {
        this.horaSalida = horaSalida;
        this.horaLlegada = horaLlegada;
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
};
    
//esta funcion nos servira para determinar si la hora debe ser am o pm
function definir(horaEvento) {
    if (horaEvento.getHours() < 12) {
        jornada = "a.m.";
    }
    else {
        jornada = "p.m.";
        horaEvento.setHours = horaEvento.getHours() - 12;
    } 
    let horaEventoTxt = horaEvento.getHours().toString() + ":" + horaEvento.getMinutes().toString() + " " + jornada;
    return horaEventoTxt;
}
//creamos las variables de tipo date para las horas de salida y de llegada
    let horaSalida1 = new Date(2022, 2, 10, 8, 12, 0);
    let horaLlegada1 = new Date(2022, 2, 13, 12, 12, 0);
    let horaSalida11 = definir(horaSalida1);
    let horaLlegada11 = definir(horaLlegada1);

    let horaSalida2 = new Date(2022, 2, 11, 5, 30, 0);
    let horaLlegada2 = new Date(2022, 2, 10, 8, 32, 0);
    let horaSalida22 = definir(horaSalida2);
    let horaLlegada22 = definir(horaLlegada2);

    let horaSalida3 = new Date(2022, 2, 9, 13, 35, 0);
    let horaLlegada3 = new Date(2022, 2, 10, 8, 40, 0);
    let horaSalida3Str = definir(horaSalida3);
    let horaLlegada3Str = definir(horaLlegada3);


    //creamos el areglo de arreglos
    let catalogoVuelos = [{
        "horaSalida": horaSalida11,
        "horaLlegada": horaLlegada11,
        "duracion": "Duracion",
        "duracionVueloStr": "1h 20Min",
        "origen": "BOG",
        "destino": "CTG",
        "precio": 375000,
        "stopping": "Directo",
        "economic": "Mas Economico"
    },
    {
        "horaSalida":  horaSalida22,
        "horaLlegada": horaLlegada22,
        "duracion": "Duracion",
        "duracionVueloStr": "1h 20Min",
        "origen": "BGT",
        "destino": "CTG",
        "precio": 282000,
        "stopping": "Directo",
        "economic": "Mas Economico" 
    },
    
    {
        "horaSalida":  horaSalida3Str,
        "horaLlegada": horaLlegada3Str,
        "duracion": "Duracion",
        "duracionVueloStr": "1h 20Min",
        "origen": "BGT",
        "destino": "CTG",
        "precio": 450000,
        "stopping": "Directo",
        "economic": "Mas Economico" 
    
    }];


//esta funcion buscara los vuelos
function buscarVuelos() {
    let duracionTxt = "Duración";
    for(let i = 0; i < catalogoVuelos.length; i++) {
        cargar(catalogoVuelos[i].horaSalida,  catalogoVuelos[i].horaLlegada,  
            catalogoVuelos[i].origen, catalogoVuelos[i].destino, catalogoVuelos[i].duracion, catalogoVuelos[i].duracionVueloStr, catalogoVuelos[i].precio, catalogoVuelos[i].stopping, catalogoVuelos[i].economic);
    } 
    
}

//la funcion que cargara los vuelos
function cargar(horaSalida,horaLlegada,origen,destino,duracion,duracionVuelos,precio,stopping,economic){
    let contPrincipal=document.getElementById("contenidoVuelos");
    let contPrincipalVuelo=document.createElement("div");
    contPrincipalVuelo.setAttribute("class","content")
    contPrincipal.appendChild(contPrincipalVuelo);

    let neweconomico=document.createElement("div");
    contPrincipalVuelo.appendChild(neweconomico);
    let txteconomico=document.createTextNode(economic);
    neweconomico.appendChild(txteconomico);
    neweconomico.setAttribute("class","economico");

    let newhoraSalida=document.createElement("label");
    let horaSalidatxt=document.createTextNode(horaSalida);
    newhoraSalida.appendChild(horaSalidatxt);
    contPrincipalVuelo.appendChild(newhoraSalida);
    newhoraSalida.setAttribute("class","horaSalida")

    let newhoraLlegada=document.createElement("label");
    let txtHoraLlegada=document.createTextNode(horaLlegada);
    newhoraLlegada.setAttribute("class","horallegada");
    newhoraLlegada.appendChild(txtHoraLlegada);
    contPrincipalVuelo.appendChild(newhoraLlegada);

    let newduracion=document.createElement("label");
    contPrincipalVuelo.appendChild(newduracion);
    let duracionstring=document.createTextNode(duracion);
    newduracion.appendChild(duracionstring);
    newduracion.setAttribute("class","duracion");

    
    let duracionVuelo = document.createElement("label");
    contPrincipalVuelo.appendChild(duracionVuelo);
    let duracionVueloS = document.createTextNode(duracionVuelos);
    duracionVuelo.setAttribute("class", "duracionTiempo");
    duracionVuelo.appendChild(duracionVueloS);

    let lineaDivisora = document.createElement("hr");
    contPrincipalVuelo.appendChild(lineaDivisora);
    lineaDivisora.setAttribute("class", "separador");

    let origenVuelo = document.createElement("label");
    contPrincipalVuelo.appendChild(origenVuelo);
    let txtOrigen = document.createTextNode(origen);
    origenVuelo.setAttribute("class", "origen");
    origenVuelo.appendChild(txtOrigen);

    let destinoVuelo = document.createElement("label");
    contPrincipalVuelo.appendChild(destinoVuelo);
    let txtDestino = document.createTextNode(destino);
    destinoVuelo.setAttribute("class", "destino");
    destinoVuelo.appendChild(txtDestino);

    let tiquete = document.createElement("label");
    contPrincipalVuelo.appendChild(tiquete);
    let precioFormat = new Intl.NumberFormat('es-ES', {}).format(precio);
    let txttiquete = document.createTextNode("cop " + precioFormat);
    tiquete.setAttribute("class", "valor");
    tiquete.appendChild(txttiquete);
    
    let newparadas= document.createElement("label");
    contPrincipalVuelo.appendChild(newparadas);
    let txtparada=document.createTextNode(stopping);
    newparadas.setAttribute("class","paradas")
    newparadas.appendChild(txtparada); 
}
