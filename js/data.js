var commentsData = [
  {
  content: "hi",
  style :{
    color :"yellow",
    background :"black"
  }
},
  {
  content: "bye",
  style :{
    color :"white",
    background :"purple"
  }
},

];

var commentsContainer = document.getElementById("comments-container");
var sendBtn = document.getElementById("send-btn");
sendBtn.addEventListener("click", addComment);


function drawComments (){
  commentsContainer.innerHTML = " ";
  for (var i = 0; i < commentsData.length; i++){
    var sectionDOM = createDomCommentFromData(commentsData [i]);
    commentsContainer.appendChild(sectionDOM);
  }
}

function createDomCommentFromData (data){
  var commentContent = data.content;
  var commentDom = document.createElement("section");
  commentDom.innerHTML = commentContent;
  Object.assign(commentDom.style,data.style)
  return commentDom;
  }

 drawComments ();

function addComment (){
  var commentPreview = document.getElementById("new-comment-container");
  var newCommentText = commentPreview.innerHTML;
  var newComment = { content :null, style :{} };
  newComment.content = newCommentText;
  Object.assign(newComment.style,commentPreview.style);
  commentsData.unshift(newComment);
  drawComments ();
}
