

function Stone(x, y, t) {
  
  this.x = x; 
  this.y = y; 
  this.t = t; 
  let status = "nothing";
  

  this.debug  = function()
  {
    
    textSize(15);
    fill (255,255,255,155);
    text(t, x*24+2, y*24+15);
  }

  this.init  = function()
  {
    setTimeout(this.physupdate, 155); 
    
  }

  this.display = function()
  {
    stroke(0,0,0,55)
    fill (55,55,55,155);
    circle(x*24+12,y*24+12,24);

  textSize(7);
  fill (255,255,255,155);
  text(x, x*24+2, y*24+15);
  fill (155,155,255,255);
  text(y, x*24+13, y*24+15);
  }
  

  this.physupdate = function() { 
    
    if (!(y > canvasY || Blocks[y+1][x].t === 3 || Blocks[y+1][x].t === 2)){
      
      status = "falling"; 

      Blocks[y+1].splice(x,1,new Stone(x,y+1,2))
      Blocks[y].splice(x,1,new Space(x,y,4))
      Blocks[y+1][x].init(); 
      Blocks[y-1][x].init(); 



    } else if (Blocks[y][x+1].status != "falling" || (Blocks[y][x+1].t === 4 && Blocks[y+1][x+1].t === 4 )){

      //
      Blocks[y].splice(x,1,new Space(x,y,4))
      Blocks[y].splice(x+1,1,new Stone(x+1,y,2))
      Blocks[y][x+1].init();
      console.log(status)
      //Blocks[y][x+1].init(); 
      
      
      
    }

   
  }
  this.eaten = function() { 
    
  }



}

