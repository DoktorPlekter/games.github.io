 

function Stone(x, y) {


  this.x = x; 
  this.y = y; 

  this.display = function()
  {
  
    noStroke();
    fill (55);
    circle(x,y,25);
  }
  

  this.physupdate = function() { 
    if (y < canvasY){
      y+=25; 
      
    }
   
  }

}

