 

function Space(x, y, t) {


  this.x = x; 
  this.y = y; 
  this.t = t; 

  this.debug  = function()
  {
    
    textSize(15);
    fill (255,155,25,155);
    text(t, x*24+15, y*24+15);
  }


  this.init = function(){

  }

  this.display = function()
  {
    stroke(0,0,55,15)
    fill (55,55,255,5);
    circle(x*24+12,y*24+12,24);

    textSize(7);
  
  
  }
  

  this.physupdate = function() { 
   
  }
  this.eaten = function(playX, playY) { 
   

    Blocks[y].splice(x,1,new PlayChar(x,y,1))
    Blocks[playX].splice(playY,1,new Space(playY,playX,4))
    playCharRef = Blocks[y][x];
  }
}

