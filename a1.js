let tg = window.Telegram.WebApp;

tg.expand();



let item = "";

let game_1 = document.getElementById("game_1");


game_1.addEventListener("click", function(){
  tg.sendData("some string that we need to send");
  window.Telegram.WebApp.sendData('ijiiik');
 });



 /*window.Telegram.WebApp.sendData('ijiiik');  */

Telegram.WebApp.onEvent("mainButtonClicked", function(){
 /*tg.sendData(item);*/
 tg.sendData("some string that we need to send");
 window.Telegram.WebApp.sendData('ijiiik');
});
