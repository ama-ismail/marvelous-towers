$(document).ready(function(){
  let deck = [];
  for(let i = 1; i <= 84; i++){
    deck.push(i);
  }
  let comp = [];
  let player = [];
  let reset = [];
  let max = deck.length - 1;
  let min = 0;
  let show;
  let chance = 1;
  let orderPlayer = 1;
  let index;
  let compIndex;
  let compLast;
  let same1 = 0;
  let compSame = 0;
  let clone = player.slice(0);
  let cloneComp = comp.slice(0);
  let finish = 1;
  $("button.btn-success").click(function(){
    for(let i = 1; i <= 7; i++){
      max = deck.length - 1;
      min = 0;
      index = Math.floor(Math.random()*(max-min+1)) + min;
      comp.push(deck[index]);
      reset.push(deck.splice(index, 1));
      comp.sort((a, b) => a - b);
      comp.reverse();
    }
    for(let i = 1; i <= 7; i++){
      max = deck.length - 1;
      min = 0;
      index = Math.floor(Math.random()*(max-min+1)) + min;
      player.push(deck[index]);
      reset.push(deck.splice(index, 1));
      player.sort((a, b) => a - b);
      player.reverse();
    }
    $("h1.player1").text(player[0]);
    $("h1.player2").text(player[1]);
    $("h1.player3").text(player[2]);
    $("h1.player4").text(player[3]);
    $("h1.player5").text(player[4]);
    $("h1.player6").text(player[5]);
    $("h1.player7").text(player[6]);
    $("h1.comp1").text(comp[0]);
    $("h1.comp2").text(comp[1]);
    $("h1.comp3").text(comp[2]);
    $("h1.comp4").text(comp[3]);
    $("h1.comp5").text(comp[4]);
    $("h1.comp6").text(comp[5]);
    $("h1.comp7").text(comp[6]);
  });
  $("div.deck").click(function(){
    if(chance === 1 && orderPlayer === 1){
      max = deck.length - 1;
      min = 0;
      index = Math.floor(Math.random()*(max-min+1)) + min;
      show = deck[index];
      reset.push(deck.splice(index, 1));
      $("h1.show").text(show);
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
  $("h1.player1").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      player[0] = show;
      $("h1.player1").text(player[0]);
      $("h1.show").text("");
      chance = 1;
      orderPlayer = 0;
    }
    clone = player.slice(0);
    clone.sort((a, b) => a - b);
    cloneComp = comp.slice(0);
    cloneComp.sort((a, b) => a - b);
    for(let i = 0; i < 7; i++){
      if(player[i] === clone[i]){
        same1++;
      }
      if(comp[i] === cloneComp[i]){
        compSame++;
      }
    }
    if(same1 === 7){
      finish = 0;
      setTimeout(youWin, 1000);
    }
    if(compSame === 7){
      finish = 0;
      setTimeout(youLose, 1000);
    }
    same1 = 0;
    compSame = 0;
    if(orderPlayer === 0  && finish === 1){
      max = deck.length - 1;
      min = 0;
      index = Math.floor(Math.random()*(max-min+1)) + min;
      show = deck[index];
      reset.push(deck.splice(index, 1));
      $("h1.show").text(show);
      if(1 <= show && show <= 12){
        compIndex = 1;
        compLast = comp[0];
        comp[0] = show;
        $("h1.comp1").text(comp[0]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(13 <= show && show <= 24){
        compIndex = 2;
        compLast = comp[1];
        comp[1] = show;
        $("h1.comp2").text(comp[1]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(25 <= show && show <= 36){
        compIndex = 3;
        compLast = comp[2];
        comp[2] = show;
        $("h1.comp3").text(comp[2]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(37 <= show && show <= 48){
        compIndex = 4;
        compLast = comp[3];
        comp[3] = show;
        $("h1.comp4").text(comp[3]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(49 <= show && show <= 60){
        compIndex = 5;
        compLast = comp[4];
        comp[4] = show;
        $("h1.comp5").text(comp[4]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(61 <= show && show <= 72){
        compIndex = 6;
        compLast = comp[5];
        comp[5] = show;
        $("h1.comp6").text(comp[5]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(73 <= show && show <= 84){
        compIndex = 6;
        compLast = comp[6];
        comp[6] = show;
        $("h1.comp7").text(comp[6]);
        $("h1.show").text("");
        orderPlayer = 1;
      }
    }
    setTimeout(compAlert, 1000);
    clone = player.slice(0);
    clone.sort((a, b) => a - b);
    cloneComp = comp.slice(0);
    cloneComp.sort((a, b) => a - b);
    for(let i = 0; i < 7; i++){
      if(player[i] === clone[i]){
        same1++;
      }
      if(comp[i] === cloneComp[i]){
        compSame++;
      }
    }
    if(same1 === 7){
      finish = 0;
      setTimeout(youWin, 1000);
    }
    if(compSame === 7){
      finish = 0;
      setTimeout(youLose, 1000);
    }
    same1 = 0;
    compSame = 0;
  });
  $("h1.player2").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      player[1] = show;
      $("h1.player2").text(player[1]);
      $("h1.show").text("");
      chance = 1;
      orderPlayer = 0;
    }
    clone = player.slice(0);
    clone.sort((a, b) => a - b);
    cloneComp = comp.slice(0);
    cloneComp.sort((a, b) => a - b);
    for(let i = 0; i < 7; i++){
      if(player[i] === clone[i]){
        same1++;
      }
      if(comp[i] === cloneComp[i]){
        compSame++;
      }
    }
    if(same1 === 7){
      finish = 0;
      setTimeout(youWin, 1000);
    }
    if(compSame === 7){
      finish = 0;
      setTimeout(youLose, 1000);
    }
    same1 = 0;
    compSame = 0;
    if(orderPlayer === 0 && finish === 1){
      max = deck.length - 1;
      min = 0;
      index = Math.floor(Math.random()*(max-min+1)) + min;
      show = deck[index];
      reset.push(deck.splice(index, 1));
      $("h1.show").text(show);
      if(1 <= show && show <= 12){
        compIndex = 1;
        compLast = comp[0];
        comp[0] = show;
        $("h1.comp1").text(comp[0]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(13 <= show && show <= 24){
        compIndex = 2;
        compLast = comp[1];
        comp[1] = show;
        $("h1.comp2").text(comp[1]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(25 <= show && show <= 36){
        compIndex = 3;
        compLast = comp[2];
        comp[2] = show;
        $("h1.comp3").text(comp[2]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(37 <= show && show <= 48){
        compIndex = 4;
        compLast = comp[3];
        comp[3] = show;
        $("h1.comp4").text(comp[3]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(49 <= show && show <= 60){
        compIndex = 5;
        compLast = comp[4];
        comp[4] = show;
        $("h1.comp5").text(comp[4]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(61 <= show && show <= 72){
        compIndex = 6;
        compLast = comp[5];
        comp[5] = show;
        $("h1.comp6").text(comp[5]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(73 <= show && show <= 84){
        compIndex = 6;
        compLast = comp[6];
        comp[6] = show;
        $("h1.comp7").text(comp[6]);
        $("h1.show").text("");
        orderPlayer = 1;
      }
    }
    setTimeout(compAlert, 1000);
    clone = player.slice(0);
    clone.sort((a, b) => a - b);
    cloneComp = comp.slice(0);
    cloneComp.sort((a, b) => a - b);
    for(let i = 0; i < 7; i++){
      if(player[i] === clone[i]){
        same1++;
      }
      if(comp[i] === cloneComp[i]){
        compSame++;
      }
    }
    if(same1 === 7){
      finish = 0;
      setTimeout(youWin, 1000);
    }
    if(compSame === 7){
      finish = 0;
      setTimeout(youLose, 1000);
    }
    same1 = 0;
    compSame = 0;
  });
  $("h1.player3").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      player[2] = show;
      $("h1.player3").text(player[2]);
      $("h1.show").text("");
      chance = 1;
      orderPlayer = 0;
    }
    clone = player.slice(0);
    clone.sort((a, b) => a - b);
    cloneComp = comp.slice(0);
    cloneComp.sort((a, b) => a - b);
    for(let i = 0; i < 7; i++){
      if(player[i] === clone[i]){
        same1++;
      }
      if(comp[i] === cloneComp[i]){
        compSame++;
      }
    }
    if(same1 === 7){
      finish = 0;
      setTimeout(youWin, 1000);
    }
    if(compSame === 7){
      finish = 0;
      setTimeout(youLose, 1000);
    }
    same1 = 0;
    compSame = 0;
    if(orderPlayer === 0 && finish === 1){
      max = deck.length - 1;
      min = 0;
      index = Math.floor(Math.random()*(max-min+1)) + min;
      show = deck[index];
      reset.push(deck.splice(index, 1));
      $("h1.show").text(show);
      if(1 <= show && show <= 12){
        compIndex = 1;
        compLast = comp[0];
        comp[0] = show;
        $("h1.comp1").text(comp[0]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(13 <= show && show <= 24){
        compIndex = 2;
        compLast = comp[1];
        comp[1] = show;
        $("h1.comp2").text(comp[1]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(25 <= show && show <= 36){
        compIndex = 3;
        compLast = comp[2];
        comp[2] = show;
        $("h1.comp3").text(comp[2]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(37 <= show && show <= 48){
        compIndex = 4;
        compLast = comp[3];
        comp[3] = show;
        $("h1.comp4").text(comp[3]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(49 <= show && show <= 60){
        compIndex = 5;
        compLast = comp[4];
        comp[4] = show;
        $("h1.comp5").text(comp[4]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(61 <= show && show <= 72){
        compIndex = 6;
        compLast = comp[5];
        comp[5] = show;
        $("h1.comp6").text(comp[5]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(73 <= show && show <= 84){
        compIndex = 6;
        compLast = comp[6];
        comp[6] = show;
        $("h1.comp7").text(comp[6]);
        $("h1.show").text("");
        orderPlayer = 1;
      }
    }
    setTimeout(compAlert, 1000);
    clone = player.slice(0);
    clone.sort((a, b) => a - b);
    cloneComp = comp.slice(0);
    cloneComp.sort((a, b) => a - b);
    for(let i = 0; i < 7; i++){
      if(player[i] === clone[i]){
        same1++;
      }
      if(comp[i] === cloneComp[i]){
        compSame++;
      }
    }
    if(same1 === 7){
      finish = 0;
      setTimeout(youWin, 1000);
    }
    if(compSame === 7){
      finish = 0;
      setTimeout(youLose, 1000);
    }
    same1 = 0;
    compSame = 0;
  });
  $("h1.player4").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      player[3] = show;
      $("h1.player4").text(player[3]);
      $("h1.show").text("");
      chance = 1;
      orderPlayer = 0;
    }
    clone = player.slice(0);
    clone.sort((a, b) => a - b);
    cloneComp = comp.slice(0);
    cloneComp.sort((a, b) => a - b);
    for(let i = 0; i < 7; i++){
      if(player[i] === clone[i]){
        same1++;
      }
      if(comp[i] === cloneComp[i]){
        compSame++;
      }
    }
    if(same1 === 7){
      finish = 0;
      setTimeout(youWin, 1000);
    }
    if(compSame === 7){
      finish = 0;
      setTimeout(youLose, 1000);
    }
    same1 = 0;
    compSame = 0;
    if(orderPlayer === 0 && finish === 1){
      max = deck.length - 1;
      min = 0;
      index = Math.floor(Math.random()*(max-min+1)) + min;
      show = deck[index];
      reset.push(deck.splice(index, 1));
      $("h1.show").text(show);
      if(1 <= show && show <= 12){
        compIndex = 1;
        compLast = comp[0];
        comp[0] = show;
        $("h1.comp1").text(comp[0]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(13 <= show && show <= 24){
        compIndex = 2;
        compLast = comp[1];
        comp[1] = show;
        $("h1.comp2").text(comp[1]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(25 <= show && show <= 36){
        compIndex = 3;
        compLast = comp[2];
        comp[2] = show;
        $("h1.comp3").text(comp[2]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(37 <= show && show <= 48){
        compIndex = 4;
        compLast = comp[3];
        comp[3] = show;
        $("h1.comp4").text(comp[3]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(49 <= show && show <= 60){
        compIndex = 5;
        compLast = comp[4];
        comp[4] = show;
        $("h1.comp5").text(comp[4]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(61 <= show && show <= 72){
        compIndex = 6;
        compLast = comp[5];
        comp[5] = show;
        $("h1.comp6").text(comp[5]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(73 <= show && show <= 84){
        compIndex = 6;
        compLast = comp[6];
        comp[6] = show;
        $("h1.comp7").text(comp[6]);
        $("h1.show").text("");
        orderPlayer = 1;
      }
    }
    setTimeout(compAlert, 1000);
    clone = player.slice(0);
    clone.sort((a, b) => a - b);
    cloneComp = comp.slice(0);
    cloneComp.sort((a, b) => a - b);
    for(let i = 0; i < 7; i++){
      if(player[i] === clone[i]){
        same1++;
      }
      if(comp[i] === cloneComp[i]){
        compSame++;
      }
    }
    if(same1 === 7){
      finish = 0;
      setTimeout(youWin, 1000);
    }
    if(compSame === 7){
      finish = 0;
      setTimeout(youLose, 1000);
    }
    same1 = 0;
    compSame = 0;
  });
  $("h1.player5").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      player[4] = show;
      $("h1.player5").text(player[4]);
      $("h1.show").text("");
      chance = 1;
      orderPlayer = 0;
    }
    clone = player.slice(0);
    clone.sort((a, b) => a - b);
    cloneComp = comp.slice(0);
    cloneComp.sort((a, b) => a - b);
    for(let i = 0; i < 7; i++){
      if(player[i] === clone[i]){
        same1++;
      }
      if(comp[i] === cloneComp[i]){
        compSame++;
      }
    }
    if(same1 === 7){
      finish = 0;
      setTimeout(youWin, 1000);
    }
    if(compSame === 7){
      finish = 0;
      setTimeout(youLose, 1000);
    }
    same1 = 0;
    compSame = 0;
    if(orderPlayer === 0 && finish === 1){
      max = deck.length - 1;
      min = 0;
      index = Math.floor(Math.random()*(max-min+1)) + min;
      show = deck[index];
      reset.push(deck.splice(index, 1));
      $("h1.show").text(show);
      if(1 <= show && show <= 12){
        compIndex = 1;
        compLast = comp[0];
        comp[0] = show;
        $("h1.comp1").text(comp[0]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(13 <= show && show <= 24){
        compIndex = 2;
        compLast = comp[1];
        comp[1] = show;
        $("h1.comp2").text(comp[1]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(25 <= show && show <= 36){
        compIndex = 3;
        compLast = comp[2];
        comp[2] = show;
        $("h1.comp3").text(comp[2]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(37 <= show && show <= 48){
        compIndex = 4;
        compLast = comp[3];
        comp[3] = show;
        $("h1.comp4").text(comp[3]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(49 <= show && show <= 60){
        compIndex = 5;
        compLast = comp[4];
        comp[4] = show;
        $("h1.comp5").text(comp[4]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(61 <= show && show <= 72){
        compIndex = 6;
        compLast = comp[5];
        comp[5] = show;
        $("h1.comp6").text(comp[5]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(73 <= show && show <= 84){
        compIndex = 6;
        compLast = comp[6];
        comp[6] = show;
        $("h1.comp7").text(comp[6]);
        $("h1.show").text("");
        orderPlayer = 1;
      }
    }
    setTimeout(compAlert, 1000);
    clone = player.slice(0);
    clone.sort((a, b) => a - b);
    cloneComp = comp.slice(0);
    cloneComp.sort((a, b) => a - b);
    for(let i = 0; i < 7; i++){
      if(player[i] === clone[i]){
        same1++;
      }
      if(comp[i] === cloneComp[i]){
        compSame++;
      }
    }
    if(same1 === 7){
      finish = 0;
      setTimeout(youWin, 1000);
    }
    if(compSame === 7){
      finish = 0;
      setTimeout(youLose, 1000);
    }
    same1 = 0;
    compSame = 0;
  });
  $("h1.player6").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      player[5] = show;
      $("h1.player6").text(player[5]);
      $("h1.show").text("");
      chance = 1;
      orderPlayer = 0;
    }
    clone = player.slice(0);
    clone.sort((a, b) => a - b);
    cloneComp = comp.slice(0);
    cloneComp.sort((a, b) => a - b);
    for(let i = 0; i < 7; i++){
      if(player[i] === clone[i]){
        same1++;
      }
      if(comp[i] === cloneComp[i]){
        compSame++;
      }
    }
    if(same1 === 7){
      finish = 0;
      setTimeout(youWin, 1000);
    }
    if(compSame === 7){
      finish = 0;
      setTimeout(youLose, 1000);
    }
    same1 = 0;
    compSame = 0;
    if(orderPlayer === 0 && finish === 1){
      max = deck.length - 1;
      min = 0;
      index = Math.floor(Math.random()*(max-min+1)) + min;
      show = deck[index];
      reset.push(deck.splice(index, 1));
      $("h1.show").text(show);
      if(1 <= show && show <= 12){
        compIndex = 1;
        compLast = comp[0];
        comp[0] = show;
        $("h1.comp1").text(comp[0]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(13 <= show && show <= 24){
        compIndex = 2;
        compLast = comp[1];
        comp[1] = show;
        $("h1.comp2").text(comp[1]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(25 <= show && show <= 36){
        compIndex = 3;
        compLast = comp[2];
        comp[2] = show;
        $("h1.comp3").text(comp[2]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(37 <= show && show <= 48){
        compIndex = 4;
        compLast = comp[3];
        comp[3] = show;
        $("h1.comp4").text(comp[3]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(49 <= show && show <= 60){
        compIndex = 5;
        compLast = comp[4];
        comp[4] = show;
        $("h1.comp5").text(comp[4]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(61 <= show && show <= 72){
        compIndex = 6;
        compLast = comp[5];
        comp[5] = show;
        $("h1.comp6").text(comp[5]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(73 <= show && show <= 84){
        compIndex = 6;
        compLast = comp[6];
        comp[6] = show;
        $("h1.comp7").text(comp[6]);
        $("h1.show").text("");
        orderPlayer = 1;
      }
    }
    setTimeout(compAlert, 1000);
    clone = player.slice(0);
    clone.sort((a, b) => a - b);
    cloneComp = comp.slice(0);
    cloneComp.sort((a, b) => a - b);
    for(let i = 0; i < 7; i++){
      if(player[i] === clone[i]){
        same1++;
      }
      if(comp[i] === cloneComp[i]){
        compSame++;
      }
    }
    if(same1 === 7){
      finish = 0;
      setTimeout(youWin, 1000);
    }
    if(compSame === 7){
      finish = 0;
      setTimeout(youLose, 1000);
    }
    same1 = 0;
    compSame = 0;
  });
  $("h1.player7").click(function(){
    if(chance === 0 && orderPlayer === 1 && finish === 1){
      player[6] = show;
      $("h1.player7").text(player[6]);
      $("h1.show").text("");
      chance = 1;
      orderPlayer = 0;
    }
    clone = player.slice(0);
    clone.sort((a, b) => a - b);
    cloneComp = comp.slice(0);
    cloneComp.sort((a, b) => a - b);
    for(let i = 0; i < 7; i++){
      if(player[i] === clone[i]){
        same1++;
      }
      if(comp[i] === cloneComp[i]){
        compSame++;
      }
    }
    if(same1 === 7){
      finish = 0;
      setTimeout(youWin, 1000);
    }
    if(compSame === 7){
      finish = 0;
      setTimeout(youLose, 1000);
    }
    same1 = 0;
    compSame = 0;
    if(orderPlayer === 0 && finish === 1){
      max = deck.length - 1;
      min = 0;
      index = Math.floor(Math.random()*(max-min+1)) + min;
      show = deck[index];
      reset.push(deck.splice(index, 1));
      $("h1.show").text(show);
      if(1 <= show && show <= 12){
        compIndex = 1;
        compLast = comp[0];
        comp[0] = show;
        $("h1.comp1").text(comp[0]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(13 <= show && show <= 24){
        compIndex = 2;
        compLast = comp[1];
        comp[1] = show;
        $("h1.comp2").text(comp[1]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(25 <= show && show <= 36){
        compIndex = 3;
        compLast = comp[2];
        comp[2] = show;
        $("h1.comp3").text(comp[2]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(37 <= show && show <= 48){
        compIndex = 4;
        compLast = comp[3];
        comp[3] = show;
        $("h1.comp4").text(comp[3]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(49 <= show && show <= 60){
        compIndex = 5;
        compLast = comp[4];
        comp[4] = show;
        $("h1.comp5").text(comp[4]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(61 <= show && show <= 72){
        compIndex = 6;
        compLast = comp[5];
        comp[5] = show;
        $("h1.comp6").text(comp[5]);
        $("h1.show").text("");
        orderPlayer = 1;
      } else if(73 <= show && show <= 84){
        compIndex = 6;
        compLast = comp[6];
        comp[6] = show;
        $("h1.comp7").text(comp[6]);
        $("h1.show").text("");
        orderPlayer = 1;
      }
    }
    setTimeout(compAlert, 1000);
    clone = player.slice(0);
    clone.sort((a, b) => a - b);
    cloneComp = comp.slice(0);
    cloneComp.sort((a, b) => a - b);
    for(let i = 0; i < 7; i++){
      if(player[i] === clone[i]){
        same1++;
      }
      if(comp[i] === cloneComp[i]){
        compSame++;
      }
    }
    if(same1 === 7){
      finish = 0;
      setTimeout(youWin, 1000);
    }
    if(compSame === 7){
      finish = 0;
      setTimeout(youLose, 1000);
    }
    same1 = 0;
    compSame = 0;
  });
});
