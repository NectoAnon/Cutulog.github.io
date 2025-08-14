let tg = window.Telegram.WebApp;

tg.expand();



let item = "";

let game_1 = document.getElementById("game_1");




game_1.addEventListener("click", function(){
  item = "11";
  tg.sendData(item);
 });






