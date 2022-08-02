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
  //property
  let prop = 1;
  let proShow = 5;
  let pro1;
  let pro2;
  let proEquality = 0;
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
  let token1 = [0, 0, 0, 0, 0, 0, 0];
  let token2 = [0, 0, 0, 0, 0, 0, 0];
  let token3 = [0, 0, 0, 0, 0, 0, 0];
  let token4 = [0, 0, 0, 0, 0, 0, 0];
  let a;
  let target = 0;
  function tokenShow() {
    for(let i = 1; i <= 7; i++){
      if(token1[i - 1] === 0){
        $(`#1player${i}`).hide();
      } else {
        $(`#1player${i}`).show();
      }
    }
    for(let i = 1; i <= 7; i++){
      if(token2[i - 1] === 0){
        $(`#2player${i}`).hide();
      } else {
        $(`#2player${i}`).show();
      }
    }
    for(let i = 1; i <= 7; i++){
      if(token3[i - 1] === 0){
        $(`#3player${i}`).hide();
      } else {
        $(`#3player${i}`).show();
      }
    }
    for(let i = 1; i <= 7; i++){
      if(token4[i - 1] === 0){
        $(`#4player${i}`).hide();
      } else {
        $(`#4player${i}`).show();
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
    token3 = [0, 0, 0, 0, 0, 0, 0];
    token4 = [0, 0, 0, 0, 0, 0, 0];
    tokenShow();
    deck = [];
    p1 = [];
    p2 = [];
    p3 = [];
    p4 = [];
    property = [];
    reset = [];
    target = 0;
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
    prop = 1;
    rando();
    property.push(deck[index]);
    deck.splice(index, 1);
    propShow();
    $(".show").css("background-image", "none");
    $("#1player").text("Очередь первого игрока");
    $("#2player").text("Игрок 2");
    $("#3player").text("Игрок 3");
    $("#4player").text("Игрок 4");
    for(let i = 1; i <= 7; i++){
      $(`.1player${i}`).css("background-image", "url('card1/" + p1[i - 1] + ".jpg')");
    }
    for(let i = 1; i <= 7; i++){
      $(`.2player${i}`).css("background-image", "url('card1/" + p2[i - 1] + ".jpg')");
    }
    for(let i = 1; i <= 7; i++){
      $(`.3player${i}`).css("background-image", "url('card1/" + p3[i - 1] + ".jpg')");
    }
    for(let i = 1; i <= 7; i++){
      $(`.4player${i}`).css("background-image", "url('card1/" + p4[i - 1] + ".jpg')");
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
      $(`.1player${num + 1}`).css("background-image", "url('card1/" + p1[num] + ".jpg')");
      player1Win();
    }
    if(token2[num] === 0){
      if(p2[num] % 7 === 2 || p2[num] % 7 === 4 || p2[num] % 7 === 6){
        pro1 = 1;
      } else if(p2[num] % 7 === 0){
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
          reset.push(p2[num]);
          proEquality = 1;
          break;
        }
      }
      if(proEquality === 0){
        property.push(p2[num]);
      }
      proEquality = 0;
      rando();
      p2[num] = deck[index];
      $(`.2player${num + 1}`).css("background-image", "url('card1/" + p2[num] + ".jpg')");
      player2Win();
    }
    if(token3[num] === 0){
      if(p3[num] % 7 === 2 || p3[num] % 7 === 4 || p3[num] % 7 === 6){
        pro1 = 1;
      } else if(p3[num] % 7 === 0){
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
          reset.push(p3[num]);
          proEquality = 1;
          break;
        }
      }
      if(proEquality === 0){
        property.push(p3[num]);
      }
      proEquality = 0;
      rando();
      p3[num] = deck[index];
      $(`.3player${num + 1}`).css("background-image", "url('card1/" + p3[num] + ".jpg')");
      player3Win();
    }
    if(token4[num] === 0){
      if(p4[num] % 7 === 2 || p4[num] % 7 === 4 || p4[num] % 7 === 6){
        pro1 = 1;
      } else if(p4[num] % 7 === 0){
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
          reset.push(p4[num]);
          proEquality = 1;
          break;
        }
      }
      if(proEquality === 0){
        property.push(p4[num]);
      }
      proEquality = 0;
      rando();
      p4[num] = deck[index];
      $(`.4player${num + 1}`).css("background-image", "url('card1/" + p4[num] + ".jpg')");
      player4Win();
    }
    propShow();
    prop = 1;
    if(orderPlayer === 1){
      orderPlayer = 2;
      $("#2player").text("Очередь второго игрока");
      $("#1player").text("Игрок 1");
    } else if(orderPlayer === 2){
      orderPlayer = 3;
      $("#3player").text("Очередь третьего игрока");
      $("#2player").text("Игрок 2");
    } else if(orderPlayer === 3){
      orderPlayer = 4;
      $("#4player").text("Очередь четвертого игрока");
      $("#3player").text("Игрок 3");
    } else{
      orderPlayer = 1;
      $("#1player").text("Очередь первого игрока");
      $("#4player").text("Игрок 4");
    }
  }
  function protection1(i){
    token1[i - 1] = 1;
    tokenShow();
    orderPlayer = 2;
    $("#2player").text("Очередь второго игрока");
    $("#1player").text("Игрок 1");
    prop = 1;
  }
  function protection2(i){
    token2[i - 1] = 1;
    tokenShow();
    orderPlayer = 3;
    $("#3player").text("Очередь третьего игрока");
    $("#2player").text("Игрок 2");
    prop = 1;
  }
  function protection3(i){
    token3[i - 1] = 1;
    tokenShow();
    orderPlayer = 4;
    $("#4player").text("Очередь четвертого игрока");
    $("#3player").text("Игрок 3");
    prop = 1;
  }
  function protection4(i){
    token3[i - 1] = 1;
    tokenShow();
    orderPlayer = 1;
    $("#1player").text("Очередь первого игрока");
    $("#4player").text("Игрок 4");
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
        $(`.1player${num - 2}`).css("background-image", "url('card1/" + p1[num - 3] + ".jpg')");
        $(`.1player${num - 1}`).css("background-image", "url('card1/" + p1[num - 2] + ".jpg')");
        $(`.1player${num}`).css("background-image", "url('card1/" + p1[num - 1] + ".jpg')");
        orderPlayer = 2;
        $("#2player").text("Очередь второго игрока");
        $("#1player").text("Игрок 1");
        prop = 1;
        player1Win();
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
        $(`.1player${num}`).css("background-image", "url('card1/" + p1[num - 1] + ".jpg')");
        $(`.1player${num + 1}`).css("background-image", "url('card1/" + p1[num] + ".jpg')");
        $(`.1player${num + 2}`).css("background-image", "url('card1/" + p1[num + 1] + ".jpg')");
        orderPlayer = 2;
        $("#2player").text("Очередь второго игрока");
        $("#1player").text("Игрок 1");
        prop = 1;
        player1Win();
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
            $(`.1player${target}`).css("background-image", "url('card1/" + p1[target - 1] + ".jpg')");
            $(`.1player${num}`).css("background-image", "url('card1/" + p1[num - 1] + ".jpg')");
            orderPlayer = 2;
            $("#2player").text("Очередь второго игрока");
            $("#1player").text("Игрок 1");
            prop = 1;
            player1Win();
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
            $(`.1player${target}`).css("background-image", "url('card1/" + p1[target - 1] + ".jpg')");
            $(`.1player${num}`).css("background-image", "url('card1/" + p1[num - 1] + ".jpg')");
            orderPlayer = 2;
            $("#2player").text("Очередь второго игрока");
            $("#1player").text("Игрок 1");
            prop = 1;
            player1Win();
            target = 0;
          }
        }
      }
    }
  }
  function propertyPlayer2(num){
    if(token2[num - 1] === 0){
      if((proShow === 1 || proShow === 10 || proShow === 19 || proShow === 29 || proShow === 38
      || proShow === 47 || proShow === 57 || proShow === 66 || proShow === 75) && num >= 3){
        for(let i = 0; i < property.length; i++){
          if(proShow === property[i]){
            reset.push(property[i]);
            property.splice(i, 1);
          }
        }
        propShow();
        a = token2[num - 1];
        token2[num - 1] = token2[num - 2];
        token2[num - 2] = token2[num - 3];
        token2[num - 3] = a;
        tokenShow();
        a = p2[num - 1];
        p2[num - 1] = p2[num - 2];
        p2[num - 2] = p2[num - 3];
        p2[num - 3] = a;
        $(`.2player${num - 2}`).css("background-image", "url('card1/" + p2[num - 3] + ".jpg')");
        $(`.2player${num - 1}`).css("background-image", "url('card1/" + p2[num - 2] + ".jpg')");
        $(`.2player${num}`).css("background-image", "url('card1/" + p2[num - 1] + ".jpg')");
        orderPlayer = 3;
        $("#3player").text("Очередь третьего игрока");
        $("#2player").text("Игрок 2");
        prop = 1;
        player2Win();
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
        a = token2[num - 1];
        token2[num - 1] = token2[num];
        token2[num] = token2[num + 1];
        token2[num + 1] = a;
        tokenShow();
        a = p2[num - 1];
        p2[num - 1] = p2[num];
        p2[num] = p2[num + 1];
        p2[num + 1] = a;
        $(`.2player${num}`).css("background-image", "url('card1/" + p2[num - 1] + ".jpg')");
        $(`.2player${num + 1}`).css("background-image", "url('card1/" + p2[num] + ".jpg')");
        $(`.2player${num + 2}`).css("background-image", "url('card1/" + p2[num + 1] + ".jpg')");
        orderPlayer = 3;
        $("#3player").text("Очередь третьего игрока");
        $("#2player").text("Игрок 2");
        prop = 1;
        player2Win();
      }
      if(proShow === 5 || proShow === 15 || proShow === 24 || proShow === 33 || proShow === 43
      || proShow === 52 || proShow === 61 || proShow === 71 || proShow === 80){
        if(target === 0){
          target = num;
          a = p2[num - 1];
        } else if(target !== 0 && token2[num - 1] === 0){
          if(num === target - 1 || num === target + 1){
            p2[target - 1] = p2[num - 1];
            p2[num - 1] = a;
            for(let i = 0; i < property.length; i++){
              if(proShow === property[0]){
                reset.push(property[i]);
                property.splice(i, 1);
              }
            }
            propShow();
            $(`.2player${target}`).css("background-image", "url('card1/" + p2[target - 1] + ".jpg')");
            $(`.2player${num}`).css("background-image", "url('card1/" + p2[num - 1] + ".jpg')");
            orderPlayer = 3;
            $("#3player").text("Очередь третьего игрока");
            $("#2player").text("Игрок 2");
            prop = 1;
            player2Win();
            target = 0;
          }
        }
      }
      if(proShow === 8 || proShow === 17 || proShow === 26 || proShow === 36 || proShow === 45
      || proShow === 54 || proShow === 64 || proShow === 73 || proShow === 82){
        if(traget === 0){
          target = num;
          a = p2[num - 1];
        } else if(target !== 0 && token2[num - 1] === 0){
          if(num === target - 2 || num === target + 2){
            p2[target - 1] = p2[num - 1];
            p2[num - 1] = a;
            for(let i = 0; i < property.length; i++){
              if(proShow === property[0]){
                reset.push(property[i]);
                property.splice(i, 1);
              }
            }
            propShow();
            $(`.2player${target}`).css("background-image", "url('card1/" + p2[target - 1] + ".jpg')");
            $(`.2player${num}`).css("background-image", "url('card1/" + p2[num - 1] + ".jpg')");
            orderPlayer = 3;
            $("#3player").text("Очередь третьего игрока");
            $("#2player").text("Игрок 2");
            prop = 1;
            player2Win();
            target = 0;
          }
        }
      }
    }
  }
  function propertyPlayer3(num){
    if(token3[num - 1] === 0){
      if((proShow === 1 || proShow === 10 || proShow === 19 || proShow === 29 || proShow === 38
      || proShow === 47 || proShow === 57 || proShow === 66 || proShow === 75) && num >= 3){
        for(let i = 0; i < property.length; i++){
          if(proShow === property[i]){
            reset.push(property[i]);
            property.splice(i, 1);
          }
        }
        propShow();
        a = token3[num - 1];
        token3[num - 1] = token3[num - 2];
        token3[num - 2] = token3[num - 3];
        token3[num - 3] = a;
        tokenShow();
        a = p3[num - 1];
        p3[num - 1] = p3[num - 2];
        p3[num - 2] = p3[num - 3];
        p3[num - 3] = a;
        $(`.3player${num - 2}`).css("background-image", "url('card1/" + p3[num - 3] + ".jpg')");
        $(`.3player${num - 1}`).css("background-image", "url('card1/" + p3[num - 2] + ".jpg')");
        $(`.3player${num}`).css("background-image", "url('card1/" + p3[num - 1] + ".jpg')");
        orderPlayer = 4;
        $("#4player").text("Очередь четвертого игрока");
        $("#3player").text("Игрок 3");
        prop = 1;
        player3Win();
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
        a = token3[num - 1];
        token3[num - 1] = token3[num];
        token3[num] = token3[num + 1];
        token3[num + 1] = a;
        tokenShow();
        a = p3[num - 1];
        p3[num - 1] = p3[num];
        p3[num] = p3[num + 1];
        p3[num + 1] = a;
        $(`.3player${num}`).css("background-image", "url('card1/" + p3[num - 1] + ".jpg')");
        $(`.3player${num + 1}`).css("background-image", "url('card1/" + p3[num] + ".jpg')");
        $(`.3player${num + 2}`).css("background-image", "url('card1/" + p3[num + 1] + ".jpg')");
        orderPlayer = 4;
        $("#4player").text("Очередь четвертого игрока");
        $("#3player").text("Игрок 3");
        prop = 1;
        player3Win();
      }
      if(proShow === 5 || proShow === 15 || proShow === 24 || proShow === 33 || proShow === 43
      || proShow === 52 || proShow === 61 || proShow === 71 || proShow === 80){
        if(target === 0){
          target = num;
          a = p3[num - 1];
        } else if(target !== 0 && token3[num - 1] === 0){
          if(num === target - 1 || num === target + 1){
            p3[target - 1] = p3[num - 1];
            p3[num - 1] = a;
            for(let i = 0; i < property.length; i++){
              if(proShow === property[0]){
                reset.push(property[i]);
                property.splice(i, 1);
              }
            }
            propShow();
            $(`.3player${target}`).css("background-image", "url('card1/" + p3[target - 1] + ".jpg')");
            $(`.3player${num}`).css("background-image", "url('card1/" + p3[num - 1] + ".jpg')");
            orderPlayer = 4;
            $("#4player").text("Очередь четвертого игрока");
            $("#3player").text("Игрок 3");
            prop = 1;
            player3Win();
            target = 0;
          }
        }
      }
      if(proShow === 8 || proShow === 17 || proShow === 26 || proShow === 36 || proShow === 45
      || proShow === 54 || proShow === 64 || proShow === 73 || proShow === 82){
        if(traget === 0){
          target = num;
          a = p3[num - 1];
        } else if(target !== 0 && token3[num - 1] === 0){
          if(num === target - 2 || num === target + 2){
            p3[target - 1] = p3[num - 1];
            p3[num - 1] = a;
            for(let i = 0; i < property.length; i++){
              if(proShow === property[0]){
                reset.push(property[i]);
                property.splice(i, 1);
              }
            }
            propShow();
            $(`.3player${target}`).css("background-image", "url('card1/" + p3[target - 1] + ".jpg')");
            $(`.3player${num}`).css("background-image", "url('card1/" + p3[num - 1] + ".jpg')");
            orderPlayer = 4;
            $("#4player").text("Очередь четвертого игрока");
            $("#3player").text("Игрок 3");
            prop = 1;
            player3Win();
            target = 0;
          }
        }
      }
    }
  }
  function propertyPlayer4(num){
    if(token4[num - 1] === 0){
      if((proShow === 1 || proShow === 10 || proShow === 19 || proShow === 29 || proShow === 38
      || proShow === 47 || proShow === 57 || proShow === 66 || proShow === 75) && num >= 3){
        for(let i = 0; i < property.length; i++){
          if(proShow === property[i]){
            reset.push(property[i]);
            property.splice(i, 1);
          }
        }
        propShow();
        a = token4[num - 1];
        token4[num - 1] = token4[num - 2];
        token4[num - 2] = token4[num - 3];
        token4[num - 3] = a;
        tokenShow();
        a = p4[num - 1];
        p4[num - 1] = p4[num - 2];
        p4[num - 2] = p4[num - 3];
        p4[num - 3] = a;
        $(`.4player${num - 2}`).css("background-image", "url('card1/" + p4[num - 3] + ".jpg')");
        $(`.4player${num - 1}`).css("background-image", "url('card1/" + p4[num - 2] + ".jpg')");
        $(`.4player${num}`).css("background-image", "url('card1/" + p4[num - 1] + ".jpg')");
        orderPlayer = 1;
        $("#1player").text("Очередь первого игрока");
        $("#4player").text("Игрок 4");
        prop = 1;
        player4Win();
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
        a = token4[num - 1];
        token4[num - 1] = token4[num];
        token4[num] = token4[num + 1];
        token4[num + 1] = a;
        tokenShow();
        a = p4[num - 1];
        p4[num - 1] = p4[num];
        p4[num] = p4[num + 1];
        p4[num + 1] = a;
        $(`.4player${num}`).css("background-image", "url('card1/" + p4[num - 1] + ".jpg')");
        $(`.4player${num + 1}`).css("background-image", "url('card1/" + p4[num] + ".jpg')");
        $(`.4player${num + 2}`).css("background-image", "url('card1/" + p4[num + 1] + ".jpg')");
        orderPlayer = 1;
        $("#1player").text("Очередь первого игрока");
        $("#4player").text("Игрок 4");
        prop = 1;
        player4Win();
      }
      if(proShow === 5 || proShow === 15 || proShow === 24 || proShow === 33 || proShow === 43
      || proShow === 52 || proShow === 61 || proShow === 71 || proShow === 80){
        if(target === 0){
          target = num;
          a = p4[num - 1];
        } else if(target !== 0 && token4[num - 1] === 0){
          if(num === target - 1 || num === target + 1){
            p4[target - 1] = p4[num - 1];
            p4[num - 1] = a;
            for(let i = 0; i < property.length; i++){
              if(proShow === property[0]){
                reset.push(property[i]);
                property.splice(i, 1);
              }
            }
            propShow();
            $(`.4player${target}`).css("background-image", "url('card1/" + p4[target - 1] + ".jpg')");
            $(`.4player${num}`).css("background-image", "url('card1/" + p4[num - 1] + ".jpg')");
            orderPlayer = 1;
            $("#1player").text("Очередь первого игрока");
            $("#4player").text("Игрок 4");
            prop = 1;
            player4Win();
            target = 0;
          }
        }
      }
      if(proShow === 8 || proShow === 17 || proShow === 26 || proShow === 36 || proShow === 45
      || proShow === 54 || proShow === 64 || proShow === 73 || proShow === 82){
        if(traget === 0){
          target = num;
          a = p4[num - 1];
        } else if(target !== 0 && token4[num - 1] === 0){
          if(num === target - 2 || num === target + 2){
            p4[target - 1] = p4[num - 1];
            p4[num - 1] = a;
            for(let i = 0; i < property.length; i++){
              if(proShow === property[0]){
                reset.push(property[i]);
                property.splice(i, 1);
              }
            }
            propShow();
            $(`.4player${target}`).css("background-image", "url('card1/" + p4[target - 1] + ".jpg')");
            $(`.4player${num}`).css("background-image", "url('card1/" + p4[num - 1] + ".jpg')");
            orderPlayer = 1;
            $("#1player").text("Очередь первого игрока");
            $("#4player").text("Игрок 4");
            prop = 1;
            player4Win();
            target = 0;
          }
        }
      }
    }
  }
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
      $(".show").css("background-image", "url('card1/" + show + ".jpg')");
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
    $(`.1player${num}`).css("background-image", "url('card1/" + p1[num - 1] + ".jpg')");
    $(".show").css("background-image", "none");
    chance = 1;
    orderPlayer = 2;
    player1Win();
    $("#2player").text("Очередь второго игрока");
    $("#1player").text("Игрок 1");
  }
  function deckPlayer2(num){
    if(p2[num - 1] % 7 === 2 || p2[num - 1] % 7 === 4 || p2[num - 1] % 7 === 6){
      pro1 = 1;
    } else if(p2[num - 1] % 7 === 0){
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
        reset.push(p2[num - 1]);
        proEquality = 1;
        break;
      }
    }
    if(proEquality === 0){
      property.push(p2[num - 1]);
    }
    proEquality = 0;
    propShow();
    token2[num - 1] = 0;
    tokenShow();
    p2[num - 1] = show;
    $(`.2player${num}`).css("background-image", "url('card1/" + p2[num - 1] + ".jpg')");
    $(".show").css("background-image", "none");
    chance = 1;
    orderPlayer = 3;
    player2Win();
    $("#3player").text("Очередь третьего игрока");
    $("#2player").text("Игрок 2");
  }
  function deckPlayer3(num){
    if(p3[num - 1] % 7 === 2 || p3[num - 1] % 7 === 4 || p3[num - 1] % 7 === 6){
      pro1 = 1;
    } else if(p3[num - 1] % 7 === 0){
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
        reset.push(p3[num - 1]);
        proEquality = 1;
        break;
      }
    }
    if(proEquality === 0){
      property.push(p3[num - 1]);
    }
    proEquality = 0;
    propShow();
    token3[num - 1] = 0;
    tokenShow();
    p3[num - 1] = show;
    $(`.3player${num}`).css("background-image", "url('card1/" + p3[num - 1] + ".jpg')");
    $(".show").css("background-image", "none");
    chance = 1;
    orderPlayer = 4;
    player3Win();
    $("#4player").text("Очередь четвертого игрока");
    $("#3player").text("Игрок 3");
  }
  function deckPlayer4(num){
    if(p4[num - 1] % 7 === 2 || p4[num - 1] % 7 === 4 || p4[num - 1] % 7 === 6){
      pro1 = 1;
    } else if(p4[num - 1] % 7 === 0){
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
        reset.push(p4[num - 1]);
        proEquality = 1;
        break;
      }
    }
    if(proEquality === 0){
      property.push(p4[num - 1]);
    }
    proEquality = 0;
    propShow();
    token4[num - 1] = 0;
    tokenShow();
    p4[num - 1] = show;
    $(`.4player${num}`).css("background-image", "url('card1/" + p4[num - 1] + ".jpg')");
    $(".show").css("background-image", "none");
    chance = 1;
    orderPlayer = 1;
    player4Win();
    $("#1player").text("Очередь первого игрока");
    $("#4player").text("Игрок 4");
  }
  $(".1player1").click(function(){
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
    }
  });
  $(".1player2").click(function(){
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
    }
  });
  $(".1player3").click(function(){
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
    }
  });
  $(".1player4").click(function(){
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
    }
  });
  $(".1player5").click(function(){
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
    }
  });
  $(".1player6").click(function(){
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
    }
  });
  $(".1player7").click(function(){
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
    }
  });
  $(".2player1").click(function(){
    if(chance === 0 && prop === 1 && orderPlayer === 2 && finish === 1){
      deckPlayer2(1);
    }
    if(chance === 1 && prop === 0 && orderPlayer === 2 && finish === 1){
      if(proShow % 7 === 0){
        protection2(1);
        reset.push(property[target]);
        property.splice(target, 1);
        propShow();
      }
      propertyPlayer2(1);
    }
  });
  $(".2player2").click(function(){
    if(chance === 0 && prop === 1 && orderPlayer === 2 && finish === 1){
      deckPlayer2(2);
    }
    if(chance === 1 && prop === 0 && orderPlayer === 2 && finish === 1){
      if(proShow % 7 === 0){
        protection2(2);
        reset.push(property[target]);
        property.splice(target, 1);
        propShow();
      }
      propertyPlayer2(2);
    }
  });
  $(".2player3").click(function(){
    if(chance === 0 && prop === 1 && orderPlayer === 2 && finish === 1){
      deckPlayer2(3);
    }
    if(chance === 1 && prop === 0 && orderPlayer === 2 && finish === 1){
      if(proShow % 7 === 0){
        protection2(3);
        reset.push(property[target]);
        property.splice(target, 1);
        propShow();
      }
      propertyPlayer2(3);
    }
  });
  $(".2player4").click(function(){
    if(chance === 0 && prop === 1 && orderPlayer === 2 && finish === 1){
      deckPlayer2(4);
    }
    if(chance === 1 && prop === 0 && orderPlayer === 2 && finish === 1){
      if(proShow % 7 === 0){
        protection2(4);
        reset.push(property[target]);
        property.splice(target, 1);
        propShow();
      }
      propertyPlayer2(4);
    }
  });
  $(".2player5").click(function(){
    if(chance === 0 && prop === 1 && orderPlayer === 2 && finish === 1){
      deckPlayer2(5);
    }
    if(chance === 1 && prop === 0 && orderPlayer === 2 && finish === 1){
      if(proShow % 7 === 0){
        protection2(5);
        reset.push(property[target]);
        property.splice(target, 1);
        propShow();
      }
      propertyPlayer2(5);
    }
  });
  $(".2player6").click(function(){
    if(chance === 0 && prop === 1 && orderPlayer === 2 && finish === 1){
      deckPlayer2(6);
    }
    if(chance === 1 && prop === 0 && orderPlayer === 2 && finish === 1){
      if(proShow % 7 === 0){
        protection2(6);
        reset.push(property[target]);
        property.splice(target, 1);
        propShow();
      }
      propertyPlayer2(6);
    }
  });
  $(".2player7").click(function(){
    if(chance === 0 && prop === 1 && orderPlayer === 2 && finish === 1){
      deckPlayer2(7);
    }
    if(chance === 1 && prop === 0 && orderPlayer === 2 && finish === 1){
      if(proShow % 7 === 0){
        protection2(7);
        reset.push(property[target]);
        property.splice(target, 1);
        propShow();
      }
      propertyPlayer2(7);
    }
  });
  $(".3player1").click(function(){
    if(chance === 0 && prop === 1 && orderPlayer === 3 && finish === 1){
      deckPlayer3(1);
    }
    if(chance === 1 && prop === 0 && orderPlayer === 3 && finish === 1){
      if(proShow % 7 === 0){
        protection3(1);
        reset.push(property[target]);
        property.splice(target, 1);
        propShow();
      }
      propertyPlayer3(1);
    }
  });
  $(".3player2").click(function(){
    if(chance === 0 && prop === 1 && orderPlayer === 3 && finish === 1){
      deckPlayer3(2);
    }
    if(chance === 1 && prop === 0 && orderPlayer === 3 && finish === 1){
      if(proShow % 7 === 0){
        protection3(2);
        reset.push(property[target]);
        property.splice(target, 1);
        propShow();
      }
      propertyPlayer3(2);
    }
  });
  $(".3player3").click(function(){
    if(chance === 0 && prop === 1 && orderPlayer === 3 && finish === 1){
      deckPlayer3(3);
    }
    if(chance === 1 && prop === 0 && orderPlayer === 3 && finish === 1){
      if(proShow % 7 === 0){
        protection3(3);
        reset.push(property[target]);
        property.splice(target, 1);
        propShow();
      }
      propertyPlayer3(3);
    }
  });
  $(".3player4").click(function(){
    if(chance === 0 && prop === 1 && orderPlayer === 3 && finish === 1){
      deckPlayer3(4);
    }
    if(chance === 1 && prop === 0 && orderPlayer === 3 && finish === 1){
      if(proShow % 7 === 0){
        protection3(4);
        reset.push(property[target]);
        property.splice(target, 1);
        propShow();
      }
      propertyPlayer3(4);
    }
  });
  $(".3player5").click(function(){
    if(chance === 0 && prop === 1 && orderPlayer === 3 && finish === 1){
      deckPlayer3(5);
    }
    if(chance === 1 && prop === 0 && orderPlayer === 3 && finish === 1){
      if(proShow % 7 === 0){
        protection3(5);
        reset.push(property[target]);
        property.splice(target, 1);
        propShow();
      }
      propertyPlayer3(5);
    }
  });
  $(".3player6").click(function(){
    if(chance === 0 && prop === 1 && orderPlayer === 3 && finish === 1){
      deckPlayer3(6);
    }
    if(chance === 1 && prop === 0 && orderPlayer === 3 && finish === 1){
      if(proShow % 7 === 0){
        protection3(6);
        reset.push(property[target]);
        property.splice(target, 1);
        propShow();
      }
      propertyPlayer3(6);
    }
  });
  $(".3player7").click(function(){
    if(chance === 0 && prop === 1 && orderPlayer === 3 && finish === 1){
      deckPlayer3(7);
    }
    if(chance === 1 && prop === 0 && orderPlayer === 3 && finish === 1){
      if(proShow % 7 === 0){
        protection3(7);
        reset.push(property[target]);
        property.splice(target, 1);
        propShow();
      }
      propertyPlayer3(7);
    }
  });
  $(".4player1").click(function(){
    if(chance === 0 && prop === 1 && orderPlayer === 4 && finish === 1){
      deckPlayer4(1);
    }
    if(chance === 1 && prop === 0 && orderPlayer === 4 && finish === 1){
      if(proShow % 7 === 0){
        protection4(1);
        reset.push(property[target]);
        property.splice(target, 1);
        propShow();
      }
      propertyPlayer4(1);
    }
  });
  $(".4player2").click(function(){
    if(chance === 0 && prop === 1 && orderPlayer === 4 && finish === 1){
      deckPlayer4(2);
    }
    if(chance === 1 && prop === 0 && orderPlayer === 4 && finish === 1){
      if(proShow % 7 === 0){
        protection4(2);
        reset.push(property[target]);
        property.splice(target, 1);
        propShow();
      }
      propertyPlayer4(2);
    }
  });
  $(".4player3").click(function(){
    if(chance === 0 && prop === 1 && orderPlayer === 4 && finish === 1){
      deckPlayer4(3);
    }
    if(chance === 1 && prop === 0 && orderPlayer === 4 && finish === 1){
      if(proShow % 7 === 0){
        protection4(3);
        reset.push(property[target]);
        property.splice(target, 1);
        propShow();
      }
      propertyPlayer4(3);
    }
  });
  $(".4player4").click(function(){
    if(chance === 0 && prop === 1 && orderPlayer === 4 && finish === 1){
      deckPlayer4(4);
    }
    if(chance === 1 && prop === 0 && orderPlayer === 4 && finish === 1){
      if(proShow % 7 === 0){
        protection4(4);
        reset.push(property[target]);
        property.splice(target, 1);
        propShow();
      }
      propertyPlayer4(4);
    }
  });
  $(".4player5").click(function(){
    if(chance === 0 && prop === 1 && orderPlayer === 4 && finish === 1){
      deckPlayer4(5);
    }
    if(chance === 1 && prop === 0 && orderPlayer === 4 && finish === 1){
      if(proShow % 7 === 0){
        protection4(5);
        reset.push(property[target]);
        property.splice(target, 1);
        propShow();
      }
      propertyPlayer4(5);
    }
  });
  $(".4player6").click(function(){
    if(chance === 0 && prop === 1 && orderPlayer === 4 && finish === 1){
      deckPlayer4(6);
    }
    if(chance === 1 && prop === 0 && orderPlayer === 4 && finish === 1){
      if(proShow % 7 === 0){
        protection4(6);
        reset.push(property[target]);
        property.splice(target, 1);
        propShow();
      }
      propertyPlayer4(6);
    }
  });
  $(".4player7").click(function(){
    if(chance === 0 && prop === 1 && orderPlayer === 4 && finish === 1){
      deckPlayer4(7);
    }
    if(chance === 1 && prop === 0 && orderPlayer === 4 && finish === 1){
      if(proShow % 7 === 0){
        protection4(7);
        reset.push(property[target]);
        property.splice(target, 1);
        propShow();
      }
      propertyPlayer4(7);
    }
  });
});
