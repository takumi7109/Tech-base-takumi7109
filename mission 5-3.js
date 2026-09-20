function omikujishow(){
  var omikuji = new Array("大吉","中吉","小吉");
    
  var number1 = Math.random();
  var number2 = number1 * 3;
  var number = Math.floor(number2);
  var message = omikuji[number];
  
  var object = document.getElementById("omikuji");
  object.innerText = message;
  if(message == "大吉"){
    object.style.color = "red";
  }else if(message == "中吉"){
    object.style.color = "blue";
  }else{
    object.style.color = "green";
  }
}