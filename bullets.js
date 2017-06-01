function Bullets(startX, startY){
	this.posX = startX; 
	this.posY = startY;
	this.vel = 2;

	this.display = function(){
		fill(255);
		rect(this.posX, this.posY, 5, 5);
	}

	this.shoot = function(){
		this.posX = startX;
		this.posY -= this.vel;
	}
}
