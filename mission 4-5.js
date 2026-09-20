function omikujishow(){
var number=Math.random();
var message;
  if(number<0.1){message="大吉"} 
  else if(number<0.5){message="中吉"}
  else if(number<0.7){message="小吉"}
  else if(number<0.9){message="吉"}
  else {message="凶"}

  var object=document.getElementById("omikuji");
  object.innerText=message;
}