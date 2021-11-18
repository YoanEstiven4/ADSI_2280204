"use strict"
/* Operadores Logicos */
/* &&...y
   ||...o
   !=...negacion
   xor..o exclusivo */


   /* Si el aprendiz tiene jovenes en accion o sisben
   puede acceder al subsidio de transporte.
   Si tiene jovenes en accion y sisben NO puede acceder
   al subsidio de transporte
   Si no tiene jovenes en accion y no tiene sisben
   tampoco puede acceder al subsidio de transporte */
   var jovenAccionUsuario = true;
   var sisbenUsuario = true;

   if (jovenAccionUsuario === true ^ sisbenUsuario === true) {
       console.log("Usted puede acceder al beneficio de transporte");
   }
   else {
       console.log("No puede acceder al subsidio de transporte");
   }