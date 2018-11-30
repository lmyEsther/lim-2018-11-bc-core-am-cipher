window.cipher = {
  //Cifrar
  encode: (string, offset) => {
     let cifrada ='';
     let textoMayus = string.toUpperCase(); //convierto a mayusculas antes de realizar el recorrido

     for (let i = 0; i < textoMayus.length; i ++){ //barriendo con el ciclo for
      const nroPalabra = textoMayus.charCodeAt(i); //obtengo el nro Ascii de la letra proporcionada
      const formula = (nroPalabra - 65 + offset) % 26 + 65; //este nro lo uso en la formula para cifrar

      if (nroPalabra === 32){ //tomando en cuenta espacios con el nro Ascii 32
        cifrada +=' '; //concanteno espacio
      } else {
        cifrada +=String.fromCharCode(formula); //concateno siguiente letra
      }
     }
     return cifrada; //output del texto ya cifrado luego de pasar por el ciclo for y concatenar
   },
   //Descifrar, mismo proceso a diferencia de la formula en si
  decode: (string, offset) => {
    let descifrada = '';
    let textoMayus = string.toUpperCase();

    for (let i = 0; i < textoMayus.length; i ++){
     const nroPalabra = textoMayus.charCodeAt(i);
     const formula = (nroPalabra + 65 - (offset % 26)) % 26 + 65; //cambio de signos ya que es un recorrido inverso
     //cambio en el offset, ya que debe ser un numero menor a 26 y el residuo ahorra la cantidad de vueltas alrededor de los 26 y da dentro del rango

     if (nroPalabra === 32){
       descifrada +=' ';
     } else {
       descifrada += String.fromCharCode(formula);
     }
    }
    return descifrada;
  }
};
