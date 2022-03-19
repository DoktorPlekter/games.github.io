 

function Stone(x, y) {


  this.x = x; 
  this.y = y; 

  this.display = function()
  {
  noStroke(); 
  fill (25,155,55);
  rectMode(CENTER);
  rect(x,y,25);
  }
  

  this.move = function() { 
    this.x = this.x + random(-1, 1); 
    this.y = this.y + random(-1, 1 );
  }

}

