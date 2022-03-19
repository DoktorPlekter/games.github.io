 

function Grass(x, y) {


  this.x = x; 
  this.y = y; 

  this.display = function()
  {
  
  noStroke();
  fill (25,180,55);
  rectMode(CENTER);
  rect(x,y,24);
  }
  

  this.physupdate = function() { 
   
  }

}

