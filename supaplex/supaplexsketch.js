
var canvasX = 576, canvasY = 576; 
var mapWidth = 24; var mapHeight = 24; 

var playCharRef;

var Blocks = new Array(24);
var Grasses = [];
var charmap =['g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',
              'g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',
              'g','g','g','g','g','g','g','g','g','g','s','g','g','g','g','g','g','g','g','g','g','g','g','g',
              'g','g','p','g','g','g','g','g','g','g','n','g','g','g','g','g','g','g','g','g','g','g','g','g',
              'g','g','g','g','g','g','g','g','g','g','n','g','g','g','g','g','g','g','g','g','g','g','g','g',
              'g','g','g','g','g','g','g','g','g','g','n','g','g','s','g','g','g','g','g','g','g','g','g','g',
              'g','g','g','g','g','g','g','g','g','g','n','g','g','n','g','g','g','g','g','g','g','g','g','g',
              'g','g','g','g','g','g','g','g','g','g','n','g','g','n','g','g','g','g','g','g','g','g','g','g',
              'g','g','g','g','g','g','g','g','g','g','n','g','g','g','g','g','g','g','g','g','g','g','g','g',
              'g','g','g','g','g','g','g','g','g','g','n','g','g','g','g','g','g','g','g','g','g','g','g','g',
              'g','g','g','g','g','g','g','g','g','g','n','g','g','g','g','g','g','g','g','g','g','g','g','g',
              'g','g','g','g','g','g','g','g','g','g','n','g','g','g','g','g','g','g','g','g','g','g','g','g',
              'g','g','g','g','g','g','g','g','g','g','n','g','g','g','g','g','g','g','g','g','g','g','g','g',
              'g','g','g','g','g','g','g','g','g','g','n','g','g','g','g','g','g','g','g','g','g','g','g','g',
              'g','g','g','g','g','g','g','g','g','g','n','g','g','g','g','g','g','g','g','g','g','g','g','g',
              'g','g','g','g','g','g','g','g','g','g','n','g','g','g','g','g','g','g','g','g','g','g','g','g',
              'g','g','g','g','g','g','g','g','g','g','n','g','g','g','g','g','g','g','g','g','g','g','g','g',
              'g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',
              'g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',
              'g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',
              'g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',
              'g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',
              'g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',
              'g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g'
  


              ]
var gMap = [];
var sMap = [];



function setup() {
  createCanvas(canvasX, canvasY);
  var currentVertiRow = 0; 
  var currentHorizRow = 0; 

  for (var i = 0; i < Blocks.length; i++) {
    Blocks[i] = new Array(24);
  }

  //populating "Blocks" array based on the charmap array
  charmap.forEach((char, ind = 0) => {
    
    if (currentHorizRow === mapWidth)
    {
      currentVertiRow++;
      currentHorizRow = 0; 
    } else{};
    
    switch(char){
      case 'p': 
      var p =  new PlayChar(currentHorizRow, currentVertiRow);
        playCharRef = p; 
        Blocks[currentVertiRow][currentHorizRow] = p;
        break; 
      case 's':          
        var s =  new Stone(currentHorizRow, currentVertiRow);
        Blocks[currentVertiRow][currentHorizRow] = s;
        Blocks[currentVertiRow][currentHorizRow].init(); 
        
      break;
      case 'g':  
        var g =  new Grass(currentHorizRow, currentVertiRow);
        Blocks[currentVertiRow][currentHorizRow] = g;
       
      break;
      case 'n': 
        var n =  new Space(currentHorizRow, currentVertiRow);
        Blocks[currentVertiRow][currentHorizRow] = n;
      break; 

      default: 
      break;
  }  
  currentHorizRow++;
  })
  
}


function draw() {
  background(25);
 

  
for (var i = 0; i < mapWidth; i++){
  for (var j = 0; j < mapHeight; j++){
    Blocks[i][j].display();   
  }
} 
}

  function keyTyped() {
    if (key === 's') {
      playCharRef.moveDown();
    } 
    else if (key==='w'){
      playCharRef.moveUp();
    }
    else if (key==='a'){
      playCharRef.moveLeft();

    }
    else if (key==='d'){
      playCharRef.moveRight();
      
    }
    
    }




