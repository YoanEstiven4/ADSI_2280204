"use strict"

let jornada = undefined;

class Vuelos {
    constructor(horaSalida, horaLlegada, duracion, origen, destino, precio, paradas, economico) {
        this.horaSalida = horaSalida;
        this.horaLlegada = horaLlegada;
        this.duracion = duracion;
        this.origen = origen;
        this.destino = destino;
        this.precio = precio;
        this.paradas = paradas;
        this.economico = economico;
    }
}


window.onload = function() {
    vuelos();
};
    
//esta funcion nos servira para determinar si la hora debe ser am o pm
function definirJornada(horaEvento) {
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
    let horaSalida1 = new Date(2022, 12, 11, 10, 12, 0);
    let horaLlegada1 = new Date(2022, 12, 11, 11, 32, 0);
    let horaSalida1Str = definirJornada(horaSalida1);
    let horaLlegada1Str = definirJornada(horaLlegada1);

    let horaSalida2 = new Date(2022, 2, 12, 8, 35, 0);
    let horaLlegada2 = new Date(2022, 2, 12, 9, 45, 0);
    let horaSalida2Str = definirJornada(horaSalida2);
    let horaLlegada2Str = definirJornada(horaLlegada2);

    let horaSalida3 = new Date(2022, 2, 12, 11, 40, 0);
    let horaLlegada3 = new Date(2022, 2, 12, 12, 50, 0);
    let horaSalida3Str = definirJornada(horaSalida3);
    let horaLlegada3Str = definirJornada(horaLlegada3);

    let horaSalida4 = new Date(2022, 11, 12, 11, 30, 0);
    let horaLlegada4 = new Date(2022, 11, 12, 12, 50, 0);
    let horaSalida4Str = definirJornada(horaSalida4);
    let horaLlegada4Str = definirJornada(horaLlegada4);

    let horaSalida5 = new Date(2022, 11, 12, 11, 30, 0);
    let horaLlegada5 = new Date(2022, 11, 12, 12, 50, 0);
    let horaSalida5Str = definirJornada(horaSalida5);
    let horaLlegada5Str = definirJornada(horaLlegada5);

    //creamos el areglo de arreglos
    let vuelo = [{
        "horaSalida":  horaSalida1Str,
        "horaLlegada": horaLlegada1Str,
        "duracion": "Duracion",//dudas
        "duracionVueloStr": "1h 20Min",
        "origen": "BOG",
        "destino": "CTG",
        "precio": 375000,
        "parada": "Directo",
        "economico": "Más Económico..."
    },
    {
        "horaSalida":  horaSalida2Str,
        "horaLlegada": horaLlegada2Str,
        "duracion": "Duracion",//dudas
        "duracionVueloStr": "1h 20Min",
        "origen": "BGT",
        "destino": "CTG",
        "precio": 282000,
        "parada": "Directo",
        "economico": "Más Económico..." 
    },
    
    {
        "horaSalida":  horaSalida4Str,
        "horaLlegada": horaLlegada4Str,
        "duracion": "Duracion",//dudas
        "duracionVueloStr": "1h 20Min",
        "origen": "BGT",
        "destino": "CTG",
        "precio": 900000,
        "parada": "Directo",
        "economico": "Más Económico..." 
    },
    {
        "horaSalida":  horaSalida3Str,
        "horaLlegada": horaLlegada3Str,
        "duracion": "Duracion",//dudas
        "duracionVueloStr": "1h 20Min",
        "origen": "BGT",
        "destino": "CTG",
        "precio": 420000,
        "parada": "Directo",
        "economico": "Más Económico..."
    },
        {
            "horaSalida":  horaSalida5Str,
            "horaLlegada": horaLlegada5Str,
            "duracion": "Duracion",//dudas
            "duracionVueloStr": "1h 20Min",
            "origen": "BGT",
            "destino": "CTG",
            "precio": 420000,
            "parada": "Directo",
            "economico": "Más Económico..."
    }];


//esta funcion buscara los vuelos
function vuelos() {
    let duracionTxt = "Duración";
    for(let i = 0; i < vuelo.length; i++) {
        cargar(vuelo[i].horaSalida,  vuelo[i].horaLlegada,  
            vuelo[i].origen, vuelo[i].destino,vuelo[i].duracion, vuelo[i].duracionVueloStr, vuelo[i].precio, vuelo[i].parada, vuelo[i].economico);
    } 
    
}

//la funcion que cargara los vuelos
function cargar(horaSalida,horaLlegada,origen,destino,duracion,duracionVueloStr,precio,parada,economico){
    let contPrincipal=document.getElementById("contenido");
    let contPrincipalVuelo=document.createElement("div");
    contPrincipalVuelo.setAttribute("class","contenedorVuelo")
    contPrincipal.appendChild(contPrincipalVuelo);

    let neweconomico=document.createElement("div");
    contPrincipalVuelo.appendChild(neweconomico);
    let txteconomico=document.createTextNode(economico);
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
    let duracionVueloString = document.createTextNode(duracionVueloStr);
    duracionVuelo.setAttribute("class", "duracionTiempo");
    duracionVuelo.appendChild(duracionVueloString);

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
    let txtparada=document.createTextNode(parada);
    newparadas.setAttribute("class","paradas")
    newparadas.appendChild(txtparada); 
}
