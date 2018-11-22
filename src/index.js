let string = document.getElementById("texto-ingresado");
let offset = document.getElementById("offset-ingresado");
let btnCifrar = document.getElementById("btn-cifrar");
let btnDescifrar = document.getElementById("btn-descifrar");
let vtnCifrar = document.getElementById("ventana-cifrar");
let vtnDescifrar = document.getElementById("ventana-descifrar");

function clickCifrar (){
  const mostrarText = document.getElementById("mostrar-texto");
  const mostrado = document.getElementById("mostrado");
  mostrado.style.visibility="visible";
  mostrarText.innerHTML = cipher.encode(string.value, parseInt(offset.value));


}
function clickDescifrar (){
  const mostrarText = document.getElementById("mostrar-texto");
  const mostrado = document.getElementById("mostrado");
  mostrado.style.visibility="visible";
  mostrarText.innerHTML = cipher.decode(string.value, parseInt(offset.value));
}

let contenido = document.getElementById("contenido");
let cifrarDescifrar = document.getElementById("cifrar-descifrar");

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
