let tg = window.Telegram.WebApp;

tg.expand();



let item = "";

let game_1 = document.getElementById("game_1");


game_1.addEventListener("click", function(){

  tg.MainButton.setText("Вы выбрали товар 1!");
  item = "1";
  tg.MainButton.show();
 });





Telegram.WebApp.onEvent("mainButtonClicked", function(){
 tg.sendData(item);
});