function PlayChar(x, y) {
  
    this.x = x; 
    this.y = y; 

    var arrayCord = (x,y);
  
    this.init  = function()
    {
      
      
    }
  
    this.display = function()
    {
      stroke(0,0,0,55)
      fill (255,55,66);
      circle(x*24+12,y*24+12,24);
      
    }
    
  
    this.physupdate = function() { 
      
     
    }

    this.moveDown = function()  {

      Blocks[y+1][x].eaten(y, x);
    }
    this.moveUp = function() {

      Blocks[y-1][x].eaten(y, x);
    }
    this.moveLeft = function()  {
      
      Blocks[y][x-1].eaten(y, x);
    }
    this.moveRight = function() {

      Blocks[y][x+1].eaten(y, x);
    }

    
  }