window.cipher = {
  // ...
  encode: (string, offset) => {
     let cifrada = '';

     for (let i = 0; i <= string.length; i ++){
      const nroPalabra = string.charCodeAt(i);
      const formula = (nroPalabra - 65 + offset) % 26 + 65;

      if (nroPalabra === 32){
        cifrada += ' ';
      } else {
        cifrada += String.fromCharCode(formula);
      }
     }
     return cifrada;
   },

  decode: (string, offset) => {
    let descifrada = '';

    for (let i = 0; i <= string.length; i ++){
     const nroPalabra = string.charCodeAt(i);
     const formula = (nroPalabra + 65 - (offset%26)) % 26 + 65;

     if (nroPalabra === 32){
       descifrada += ' ';
     } else {
       descifrada += String.fromCharCode(formula);
     }
    }
    return descifrada;
  }

};
