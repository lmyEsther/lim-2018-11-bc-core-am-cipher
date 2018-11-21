const string = document.getElementbyId("texto-ingresado");
const offset = document.getElemntbyId("offset-ingresado");
const btnCifrar = document.getElementbyId("btn-cifrar");
const btnDescifrar = document.getElementbyId("btn-descifrar");

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

function palabraDescifrada (string, offset) {
  let descifrada = '';

  for (let i = 0; i <= string.length; i ++){
   const nroPalabra = string.charCodeAt(i);
   const formula = (nroPalabra + 65 - (offset%26)) % 26 + 65; //Listo, lo logre, ya descifra

   if (nroPalabra === 32){
     descifrada += ' ';
   } else {
     descifrada += String.fromCharCode(formula);
   }
  }
  return descifrada;
}

const mostrarText = document.getElementbyId("mostrar-texto");

function clickCifrar (){
  mostrarText.innerHTML = palabraCifrada(string.value, parseInt(offset.value));
}
function clickDescifrar (){
  mostrarText.innerHTML = palabraDescrifrada(string.value, parseInt(offset.value));
}
btnCifrar.addEventListener('click', clickCifrar)
btnDescifrar.addEventListener('click', clickDescifrar)
