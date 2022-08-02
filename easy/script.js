$(document).ready(function(){
  let deck = [];
  let comp = [];
  let p1 = [];
  let property = [];
  let reset = [];
  let show;
  //for random
  let max = deck.length - 1;
  let min = 0;
  let index;
  //for deck
  let chance = 1;
  let orderPlayer = 0;
  //for comp
  let compIndex;
  let compLast;
  //equality of clones with p
  let same1 = 0;
  let compSame = 0;
  //clones
  let clone;
  let cloneComp;

  let finish = 0;//start
  function rando() {
    max = deck.length - 1;
    min = 0;
    index = Math.floor(Math.random()*(max-min+1)) + min;
  }
  $("button.btn-success").click(function(){
    deck = [];
    comp = [];
    p1 = [];
    reset = [];
    target = 0;
    for(let i = 1; i <= 84; i++){
      deck.push(i);
    }
    for(let i = 1; i <= 7; i++){
      rando();
      comp.push(deck[index]);
      deck.splice(index, 1);
    }
    comp.sort((a, b) => a - b);
    comp.reverse();
    for(let i = 1; i <= 7; i++){
      rando();
      p1.push(deck[index]);
      deck.splice(index, 1);
    }
    p1.sort((a, b) => a - b);
    p1.reverse();

    finish = 1;
    orderPlayer = 1;
    chance = 1;
    $(".show").css("background-image", "none");
    $("#player").text("Очередь первого игрока");
    $("#comp").text("Компьютер");
    for(let i = 1; i <= 7; i++){
      //$("h1.comp7").text(comp[6]);
      $(`.player${i}`).css("background-image", "url('../card1/" + p1[i - 1] + ".jpg')");
    }
    for(let i = 1; i <= 7; i++){
      $(`.comp${i}`).css("background-image", "url('../card1/" + comp[i - 1] + ".jpg')");
    }
  });
  //chance is for deck
  //orderPlayer is for Players turn
  $(".deck").click(function(){
    if(chance === 1 && orderPlayer === 1 && finish === 1){
      if(deck.length === 0){
        deck = reset.slice(0);
        reset = [];
      }
      rando();
      show = deck[index];
      deck.splice(index, 1);
      $(".show").css("background-image", "url('../card1/" + show + ".jpg')");
      chance = 0;
    }
  });
  function compAlert() {
    alert("Компьютер поменял " + compIndex + " блок в башне с " + compLast + " на: " + show);
  }
  function youWin() {
    alert("Ты выиграл");
  }
  function youLose() {
    alert("Ты проиграл");
  }
  function compShow() {
    rando();
    show = deck[index];
    deck.splice(index, 1);
    $(".show").css("background-image", "url('../card1/" + show + ".jpg')");
  }
  function compMove() {
    if(orderPlayer === 0  && finish === 1){
      if(1 <= show && show <= 12){
        compIndex = 1;
        compLast = comp[0];
        comp[0] = show;
        $(".comp1").css("background-image", "url('../card1/" + comp[0] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(13 <= show && show <= 24){
        compIndex = 2;
        compLast = comp[1];
        comp[1] = show;
        $(".comp2").css("background-image", "url('../card1/" + comp[1] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(25 <= show && show <= 36){
        compIndex = 3;
        compLast = comp[2];
        comp[2] = show;
        $(".comp3").css("background-image", "url('../card1/" + comp[2] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(37 <= show && show <= 48){
        compIndex = 4;
        compLast = comp[3];
        comp[3] = show;
        $(".comp4").css("background-image", "url('../card1/" + comp[3] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(49 <= show && show <= 60){
        compIndex = 5;
        compLast = comp[4];
        comp[4] = show;
        $(".comp5").css("background-image", "url('../card1/" + comp[4] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(61 <= show && show <= 72){
        compIndex = 6;
        compLast = comp[5];
        comp[5] = show;
        $(".comp6").css("background-image", "url('../card1/" + comp[5] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(73 <= show && show <= 84){
        compIndex = 6;
        compLast = comp[6];
        comp[6] = show;
        $(".comp7").css("background-image", "url('../card1/" + comp[6] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      }
      reset.push(compLast);
      compAlert();
      compWin();
      $("#player").text("Очередь первого игрока");
      $("#comp").text("Компьютер");
    }
  }
  function playerWin() {
    clone = p1.slice(0);
    clone.sort((a, b) => a - b);
    for(let i = 0; i < 7; i++){
      if(p1[i] === clone[i]){
        same1++;
      }
    }
    if(same1 === 7){
      finish = 0;
      $(location).attr('href', "win.html");
      youWin();
    }
    same1 = 0;
  }
  function compWin() {
    cloneComp = comp.slice(0);
    cloneComp.sort((a, b) => a - b);
    for(let i = 0; i < 7; i++){
      if(comp[i] === cloneComp[i]){
        compSame++;
      }
    }
    if(compSame === 7){
      finish = 0;
      youLose();
    }
    compSame = 0;
  }
  function deckPlayer1(num){
    reset.push(p1[num - 1]);
    p1[num - 1] = show;
    $(`.player${num}`).css("background-image", "url('../card1/" + p1[num - 1] + ".jpg')");
    $(".show").css("background-image", "none");
    chance = 1;
    orderPlayer = 0;
    playerWin();
    $("#comp").text("Очередь Компьютера");
    $("#player").text("Игрок 1");
    compShow();
    setTimeout(compMove, 2000);
  }
  $(".player1").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      deckPlayer1(1);
    }
  });
  $(".player2").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      deckPlayer1(2);
    }
  });
  $(".player3").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      deckPlayer1(3);
    }
  });
  $(".player4").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      deckPlayer1(4);
    }
  });
  $(".player5").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      deckPlayer1(5);
    }
  });
  $(".player6").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      deckPlayer1(6);
    }
  });
  $(".player7").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      deckPlayer1(7);
    }
  });
});
