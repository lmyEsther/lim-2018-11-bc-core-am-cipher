 function palabraCifrada (string, offset) {
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
 }
console.log(palabraCifrada('LEOMARIYER', 3000));

function palabraDescifrada (string, offset) {
  let descifrada = '';

  for (let i = 0; i <= string.length; i ++){
   const nroPalabra = string.charCodeAt(i);
   const formula = (nroPalabra + 65 - (offset%26)) % 26 + 65; //Listo, lo logre, ya descifra, Gracias Gonzalo por los tips

   if (nroPalabra === 32){
     descifrada += ' ';
   } else {
     descifrada += String.fromCharCode(formula);
   }
  }
  return descifrada;
}
console.log(palabraDescifrada('VOYWKBSIOB', 3000))
