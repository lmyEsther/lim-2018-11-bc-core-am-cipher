window.cipher = {
  //Cifrar
  encode: (offset, string) => {
    let encrypted = '';

    for (let i = 0; i < string.length; i ++) { //barriendo con el bucle for
     const wordNumber = string.charCodeAt(i); //obtengo el nro Ascii de la letra proporcionada
     let formula = (wordNumber - 65 + offset) % 26 + 65; //formula para Mayusculas

     if (wordNumber === 32){ //consideradno espacios
       encrypted +=' ';
     } else if (wordNumber > 96 && wordNumber < 123) { //considerando minúsculas con un rango ascii del 97-122
       formula = (wordNumber - 97 + offset) % 26 + 97;
       encrypted += String.fromCharCode(formula);
     } else if (wordNumber > 47 && wordNumber < 58) { //considerando numeros con un rango ascii del 48-57
       formula = (wordNumber - 48 + offset) % 10 + 48;
       encrypted += String.fromCharCode(formula);
     } else if (wordNumber > 32 && wordNumber < 48) { //considerando caracteres especiales con un rango ascii de 33-63
       formula = (wordNumber - 33 + offset) % 15 + 33;
       encrypted += String.fromCharCode(formula);
     } else {
       encrypted += String.fromCharCode(formula); //concatena Mayusculas
     }
   } // fin del ciclo

    return encrypted; //salida del texto ya cifrado
  }, //fin de la funcion descifrar

   //Descifrar
  decode: (offset, string) => {
    let unscrambled = '';

     for (let i = 0; i < string.length; i ++) { //barriendo con el ciclo for
      const wordNumber = string.charCodeAt(i); //obtengo el nro Ascii de la letra proporcionada
      let formula = (wordNumber - 90 - offset % 26) % 26 + 90;

      if (wordNumber === 32) {
        unscrambled +=' ';
      } else if (wordNumber > 96 && wordNumber < 123) { //considerando minúsculas con un rango ascii del 97-122
        formula = (wordNumber - 122 - offset % 26) % 26 + 122;
        unscrambled += String.fromCharCode(formula);
      } else if (wordNumber > 47 && wordNumber < 58) { //considerando numeros con un rango ascii del 48-57
        formula = (wordNumber - 57 - offset % 10) % 10 + 57;
        unscrambled += String.fromCharCode(formula);
      } else if (wordNumber > 32 && wordNumber < 48) { //considerando caracteres especiales con un rango de 33-63
        formula = (wordNumber - 47 - offset % 15) % 15 + 47;
        unscrambled += String.fromCharCode(formula);
      } else {
        unscrambled += String.fromCharCode(formula); //concatena Mayusculas
      }
     }

     return unscrambled; //Salida del texto ya descifrado
   } //fin de la funcion descifrar
};
