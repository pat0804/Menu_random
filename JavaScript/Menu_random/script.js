var menu = []

for(var i = 1; i <= 5; i++)
menu.push(prompt("พิมพ์เมนูอาหาร5รายการ รายการที่" + " " + i))
document.getElementById("result").innerHTML += menu

var to_random = Math.floor(Math.random()*menu.length)
var random_menu = menu[to_random]

  alert ("เมนูที่สุ่มได้คือ " + random_menu + " !")
  document.getElementById("show").innerHTML = "เมนูที่ได้คือ " + random_menu + " !"

  function refreshPage(){
    location.reload();
} 
