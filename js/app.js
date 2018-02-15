//variables globales para traer a los elementos del htML
var textContainer = document.getElementById('text-container');
var comment = document.getElementById('comment');

//Se asigna un evento y una función
textContainer.addEventListener("keyup", getText);

//funcion que pinta el texto que pone el usuario
function getText (){
  var textValue = textContainer.value;
  comment.innerText = textValue;
}
