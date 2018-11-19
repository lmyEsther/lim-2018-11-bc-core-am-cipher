//function letraCifrada (letra, desplazar) {
// const nroLetra = letra.charCodeAt();
//const nroDesplazado = (nroLetra-65+desplazar)%26 +65;

  //const cifrada = String.fromCharCode(nroDesplazado);

  //return cifrada;

//}
 //console.log(letraCifrada('M',4));

 function palabraCifrada (palabra, desplazar) {
   let cifrada = '';

   for (let i = 0; i <= palabra.length; i ++){

    const nroPalabra = palabra.charCodeAt(i);
    const formula = (nroPalabra - 65 + desplazar) % 26 + 65;
        cifrada += String.fromCharCode(formula);



   }


   return cifrada;
 }
console.log(palabraCifrada('DESDE', 2));
