function Aliens(x, y){
	this.x = x;
	this.y = y;
	this.xSpeed = 0.2;

	
	this.display = function(){
		noFill();
		stroke(20, 200, 20);
		rect(this.x, this.y, 35, 35);
	}

	this.update = function(){
		this.x += this.xSpeed;
	}







}