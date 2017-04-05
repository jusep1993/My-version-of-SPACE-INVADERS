var fps = 60;
var ship;
var aliensArray = [];
var bulletArray = [];

function setup() {
	createCanvas(600, 400);
	frameRate(fps);
	ship = new Ship();
	for(var i = 20; i < width - 20; i += 40){
		aliensArray.push(new Aliens(i, 20))
	}

}

function draw() {
  background(0);

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
        
      }
  }
}


window.addEventListener("keydown", function(event){
    if(event.keyCode == 32){
      var bullet = new Bullets(ship.x - 17, ship.y);
      bulletArray.push(bullet);
  } 
});

