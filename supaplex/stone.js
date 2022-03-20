

function Stone(x, y) {
  
  this.x = x; 
  this.y = y; 

  this.init  = function()
  {
    
    
  }

  this.display = function()
  {
    stroke(0,0,0,55)
    fill (55);
    circle(x+12,y+12,24);
  }
  

  this.physupdate = function() { 
    
    if (y < canvasY){
      y+=24; 
      console.log('physUPDATE')
    }
   
  }

}

