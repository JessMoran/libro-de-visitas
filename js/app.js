var comments = [];

var textContainer = document.getElementById('text-container');
var commentContainer = document.getElementById('comment-container');


textContainer.addEventListener("keyup", getText);



function getText (){
  var textValue = textContainer.value;

  var textObj ={
    'text': textValue
  }
 comments.push(textObj);
 console.log(textObj,comments);
}
