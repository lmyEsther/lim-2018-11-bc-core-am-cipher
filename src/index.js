let textIng = document.getElementById("texto-ingresado");
let offsetIng = document.getElementById("offset-ingresado");
let btnCifrar = document.getElementById("btn-cifrar");
let btnDescifrar = document.getElementById("btn-descifrar");
let vtnCifrar = document.getElementById("ventana-cifrar");
let vtnDescifrar = document.getElementById("ventana-descifrar");
let contenido = document.getElementById("contenido");
let cifrarDescifrar = document.getElementById("cifrar-descifrar");

function clickCifrar (){
  const mostrado = document.getElementById("mostrado");
  const mostrarText = document.getElementById("mostrar-texto");

  cifrarDescifrar.style.display= "none";
  mostrado.style.display="block";
  mostrarText.innerHTML = cipher.encode(textIng.value, parseInt(offsetIng.value));
}

function clickDescifrar (){
  const mostrado = document.getElementById("mostrado");
  const mostrarText = document.getElementById("mostrar-texto");

  cifrarDescifrar.style.display= "none";
  mostrado.style.display="block";
  mostrarText.innerHTML= cipher.decode(textIng.value, parseInt(offsetIng.value));
}

vtnCifrar.addEventListener('click',() => {
  contenido.style.display= "none";
  cifrarDescifrar.style.display = "block";
  btnDescifrar.style.display="none";
})
vtnDescifrar.addEventListener('click',() => {
  contenido.style.display= "none";
  cifrarDescifrar.style.display = "block";
  btnCifrar.style.display="none";
})


btnCifrar.addEventListener('click', clickCifrar)
btnDescifrar.addEventListener('click', clickDescifrar)
