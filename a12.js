let tg = window.Telegram.WebApp;

tg.expand();





let good = document.getElementById("good");




good.addEventListener("click", function(){

  const name=localStorage.getItem("nameTovar")
  
  
  tg.sendData(name);
 });
