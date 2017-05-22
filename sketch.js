var fps = 60;
var score = 0;
var ship;
var aliensArray = [];
var bulletArray = [];
var gameState = 'menu'

function setup() {
	createCanvas(600, 800);
	frameRate(fps);
	ship = new Ship();
	for(var i = 20; i < width - 20; i += 40){
		aliensArray.push(new Aliens(i, 20))
	}

}

function draw() {
  background(0);
  game();


}

//Funció game on es dtermina l'estat del joc
function game(){
  switch(gameState){
    case 'menu':
      Menu();
      break;
    case 'play':
      looper();
      break;
    case 'gameover':
      Gameover();
      break;
  }
}

// Funció per pintar el menú
function Menu(){
  this.title = 'SQUARES INVADERS';
  this.description_1 = 'Press A or D to move the ship to the right or to the left';                                                 
  this.description_2 = 'and press the SPACEBAR to shoot'
  this.startGame = 'Press ENTER to start the game.'

  // Titol Joc
  background(0);
  textSize(40);
  text(this.title, 100, 70);
  fill(50, 200, 50);

  // Descripció controls
  textSize(20);
  fill(50, 200, 75);
  text(this.description_1, 50, 200);
  text(this.description_2, 125, 225);

  // Start game
  text(this.startGame, 145, 300);
}
//funció per pintar la pantalla de gameover

// Funció loop principal
function looper(){
    //aliens.display();
  // Mostrar els aliens a pantalla i que facin lo d'anar baixant
  for(var i = 0; i < aliensArray.length; i++){
    if(aliensArray[0].x < 0 || aliensArray[aliensArray.length - 1].x > width - 35){
      aliensArray[i].y += 40;
      aliensArray[i].xSpeed *= -1;
    }
    aliensArray[i].display();
    aliensArray[i].update();
  }


  // Mostrar la nau i moure-la
  ship.display();
  ship.mover();

  // Dibuixar les bales, dispararles i fer que desapareguin al sortir de pantalla
  for(var i = 0 ; i < bulletArray.length; i++){
    bulletArray[i].display();
    bulletArray[i].shoot();
    if(bulletArray[i].posY < 0){        // quan la bala surt per dalt
      bulletArray.splice(i, 1);         // la treiem de l'array
    }
  }

  isColision(bulletArray, aliensArray);
  gameOver(aliensArray, ship); 
}


// Funció per detectar la colisió entre bala i alien
function isColision(bulletArray, aliensArray){
  for(var i = 0; i < bulletArray.length; i++){
    for(var j = 0; j < aliensArray.length; j++)
      if(bulletArray[i].posX < aliensArray[j].x + 35 && 
         bulletArray[i].posX + 5 > aliensArray[j].x  &&
         bulletArray[i].posY < aliensArray[j].y + 35 &&
         bulletArray[i].posY + 5 > aliensArray[j].y)
      {
        console.log("Colision");
        aliensArray.splice(j, 1);
        bulletArray.splice(i, 1);
        break;
      }
  }
}

// Funció que detecta quan un alien toca al ship o arriba al final de la pantalla i
// finalitza el joc.
function gameOver(aliensArray, ship){
  for(var i = 0; i < aliensArray.length; i++){
    if(ship.x < aliensArray[i].x + 35 && ship.x + 35 > aliensArray[i].x &&
      ship.y < aliensArray[i].y + 35 && ship.y + 35 > aliensArray[i].y){
      console.log("GameOver");
    }
  }
}


window.addEventListener("keydown", function(event){
  if(event.keyCode == 32){ // 32 == SPACEBAR
    var bullet = new Bullets(ship.x - 17, ship.y);
    bulletArray.push(bullet);
  } 

  if(event.keyCode == 13){ // 13 == ENTER
    gameState = 'play';
  }

});

