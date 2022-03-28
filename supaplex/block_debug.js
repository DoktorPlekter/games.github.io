 

function Debugblock(x, y, t) {


  this.x = x; 
  this.y = y; 
  this.t = t; 

  debugShow = false; 

  this.debug  = function()
  {
    
    textSize(15);
    fill (255,255,255,155);
    text(t, x*24+2, y*24+15);
  }


  this.init = function(){
    
  }
  
  this.display = function()
  {
  
  stroke(255,0,0,155)
  fill (255,55,155,55);
  rectMode(CENTER);
  rect(x*24+12,y*24+12,24);

    if (this.debugShow){
      stroke(255,0,0,155)
      fill (25,180,55,0);
      rectMode(CENTER);
      rect(x*24+12,y*24+12,24);
    }
 
  }
  

  this.physupdate = function() { 
   
  }

  this.eaten = function(playX, playY) { 
     this.debugShow = true; 
     Blocks[y].splice(x,1,new PlayChar(x,y,1))
     Blocks[playX].splice(playY,1,new Space(playY,playX,4))
     playCharRef = Blocks[y][x];
  }

}



