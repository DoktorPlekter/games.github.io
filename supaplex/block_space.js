 

function Space(x, y) {


  this.x = x; 
  this.y = y; 

  this.display = function()
  {
    stroke(0,0,55,15)
    fill (55,55,255,5);
    circle(x*24+12,y*24+12,24);
  
  }
  

  this.physupdate = function() { 
   
  }
  this.eaten = function(playX, playY) { 
    console.log("EAT EVENT SPACE")

    Blocks[y].splice(x,1,new PlayChar(x,y))
    Blocks[playX].splice(playY,1,new Space(playY,playX))
    playCharRef = Blocks[y][x];
  }
}

