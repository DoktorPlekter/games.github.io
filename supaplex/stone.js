 

function Stone(x, y) {


  this.x = x; 
  this.y = y; 

  this.display = function()
  {
  
  noStroke(); 
  fill (75);
  circle(x,y,25);
  }
  

  this.place = function() { 

  }

}

