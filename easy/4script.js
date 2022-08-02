$(document).ready(function(){
  let deck = [];
  let p1 = [];
  let p2 = [];
  let p3 = [];
  let p4 = [];
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
  //equality of clones with p
  let same1 = 0;
  let same2 = 0;
  let same3 = 0;
  let same4 = 0;
  //clones
  let clone1;
  let clone2;
  let clone3;
  let clone4;

  let finish = 0;//start
  function rando() {
    max = deck.length - 1;
    min = 0;
    index = Math.floor(Math.random()*(max-min+1)) + min;
  }
  $("button.btn-success").click(function(){
    deck = [];
    p1 = [];
    p2 = [];
    p3 = [];
    p4 = [];
    reset = [];
    for(let i = 1; i <= 84; i++){
      deck.push(i);
    }
    for(let i = 1; i <= 7; i++){
      rando();
      p1.push(deck[index]);
      deck.splice(index, 1);
    }
    p1.sort((a, b) => a - b);
    p1.reverse();
    for(let i = 1; i <= 7; i++){
      rando();
      p2.push(deck[index]);
      deck.splice(index, 1);
    }
    p2.sort((a, b) => a - b);
    p2.reverse();
    for(let i = 1; i <= 7; i++){
      rando();
      p3.push(deck[index]);
      deck.splice(index, 1);
    }
    p3.sort((a, b) => a - b);
    p3.reverse();
    for(let i = 1; i <= 7; i++){
      rando();
      p4.push(deck[index]);
      deck.splice(index, 1);
    }
    p4.sort((a, b) => a - b);
    p4.reverse();
    finish = 1;
    orderPlayer = 1;
    chance = 1;
    $(".show").css("background-image", "none");
    $("#1player").text("Очередь первого игрока");
    $("#2player").text("Игрок 2");
    $("#3player").text("Игрок 3");
    $("#4player").text("Игрок 4");
    for(let i = 1; i <= 7; i++){
      $(`.1player${i}`).css("background-image", "url('../card1/" + p1[i - 1] + ".jpg')");
    }
    for(let i = 1; i <= 7; i++){
      $(`.2player${i}`).css("background-image", "url('../card1/" + p2[i - 1] + ".jpg')");
    }
    for(let i = 1; i <= 7; i++){
      $(`.3player${i}`).css("background-image", "url('../card1/" + p3[i - 1] + ".jpg')");
    }
    for(let i = 1; i <= 7; i++){
      $(`.4player${i}`).css("background-image", "url('../card1/" + p4[i - 1] + ".jpg')");
    }
  });
  //chance is for deck
  //orderPlayer is for Players turn
  $("div.deck").click(function(){
    if(chance === 1 && finish === 1){
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
  function player1Win() {
    clone1 = p1.slice(0);
    clone1.sort((a, b) => a - b);
    for(let i = 0; i < 7; i++){
      if(p1[i] === clone1[i]){
        same1++;
      }
    }
    if(same1 === 7){
      finish = 0;
      alert("Выиграл 1 игрок");
    }
    same1 = 0;
  }
  function player2Win() {
    clone2 = p2.slice(0);
    clone2.sort((a, b) => a - b);
    for(let i = 0; i < 7; i++){
      if(p2[i] === clone2[i]){
        same2++;
      }
    }
    if(same2 === 7){
      finish = 0;
      alert("Выиграл 2 игрок");
    }
    same2 = 0;
  }
  function player3Win() {
    clone3 = p3.slice(0);
    clone3.sort((a, b) => a - b);
    for(let i = 0; i < 7; i++){
      if(p3[i] === clone3[i]){
        same3++;
      }
    }
    if(same3 === 7){
      finish = 0;
      alert("Выиграл 3 игрок");
    }
    same3 = 0;
  }
  function player4Win() {
    clone4 = p4.slice(0);
    clone4.sort((a, b) => a - b);
    for(let i = 0; i < 7; i++){
      if(p4[i] === clone4[i]){
        same4++;
      }
    }
    if(same4 === 7){
      finish = 0;
      alert("Выиграл 4 игрок");
    }
    same4 = 0;
  }
  function deckPlayer1(num){
    reset.push(p1[num - 1]);
    p1[num - 1] = show;
    $(`.1player${num}`).css("background-image", "url('../card1/" + p1[num - 1] + ".jpg')");
    $(".show").css("background-image", "none");
    chance = 1;
    orderPlayer = 2;
    player1Win();
    $("#2player").text("Очередь второго игрока");
    $("#1player").text("Игрок 1");
  }
  function deckPlayer2(num){
    reset.push(p2[num - 1]);
    p2[num - 1] = show;
    $(`.2player${num}`).css("background-image", "url('../card1/" + p2[num - 1] + ".jpg')");
    $(".show").css("background-image", "none");
    chance = 1;
    orderPlayer = 3;
    player2Win();
    $("#3player").text("Очередь третьего игрока");
    $("#2player").text("Игрок 2");
  }
  function deckPlayer3(num){
    reset.push(p3[num - 1]);
    p3[num - 1] = show;
    $(`.3player${num}`).css("background-image", "url('../card1/" + p3[num - 1] + ".jpg')");
    $(".show").css("background-image", "none");
    chance = 1;
    orderPlayer = 4;
    player3Win();
    $("#4player").text("Очередь четвертого игрока");
    $("#3player").text("Игрок 3");
  }
  function deckPlayer4(num){
    reset.push(p4[num - 1]);
    p4[num - 1] = show;
    $(`.4player${num}`).css("background-image", "url('../card1/" + p4[num - 1] + ".jpg')");
    $(".show").css("background-image", "none");
    chance = 1;
    orderPlayer = 1;
    player4Win();
    $("#1player").text("Очередь первого игрока");
    $("#4player").text("Игрок 4");
  }
  $(".1player1").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      deckPlayer1(1);
    }
  });
  $(".1player2").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      deckPlayer1(2);
    }
  });
  $(".1player3").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      deckPlayer1(3);
    }
  });
  $(".1player4").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      deckPlayer1(4);
    }
  });
  $(".1player5").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      deckPlayer1(5);
    }
  });
  $(".1player6").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      deckPlayer1(6);
    }
  });
  $(".1player7").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      deckPlayer1(7);
    }
  });
  $(".2player1").click(function(){
    if(chance === 0 && orderPlayer === 2 && finish === 1){
      deckPlayer2(1);
    }
  });
  $(".2player2").click(function(){
    if(chance === 0 && orderPlayer === 2 && finish === 1){
      deckPlayer2(2);
    }
  });
  $(".2player3").click(function(){
    if(chance === 0 && orderPlayer === 2 && finish === 1){
      deckPlayer2(3);
    }
  });
  $(".2player4").click(function(){
    if(chance === 0 && orderPlayer === 2 && finish === 1){
      deckPlayer2(4);
    }
  });
  $(".2player5").click(function(){
    if(chance === 0 && orderPlayer === 2 && finish === 1){
      deckPlayer2(5);
    }
  });
  $(".2player6").click(function(){
    if(chance === 0 && orderPlayer === 2 && finish === 1){
      deckPlayer2(6);
    }
  });
  $(".2player7").click(function(){
    if(chance === 0 && orderPlayer === 2 && finish === 1){
      deckPlayer2(7);
    }
  });
  $(".3player1").click(function(){
    if(chance === 0 && orderPlayer === 3 && finish === 1){
      deckPlayer3(1);
    }
  });
  $(".3player2").click(function(){
    if(chance === 0 && orderPlayer === 3 && finish === 1){
      deckPlayer3(2);
    }
  });
  $(".3player3").click(function(){
    if(chance === 0 && orderPlayer === 3 && finish === 1){
      deckPlayer3(3);
    }
  });
  $(".3player4").click(function(){
    if(chance === 0 && orderPlayer === 3 && finish === 1){
      deckPlayer3(4);
    }
  });
  $(".3player5").click(function(){
    if(chance === 0 && orderPlayer === 3 && finish === 1){
      deckPlayer3(5);
    }
  });
  $(".3player6").click(function(){
    if(chance === 0 && orderPlayer === 3 && finish === 1){
      deckPlayer3(6);
    }
  });
  $(".3player7").click(function(){
    if(chance === 0 && orderPlayer === 3 && finish === 1){
      deckPlayer3(7);
    }
  });
  $(".4player1").click(function(){
    if(chance === 0 && orderPlayer === 4 && finish === 1){
      deckPlayer4(1);
    }
  });
  $(".4player2").click(function(){
    if(chance === 0 && orderPlayer === 4 && finish === 1){
      deckPlayer4(2);
    }
  });
  $(".4player3").click(function(){
    if(chance === 0 && orderPlayer === 4 && finish === 1){
      deckPlayer4(3);
    }
  });
  $(".4player4").click(function(){
    if(chance === 0 && orderPlayer === 4 && finish === 1){
      deckPlayer4(4);
    }
  });
  $(".4player5").click(function(){
    if(chance === 0 && orderPlayer === 4 && finish === 1){
      deckPlayer4(5);
    }
  });
  $(".4player6").click(function(){
    if(chance === 0 && orderPlayer === 4 && finish === 1){
      deckPlayer4(6);
    }
  });
  $(".4player7").click(function(){
    if(chance === 0 && orderPlayer === 4 && finish === 1){
      deckPlayer4(7);
    }
  });
});
