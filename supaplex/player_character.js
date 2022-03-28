function PlayChar(x, y, t) {
  
    this.x = x; 
    this.y = y; 
    this.t = t;

    var arrayCord = (x,y);
  
    this.debug  = function()
    {
       
      textSize(15);
      fill (255,255,255,155);
      text(t, x*24+2, y*24+15);
    }

    this.init  = function()
    {
      
      
    }
  
    this.display = function()
    {
      stroke(0,0,0,55)
      fill (255,55,66);
      circle(x*24+12,y*24+12,24);

      textSize(7);
     fill (55,255,55,155);
     //text(x, x*24+2, y*24+15);sd
     fill (55,55,255,255);
      //text(y, x*24+13, y*24+15);
      
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