

function Stone(x, y, init) {
  
  this.x = x; 
  this.y = y; 

  

  this.init  = function()
  {
    setInterval(this.physupdate, 500); 
    
  }

  this.display = function()
  {
    stroke(0,0,0,55)
    fill (55,55,55,155);
    circle(x*24+12,y*24+12,24);
  }
  

  this.physupdate = function() { 
    
    if (y < canvasY){
      
      //Blocks[y+1].splice(x,1,new Stone(x,y+1,true))
      
      
    }
   
  }
  this.eaten = function() { 
    
  }


  if (init===true){
    this.init();

  }
}

