$(document).ready(function(){
  const level = localStorage.getItem("level");
  if(level === "easy"){
    $("#easy").removeClass("white");
    $("#easy").addClass("black");
    $("#medium").removeClass("black");
    $("#medium").addClass("white");
  } else{
    $("#medium").removeClass("white");
    $("#medium").addClass("black");
    $("#easy").removeClass("black");
    $("#easy").addClass("white");
  }
  $("#easy").click(function(){
    $("#easy").removeClass("white");
    $("#easy").addClass("black");
    $("#medium").removeClass("black");
    $("#medium").addClass("white");
    localStorage.setItem("level", "easy");
  });
  $("#medium").click(function(){
    $("#medium").removeClass("white");
    $("#medium").addClass("black");
    $("#easy").removeClass("black");
    $("#easy").addClass("white");
    localStorage.setItem("level", "medium");
  });
});
