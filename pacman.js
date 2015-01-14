$(document).ready(function(){

  var pacman = {
              x : 5,
              y : 5
              };

  var pacman2 = {
              x: 9,
              y: 7
              }

  var ghost = {
              x : 7,
              y : 4
              };

  var world_root = [
                2,2,2,2,2,2,2,2,2,2,2,2,2,2,
                2,1,1,1,2,1,1,1,1,1,1,1,1,2,
                2,1,2,1,4,1,2,2,2,4,2,2,1,2,
                2,1,2,1,2,1,1,1,1,1,2,1,1,2,
                2,1,1,1,2,1,1,1,1,1,2,1,2,2,
                2,1,2,1,1,1,1,1,1,1,1,1,2,2,
                2,1,2,2,2,1,1,1,2,2,2,1,1,2,
                2,1,2,1,1,1,2,1,1,1,1,1,1,2,
                2,1,4,1,2,1,2,2,1,2,1,2,1,2,
                2,1,2,1,2,1,2,1,1,1,1,2,4,2,
                2,1,2,1,1,1,1,1,2,2,1,1,1,2,
                2,2,2,2,2,2,2,2,2,2,2,2,2,2,
              ];

  var world = [
                2,2,2,2,2,2,2,2,2,2,2,2,2,2,
                2,1,1,1,2,1,1,1,1,1,1,1,1,2,
                2,1,2,1,4,1,2,2,2,4,2,2,1,2,
                2,1,2,1,2,1,1,1,1,1,2,1,1,2,
                2,1,1,1,2,1,1,1,1,1,2,1,2,2,
                2,1,2,1,1,1,1,1,1,1,1,1,2,2,
                2,1,2,2,2,1,1,1,2,2,2,1,1,2,
                2,1,2,1,1,1,2,1,1,1,1,1,1,2,
                2,1,4,1,2,1,2,2,1,2,1,2,1,2,
                2,1,2,1,2,1,2,1,1,1,1,2,4,2,
                2,1,2,1,1,1,1,1,2,2,1,1,1,2,
                2,2,2,2,2,2,2,2,2,2,2,2,2,2,
              ];

  var dead = false;

  function drawWorld(arr){
    var x = document.getElementById("world").innerHTML = "";

    for(var i=0; i < arr.length; i++)
    {
      if(arr[i] == 1)
      {
        document.getElementById("world").innerHTML = document.getElementById("world").innerHTML + "<div class='coin';''></div>";
      } 
      else if(arr[i] == 2) 
      {
        document.getElementById("world").innerHTML = document.getElementById("world").innerHTML + "<div class='world-block';''></div>";
      }
      else if(arr[i] == 3){
        document.getElementById("world").innerHTML = document.getElementById("world").innerHTML + "<div class='empty';''></div>";
      }
      else if(arr[i] == 4){
        document.getElementById("world").innerHTML = document.getElementById("world").innerHTML + "<div class='cherry';''></div>";
      }
    }
  }

  function showPacman(){
    document.getElementById("world").innerHTML =  document.getElementById("world").innerHTML + "<div id='pacman' style='top:" + pacman.y * 30 + "px; left:" + pacman.x * 30 + "px;'></div>";
  }

  function diePacman(){
    if(pacman.x === ghost.x && pacman.y === ghost.y){
      alert("Game over");
      pacman.x = 5;
      pacman.y = 5;
      dead = true;
    }
  }

  function showGhost(){
    document.getElementById("world").innerHTML =  document.getElementById("world").innerHTML + "<div class='ghost' style='top:" + ghost.y * 30 + "px; left:" + ghost.x * 30 + "px;'></div>";
  }

  function showScore(){
    document.getElementById("")
  }

  function isCoin(location){
    if(world[location] == 1){
      document.getElementById("score").innerHTML = parseInt(document.getElementById("score").innerHTML) + 100;
    }
    if(world[location] == 4){
      document.getElementById("score").innerHTML = parseInt(document.getElementById("score").innerHTML) + 300;
    }
  }

  function rotate(keyCode){
    var pac = $("#pacman");
    pac.removeClass("up down left");
    if(keyCode == 38)
    {
      pac.addClass("up");
    }
    else if(keyCode == 40)
    {
      pac.addClass("down");
    }
    else if (keyCode == 37)
    {
      pac.addClass("left");
    }
  }


  document.onkeydown = function(e){
    var pac = $("#pacman");
    // up
    if(e.keyCode == 38 && world[pacman.x+(pacman.y*14)-14] !== 2) {
      pacman.y -= 1;
    }
    // down
    else if (e.keyCode == 40 && world[pacman.x+(pacman.y*14)+14] !== 2)
    {
      pacman.y += 1;
    }
    // left
    else if(e.keyCode == 37 && world[pacman.x+(pacman.y*14)-1] !== 2)
    { 
      pacman.x -= 1;
    }
    // right
    else if(e.keyCode == 39 && world[pacman.x+(pacman.y*14)+1] !== 2)
    {
      pacman.x += 1;
    }
    diePacman();
    isCoin(pacman.x+(pacman.y*14));
    world[pacman.x+(pacman.y*14)] = 3;
    if(dead === true){
      drawWorld(world_root);
      dead = false;
      world = world_root;
    }
    else {
      drawWorld(world);
    }
    showPacman();
    showGhost();
    rotate(e.keyCode);
  }

  drawWorld(world);
  showPacman();
  showGhost();
});


