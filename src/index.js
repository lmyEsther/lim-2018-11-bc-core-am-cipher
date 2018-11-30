let textIng = document.getElementById('texto-ingresado');
let offsetIng = document.getElementById('offset-ingresado');
let btnCifrar = document.getElementById('btn-cifrar');
let btnDescifrar = document.getElementById('btn-descifrar');
let vtnCifrar = document.getElementById('ventana-cifrar');
let vtnDescifrar = document.getElementById('ventana-descifrar');
let contenido = document.getElementById('contenido');
let cifrarDescifrar = document.getElementById('cifrar-descifrar');

//funcion para el boton de cifrar en la ventana cifrar
function clickCifrar (){
  const mostrado = document.getElementById('mostrado');
  const mostrarText = document.getElementById('mostrar-texto');

  cifrarDescifrar.style.display= 'none';
  mostrado.style.display='block';
  mostrarText.innerHTML = cipher.encode(textIng.value, parseInt(offsetIng.value));
}
//funcion para el boton de descifrar en la ventana descifrar
function clickDescifrar (){
  const mostrado = document.getElementById('mostrado');
  const mostrarText = document.getElementById('mostrar-texto');

  cifrarDescifrar.style.display= 'none';
  mostrado.style.display='block';
  mostrarText.innerHTML= cipher.decode(textIng.value, parseInt(offsetIng.value));
}

//Manejador de Click para mostrar siguiente pantalla con campo de texto y boton cifrar
vtnCifrar.addEventListener('click',() => {
  contenido.style.display= 'none';
  cifrarDescifrar.style.display = 'block';
  btnDescifrar.style.display='none';
})
//Manejador de Click para mostrar siguiente pantalla con campo de texto y boton descifrar
vtnDescifrar.addEventListener('click',() => {
  contenido.style.display= 'none';
  cifrarDescifrar.style.display = 'block';
  btnCifrar.style.display='none';
})


btnCifrar.addEventListener('click', clickCifrar) //boton cifrar en la ventana cifrar
btnDescifrar.addEventListener('click', clickDescifrar) //boton descifrar en la ventana descifrar
