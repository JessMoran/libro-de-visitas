//variables globales para traer a los elementos del htML
var textContainer = document.getElementById('text-container');
var comment = document.getElementById('comment');

//variables globales para traer a los botones del HTML
var largeBtn = document.getElementById('large');
var mediumBtn = document.getElementById('medium');
var smallBtn = document.getElementById('small');
var textBtn = document.getElementById('text');
var backgroundBtn = document.getElementById('background');
var rightBtn = document.getElementById('right');
var leftBtn = document.getElementById('left');
var middleBtn = document.getElementById('middle');

//Se asigna un evento y una función
textContainer.addEventListener("keyup", getText);

largeBtn.addEventListener("click",changeSizeBig);
mediumBtn.addEventListener("click",changeSizeMedium);
smallBtn.addEventListener("click", changeSizeSmall);
textBtn.addEventListener("click", textColor);
backgroundBtn.addEventListener("click", backgroundColor);
rightBtn.addEventListener("click", changeAlignRight);
leftBtn.addEventListener("click", changeAlignLeft);
middleBtn.addEventListener("click",changeAlignMiddle);

//funcion que pinta el texto que pone el usuario
function getText (){
  var textValue = textContainer.value;
  comment.innerText = textValue;
}

function changeSizeBig (){
  comment.style.fontSize ="50px";
}

function changeSizeMedium (){
  comment.style.fontSize ="30px";
}

function changeSizeSmall (){
  comment.style.fontSize ="20px";
}

function textColor (){
  prompt("Ingresa el número hexadecimal que desees")
}

function backgroundColor (){
  prompt("Ingresa el número hexadecimal que desees")
}

function changeAlignRight (){
  comment.style.textAlign = "right";
}

function changeAlignLeft (){
  comment.style.textAlign = "left";
}

function changeAlignMiddle (){
  comment.style.textAlign = "center";
}
