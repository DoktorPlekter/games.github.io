 

function Grass(x, y) {


  this.x = x; 
  this.y = y; 

  debugShow = false; 

  this.display = function()
  {
  
  stroke(0,0,0,55)
  fill (25,180,55,155);
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
     Blocks[y].splice(x,1,new PlayChar(x,y))
     Blocks[playX].splice(playY,1,new Space(playY,playX))
     playCharRef = Blocks[y][x];
  }

}



