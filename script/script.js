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
  //property
  let prop = 1;
  let proShow = 5;
  let pro1;
  let pro2;
  let proEquality = 0;
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
  let token1 = [0, 0, 0, 0, 0, 0, 0];
  let token2 = [0, 0, 0, 0, 0, 0, 0];
  let a;
  let target = 0;
  function tokenShow() {
    for(let i = 1; i <= 7; i++){
      if(token1[i - 1] === 0){
        $(`#player${i}`).hide();
      } else {
        $(`#player${i}`).show();
      }
    }
  }
  tokenShow();
  function rando() {
    max = deck.length - 1;
    min = 0;
    index = Math.floor(Math.random()*(max-min+1)) + min;
  }
  $("button.btn-success").click(function(){
    token1 = [0, 0, 0, 0, 0, 0, 0];
    token2 = [0, 0, 0, 0, 0, 0, 0];
    tokenShow();
    deck = [];
    comp = [];
    p1 = [];
    property = [];
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
    prop = 1;
    rando();
    property.push(deck[index]);
    deck.splice(index, 1);
    propShow();
    $(".show").css("background-image", "none");
    $("#player").text("Очередь первого игрока");
    $("#comp").text("Компьютер");
    //$("h1.comp7").text(comp[6]);
    for(let i = 1; i <= 7; i++){
      $(`.player${i}`).css("background-image", "url('card1/" + p1[i - 1] + ".jpg')");
    }
    for(let i = 1; i <= 7; i++){
      $(`.comp${i}`).css("background-image", "url('card1/" + comp[i - 1] + ".jpg')");
    }
  });
  function propShow() {
    for(let i = 0; i < property.length; i++){
      if(i === 0){
        $(".property1").show();
        $(".property1").css("background-image", "url('card1/" + property[i] + ".jpg')");
      } else if(i === 1){
        $(".property2").show();
        $(".property2").css("background-image", "url('card1/" + property[i] + ".jpg')");
      } else if(i === 2){
        $(".property3").show();
        $(".property3").css("background-image", "url('card1/" + property[i] + ".jpg')");
      }
    }
    for(let i = property.length; i < 3; i++){
      if(i === 0){
        $(".property1").hide();
      } else if(i === 1){
        $(".property2").hide();
      } else if(i === 2){
        $(".property3").hide();
      }
    }
  }
  function destroy(num) {
    if(token1[num] === 0){
      if(p1[num] % 7 === 2 || p1[num] % 7 === 4 || p1[num] % 7 === 6){
        pro1 = 1;
      } else if(p1[num] % 7 === 0){
        pro1 = 2;
      } else{
        pro1 = 3;
      }
      for(let i = 0; i < property.length; i++){
        if(property[i] % 7 === 2 || property[i] % 7 === 4 || property[i] % 7 === 6){
          pro2 = 1;
        } else if(property[i] % 7 === 0){
          pro2 = 2;
        } else{
          pro2 = 3;
        }
        if(pro1 === pro2){
          reset.push(property[i]);
          property.splice(i, 1);
          reset.push(p1[num]);
          proEquality = 1;
          break;
        }
      }
      if(proEquality === 0){
        property.push(p1[num]);
      }
      proEquality = 0;
      rando();
      p1[num] = deck[index];
      $(`.player${num + 1}`).css("background-image", "url('card1/" + p1[num] + ".jpg')");
      playerWin();
    }
    if(token2[num] === 0){
      if(comp[num] % 7 === 2 || comp[num] % 7 === 4 || comp[num] % 7 === 6){
        pro1 = 1;
      } else if(comp[num] % 7 === 0){
        pro1 = 2;
      } else{
        pro1 = 3;
      }
      for(let i = 0; i < property.length; i++){
        if(property[i] % 7 === 2 || property[i] % 7 === 4 || property[i] % 7 === 6){
          pro2 = 1;
        } else if(property[i] % 7 === 0){
          pro2 = 2;
        } else{
          pro2 = 3;
        }
        if(pro1 === pro2){
          reset.push(property[i]);
          property.splice(i, 1);
          reset.push(comp[num]);
          proEquality = 1;
          break;
        }
      }
      if(proEquality === 0){
        property.push(comp[num]);
      }
      proEquality = 0;
      rando();
      comp[num] = deck[index];
      $(`.comp${num + 1}`).css("background-image", "url('card1/" + comp[num] + ".jpg')");
      compWin();
    }
    propShow();
    prop = 1;
    if(orderPlayer === 1){
      orderPlayer = 0;
      $("#comp").text("Очередь Компьютера");
      $("#player").text("Игрок 1");
      compShow();
      setTimeout(compMove, 2000);
    } else{
      orderPlayer = 1;
      $("#player").text("Очередь первого игрока");
      $("#comp").text("Компьютер");
    }
  }
  function protection1(i){
    token1[i - 1] = 1;
    tokenShow();
    orderPlayer = 0;
    $("#comp").text("Очередь Компьютера");
    $("#player").text("Игрок 1");
    prop = 1;
  }
  function propertyFunc(num){
    if(chance === 1 && finish === 1 && prop === 1){
      prop = 0;
      proShow = property[num - 1];
      if(proShow % 7 === 2){
        reset.push(property[num - 1]);
        property.splice(num - 1, 1);
        destroy(0);
      } else if(proShow % 7 === 4){
        reset.push(property[num - 1]);
        property.splice(num - 1, 1);
        destroy(3);
      } else if(proShow % 7 === 6){
        reset.push(property[num - 1]);
        property.splice(num - 1, 1);
        destroy(6);
      } else if(proShow % 7 === 0){
        target = num - 1;
      } else if(proShow === 1 || proShow === 10 || proShow === 19 || proShow === 29
      || proShow === 38 || proShow === 47 || proShow === 57 || proShow === 66 || proShow === 75){
        target = num - 1;
      } else if(proShow === 3 || proShow === 12 || proShow === 22 || proShow === 31
      || proShow === 40 || proShow === 50 || proShow === 59 || proShow === 68 || proShow === 78){
        target = num - 1;
      }
    }
  }
  $(".property1").click(function(){
    if(property.length >= 1){
      propertyFunc(1);
    }
  });
  $(".property2").click(function(){
    if(property.length >= 2){
      propertyFunc(2);
    }
  });
  $(".property3").click(function(){
    if(property.length >= 3){
      propertyFunc(3);
    }
  });
  function propertyPlayer1(num){
    if(token1[num - 1] === 0){
      if((proShow === 1 || proShow === 10 || proShow === 19 || proShow === 29 || proShow === 38
      || proShow === 47 || proShow === 57 || proShow === 66 || proShow === 75) && num >= 3){
        for(let i = 0; i < property.length; i++){
          if(proShow === property[i]){
            reset.push(property[i]);
            property.splice(i, 1);
          }
        }
        propShow();
        a = token1[num - 1];
        token1[num - 1] = token1[num - 2];
        token1[num - 2] = token1[num - 3];
        token1[num - 3] = a;
        tokenShow();
        a = p1[num - 1];
        p1[num - 1] = p1[num - 2];
        p1[num - 2] = p1[num - 3];
        p1[num - 3] = a;
        $(`.player${num - 2}`).css("background-image", "url('card1/" + p1[num - 3] + ".jpg')");
        $(`.player${num - 1}`).css("background-image", "url('card1/" + p1[num - 2] + ".jpg')");
        $(`.player${num}`).css("background-image", "url('card1/" + p1[num - 1] + ".jpg')");
        orderPlayer = 0;
        $("#comp").text("Очередь Компьютера");
        $("#player").text("Игрок 1");
        prop = 1;
        playerWin();
      }
      if((proShow === 3 || proShow === 12 || proShow === 22 || proShow === 31 || proShow === 40
      || proShow === 50 || proShow === 59 || proShow === 68 || proShow === 78) && num <= 5){
        for(let i = 0; i < property.length; i++){
          if(proShow === property[0]){
            reset.push(property[i]);
            property.splice(i, 1);
          }
        }
        propShow();
        a = token1[num - 1];
        token1[num - 1] = token1[num];
        token1[num] = token1[num + 1];
        token1[num + 1] = a;
        tokenShow();
        a = p1[num - 1];
        p1[num - 1] = p1[num];
        p1[num] = p1[num + 1];
        p1[num + 1] = a;
        $(`.player${num}`).css("background-image", "url('card1/" + p1[num - 1] + ".jpg')");
        $(`.player${num + 1}`).css("background-image", "url('card1/" + p1[num] + ".jpg')");
        $(`.player${num + 2}`).css("background-image", "url('card1/" + p1[num + 1] + ".jpg')");
        orderPlayer = 0;
        $("#comp").text("Очередь Компьютера");
        $("#player").text("Игрок 1");
        prop = 1;
        playerWin();
      }
      if(proShow === 5 || proShow === 15 || proShow === 24 || proShow === 33 || proShow === 43
      || proShow === 52 || proShow === 61 || proShow === 71 || proShow === 80){
        if(target === 0){
          target = num;
          a = p1[num - 1];
        } else if(target !== 0 && token1[num - 1] === 0){
          if(num === target - 1 || num === target + 1){
            p1[target - 1] = p1[num - 1];
            p1[num - 1] = a;
            for(let i = 0; i < property.length; i++){
              if(proShow === property[0]){
                reset.push(property[i]);
                property.splice(i, 1);
              }
            }
            propShow();
            $(`.player${target}`).css("background-image", "url('card1/" + p1[target - 1] + ".jpg')");
            $(`.player${num}`).css("background-image", "url('card1/" + p1[num - 1] + ".jpg')");
            orderPlayer = 0;
            $("#comp").text("Очередь Компьютера");
            $("#player").text("Игрок 1");
            prop = 1;
            playerWin();
            target = 0;
          }
        }
      }
      if(proShow === 8 || proShow === 17 || proShow === 26 || proShow === 36 || proShow === 45
      || proShow === 54 || proShow === 64 || proShow === 73 || proShow === 82){
        if(target === 0){
          target = num;
          a = p1[num - 1];
        } else if(target !== 0 && token1[num - 1] === 0){
          if(num === target - 2 || num === target + 2){
            p1[target - 1] = p1[num - 1];
            p1[num - 1] = a;
            for(let i = 0; i < property.length; i++){
              if(proShow === property[0]){
                reset.push(property[i]);
                property.splice(i, 1);
              }
            }
            propShow();
            $(`.player${target}`).css("background-image", "url('card1/" + p1[target - 1] + ".jpg')");
            $(`.player${num}`).css("background-image", "url('card1/" + p1[num - 1] + ".jpg')");
            orderPlayer = 0;
            $("#comp").text("Очередь Компьютера");
            $("#player").text("Игрок 1");
            prop = 1;
            playerWin();
            target = 0;
          }
        }
      }
    }
  }
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
      $(".show").css("background-image", "url('card1/" + show + ".jpg')");
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
    $(".show").css("background-image", "url('card1/" + show + ".jpg')");
  }
  function compMove() {
    if(orderPlayer === 0  && finish === 1){
      if(1 <= show && show <= 12){
        compIndex = 1;
        compLast = comp[0];
        comp[0] = show;
        $(".comp1").css("background-image", "url('card1/" + comp[0] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(13 <= show && show <= 24){
        compIndex = 2;
        compLast = comp[1];
        comp[1] = show;
        $(".comp2").css("background-image", "url('card1/" + comp[1] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(25 <= show && show <= 36){
        compIndex = 3;
        compLast = comp[2];
        comp[2] = show;
        $(".comp3").css("background-image", "url('card1/" + comp[2] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(37 <= show && show <= 48){
        compIndex = 4;
        compLast = comp[3];
        comp[3] = show;
        $(".comp4").css("background-image", "url('card1/" + comp[3] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(49 <= show && show <= 60){
        compIndex = 5;
        compLast = comp[4];
        comp[4] = show;
        $(".comp5").css("background-image", "url('card1/" + comp[4] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(61 <= show && show <= 72){
        compIndex = 6;
        compLast = comp[5];
        comp[5] = show;
        $(".comp6").css("background-image", "url('card1/" + comp[5] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      } else if(73 <= show && show <= 84){
        compIndex = 6;
        compLast = comp[6];
        comp[6] = show;
        $(".comp7").css("background-image", "url('card1/" + comp[6] + ".jpg')");
        $(".show").css("background-image", "none");
        orderPlayer = 1;
      }
      if(compLast % 7 === 2 || compLast % 7 === 4 || compLast % 7 === 6){
        pro1 = 1;
      } else if(compLast % 7 === 0){
        pro1 = 2;
      } else{
        pro1 = 3;
      }
      for(let i = 0; i < property.length; i++){
        if(property[i] % 7 === 2 || property[i] % 7 === 4 || property[i] % 7 === 6){
          pro2 = 1;
        } else if(property[i] % 7 === 0){
          pro2 = 2;
        } else{
          pro2 = 3;
        }
        if(pro1 === pro2){
          reset.push(property[i]);
          property.splice(i, 1);
          reset.push(compLast);
          proEquality = 1;
          break;
        }
      }
      if(proEquality === 0){
        property.push(compLast);
      }
      proEquality = 0;
      propShow();
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
    if(p1[num - 1] % 7 === 2 || p1[num - 1] % 7 === 4 || p1[num - 1] % 7 === 6){
      pro1 = 1;
    } else if(p1[num - 1] % 7 === 0){
      pro1 = 2;
    } else{
      pro1 = 3;
    }
    for(let i = 0; i < property.length; i++){
      if(property[i] % 7 === 2 || property[i] % 7 === 4 || property[i] % 7 === 6){
        pro2 = 1;
      } else if(property[i] % 7 === 0){
        pro2 = 2;
      } else{
        pro2 = 3;
      }
      if(pro1 === pro2){
        reset.push(property[i]);
        property.splice(i, 1);
        reset.push(p1[num - 1]);
        proEquality = 1;
        break;
      }
    }
    if(proEquality === 0){
      property.push(p1[num - 1]);
    }
    proEquality = 0;
    propShow();
    token1[num - 1] = 0;
    tokenShow();
    p1[num - 1] = show;
    $(`.player${num}`).css("background-image", "url('card1/" + p1[num - 1] + ".jpg')");
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
    if(chance === 0 && prop === 1 && orderPlayer === 1 && finish === 1){
      deckPlayer1(1);
    }
    if(chance === 1 && prop === 0 && orderPlayer === 1 && finish === 1){
      if(proShow % 7 === 0){
        protection1(1);
        reset.push(property[target]);
        property.splice(target, 1);
        propShow();
      }
      propertyPlayer1(1);
      compShow();
      setTimeout(compMove, 2000);
    }
  });
  $(".player2").click(function(){
    if(chance === 0 && prop === 1 && orderPlayer === 1 && finish === 1){
      deckPlayer1(2);
    }
    if(chance === 1 && prop === 0 && orderPlayer === 1 && finish === 1){
      if(proShow % 7 === 0){
        protection1(2);
        reset.push(property[target]);
        property.splice(target, 1);
        propShow();
      }
      propertyPlayer1(2);
      compShow();
      setTimeout(compMove, 2000);
    }
  });
  $(".player3").click(function(){
    if(chance === 0 && prop === 1 && orderPlayer === 1 && finish === 1){
      deckPlayer1(3);
    }
    if(chance === 1 && prop === 0 && orderPlayer === 1 && finish === 1){
      if(proShow % 7 === 0){
        protection1(3);
        reset.push(property[target]);
        property.splice(target, 1);
        propShow();
      }
      propertyPlayer1(3);
      compShow();
      setTimeout(compMove, 2000);
    }
  });
  $(".player4").click(function(){
    if(chance === 0 && prop === 1 && orderPlayer === 1 && finish === 1){
      deckPlayer1(4);
    }
    if(chance === 1 && prop === 0 && orderPlayer === 1 && finish === 1){
      if(proShow % 7 === 0){
        protection1(4);
        reset.push(property[target]);
        property.splice(target, 1);
        propShow();
      }
      propertyPlayer1(4);
      compShow();
      setTimeout(compMove, 2000);
    }
  });
  $(".player5").click(function(){
    if(chance === 0 && prop === 1 && orderPlayer === 1 && finish === 1){
      deckPlayer1(5);
    }
    if(chance === 1 && prop === 0 && orderPlayer === 1 && finish === 1){
      if(proShow % 7 === 0){
        protection1(5);
        reset.push(property[target]);
        property.splice(target, 1);
        propShow();
      }
      propertyPlayer1(5);
      compShow();
      setTimeout(compMove, 2000);
    }
  });
  $(".player6").click(function(){
    if(chance === 0 && prop === 1 && orderPlayer === 1 && finish === 1){
      deckPlayer1(6);
    }
    if(chance === 1 && prop === 0 && orderPlayer === 1 && finish === 1){
      if(proShow % 7 === 0){
        protection1(6);
        reset.push(property[target]);
        property.splice(target, 1);
        propShow();
      }
      propertyPlayer1(6);
      compShow();
      setTimeout(compMove, 2000);
    }
  });
  $(".player7").click(function(){
    if(chance === 0 && prop === 1 && orderPlayer === 1 && finish === 1){
      deckPlayer1(7);
    }
    if(chance === 1 && prop === 0 && orderPlayer === 1 && finish === 1){
      if(proShow % 7 === 0){
        protection1(7);
        reset.push(property[target]);
        property.splice(target, 1);
        propShow();
      }
      propertyPlayer1(7);
      compShow();
      setTimeout(compMove, 2000);
    }
  });
});
