 

function Grass(x, y) {


  this.x = x; 
  this.y = y; 

  this.display = function()
  {
  
  stroke(0,0,0,55)
  fill (25,180,55);
  rectMode(CENTER);
  rect(x+12,y+12,24);
  }
  

  this.physupdate = function() { 
   
  }

}

