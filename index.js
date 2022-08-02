$(document).ready(function(){
  const level = localStorage.getItem("level");
  if(level === "easy"){
    $("a.level").attr("href", "easy/game.html")
  } else{
    $("a.level").attr("href", "game.html")
  }
});
