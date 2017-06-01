function Ship(){
	this.x = 300; 
	this.y = 700
	this.xSpeed = 2.5; 					// Velocitat de moviment horitzontal
	this.health = 3;

	this.display = function(){
		noFill();
		stroke(20, 200, 20);
		beginShape();			// forma de la nau
			vertex(this.x	  , this.y); 	// Punt A
			vertex(this.x - 30, this.y);	// Punt B
			vertex(this.x - 30, this.y);	// Punt C
			vertex(this.x - 20, this.y);	// Punt D
			vertex(this.x - 10, this.y);	// Punt E
			vertex(this.x - 10, this.y);	// Punt F 
			vertex(this.x	  , this.y);	// Punt G
			vertex(this.x + 10, this.y);	// Punt H
			vertex(this.x + 10, this.y);	// Punt I
			vertex(this.x,      this.y);	// Punt J 
			vertex(this.x - 10, this.y);	// Punt k 
			vertex(this.x - 10, this.y);	// Punt L 
		endShape(CLOSE);
	}

	this.mover = function(){ 			// la funció keyIsDown llegeix si la tecla 
		if(keyIsDown(65)){				// dita esta pulsada fins que no es deixa anar
			if(this.x < 33){  			// 33 per a que no es fiqui dins
				this.x += 0;
			} else{
				this.x += -this.xSpeed;
			}
		}
		if(keyIsDown(68)){
			if(this.x > width - 5){ 	// 5 com a marge
				this.x += 0;
			} else {
				this.x += this.xSpeed;
			}
		}
	} 
}
