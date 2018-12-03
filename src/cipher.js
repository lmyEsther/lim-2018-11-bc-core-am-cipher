window.cipher = {
  //Cifrar
  encode: (offset, string) => {
    let cifrada = '';

    for (let i = 0; i < string.length; i ++) { //barriendo con el bucle for
     const nroPalabra = string.charCodeAt(i); //obtengo el nro Ascii de la letra proporcionada
     let formula = (nroPalabra - 65 + offset) % 26 + 65; //formula para Mayusculas

     if (nroPalabra === 32){ //consideradno espacios
       cifrada +=' ';
     } else if (nroPalabra > 96 && nroPalabra < 123){ //considerando minúsculas con un rango ascii del 97-122
       formula = (nroPalabra - 97 + offset) % 26 + 97;
       cifrada += String.fromCharCode(formula);
     } else if (nroPalabra > 47 && nroPalabra < 58){ //considerando numeros con un rango ascii del 48-57
       formula = (nroPalabra - 48 + offset) % 10 + 48;
       cifrada += String.fromCharCode(formula);
     } else if (nroPalabra > 32 && nroPalabra < 48){ //considerando caracteres especiales con un rango de 33-63
       formula = (nroPalabra - 33 + offset) % 15 + 33;
       cifrada += String.fromCharCode(formula);
     } else {
       cifrada += String.fromCharCode(formula); //concatena Mayusculas
     }
   } // fin del ciclo

    return cifrada; //salida del texto ya cifrado
  }, //fin de la funcion descifrar

   //Descifrar
  decode: (offset, string) => {
    let descifrada = '';

     for (let i = 0; i < string.length; i ++) { //barriendo con el ciclo for
      const nroPalabra = string.charCodeAt(i); //obtengo el nro Ascii de la letra proporcionada
      let formula = (nroPalabra - 90 - offset % 26) % 26 + 90;

      if (nroPalabra === 32){
        descifrada +=' ';
      } else if (nroPalabra > 96 && nroPalabra < 123){ //considerando minúsculas con un rango ascii del 97-122
        formula = (nroPalabra - 122 - offset % 26) % 26 + 122;
        descifrada += String.fromCharCode(formula);
      } else if (nroPalabra > 47 && nroPalabra < 58){ //considerando numeros con un rango ascii del 48-57
        formula = (nroPalabra - 57 - offset % 10) % 10 + 57;
        descifrada += String.fromCharCode(formula);
      } else if (nroPalabra > 32 && nroPalabra < 48){ //considerando caracteres especiales con un rango de 33-63
        formula = (nroPalabra - 47 - offset % 15) % 15 + 47;
        descifrada += String.fromCharCode(formula);
      } else {
        descifrada += String.fromCharCode(formula); //concatena Mayusculas
      }
     }

     return descifrada; //Salida del texto ya descifrado
   } //fin de la funcion descifrar
};
