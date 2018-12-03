let textIng = document.getElementById('texto-ingresado');
let offsetIng = document.getElementById('offset-ingresado');
let btnCifrar = document.getElementById('btn-cifrar'); //botón que cifrara el texto en cuestion
let btnDescifrar = document.getElementById('btn-descifrar'); //botón que descifrara
let vtnCifrar = document.getElementById('ventana-cifrar'); //botón que dara acceso a la pantalla de cifrar
let vtnDescifrar = document.getElementById('ventana-descifrar'); //botón que dara acceso a la pantalla de descifrar
let contenido = document.getElementById('contenido'); //primera pantalla
let cifrarDescifrar = document.getElementById('cifrar-descifrar'); //segunda pantalla (cifra o descifra)

//funcion para el boton de cifrar en la ventana cifrar
function clickCifrar (){
  const mostrado = document.getElementById('mostrado'); //Pantalla donde se mostrara el texto ya procesado (cifrado o descifrado, segun el caso)
  const mostrarText = document.getElementById('mostrar-texto'); //etiqueta donde se mostrara el texto cifrado o descifrado

  cifrarDescifrar.style.display= 'none';
  mostrado.style.display='block';
  mostrarText.innerHTML = cipher.encode(parseInt(offsetIng.value), textIng.value); //introduzco el return de esa funcion dentro de la etiqueta creada para dicho fin
}

//funcion para el boton de descifrar en la ventana descifrar
function clickDescifrar (){
  const mostrado = document.getElementById('mostrado');
  const mostrarText = document.getElementById('mostrar-texto');

  cifrarDescifrar.style.display= 'none';
  mostrado.style.display='block';
  mostrarText.innerHTML= cipher.decode(parseInt(offsetIng.value), textIng.value);
}

//Manejador de Click para mostrar siguiente pantalla con campo de texto y boton cifrar
vtnCifrar.addEventListener('click', () => {
  contenido.style.display= 'none';
  cifrarDescifrar.style.display = 'block';
  btnDescifrar.style.display='none';
})
//Manejador de Click para mostrar siguiente pantalla con campo de texto y boton descifrar
vtnDescifrar.addEventListener('click', () => {
  contenido.style.display= 'none';
  cifrarDescifrar.style.display = 'block';
  btnCifrar.style.display='none';
})


btnCifrar.addEventListener('click', clickCifrar) //boton cifrar en la ventana cifrar
btnDescifrar.addEventListener('click', clickDescifrar) //boton descifrar en la ventana descifrar
