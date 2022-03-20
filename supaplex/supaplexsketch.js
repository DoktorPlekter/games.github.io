
var canvasX = 576, canvasY = 576; 
var mapWidth = 24; var mapHeight = 2; 

var Blocks = [];
var Grasses = [];
var charmap =['g','s','g','g','s','g','g','g','g','s','s','g','s','s','g','g','g','s','g','g','g','g','g','g',
              'g','g','g','g','s','g','s','g','g','s','s','g','s','s','g','g','s','s','g','g','s','s','g','s',
              'g','g','g','s','s','s','g','g','g','s','s','g','s','g','s','s','g','g','g','s','s','s','g','s',
              'g','g','g','g','s','s','g','s','g','g','s','g','s','g','s','s','g','g','g','s','s','s','g','s',
              'g','g','g','g','s','g','g','g','g','g','s','g','s','g','s','s','s','s','g','s','s','s','g','s',
              'g','g','g','g','s','g','g','g','g','g','g','s','s','g','g','g','g','g','g','g','s','s','g','s',
              'g','g','g','s','s','g','g','s','s','s','g','g','g','s','g','s','g','g','g','g','s','s','g','s',
              'g','g','s','g','s','g','g','g','g','s','s','s','s','s','g','g','g','g','g','g','s','s','s','g',
              's','s','s','g','s','g','s','g','g','s','s','g','s','s','s','g','g','s','g','g','s','s','s','g',
              'g','g','g','g','s','g','g','s','s','s','s','s','g','g','g','g','s','s','g','g','s','s','s','s',
              'g','s','s','s','s','g','g','g','g','s','s','g','s','g','g','s','s','s','g','g','s','g','g','s',
              'g','g','s','g','s','g','g','g','s','s','s','g','s','s','g','g','s','g','g','g','s','s','s','s',
              'g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',
              'g','g','g','g','s','s','g','s','g','s','s','g','s','s','s','s','g','g','g','s','s','s','g','s',
              's','s','s','g','s','g','s','g','g','s','s','g','s','s','s','g','g','s','g','g','g','g','g','g',
              'g','g','g','g','g','g','g','s','s','s','s','s','s','g','g','g','s','g','g','g','s','s','g','s',
              'g','g','g','s','g','s','g','g','g','s','s','g','s','g','s','s','s','g','g','g','g','g','g','g',
              'g','g','g','g','g','s','g','s','g','g','g','g','s','g','g','s','g','g','g','s','g','g','g','g',
              'g','g','g','g','s','g','g','g','g','s','g','g','s','s','s','g','s','s','g','s','g','g','g','g',
              'g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g',
              'g','g','g','g','s','s','g','s','g','s','s','g','g','s','g','s','g','g','g','s','s','g','g','s',
              's','s','s','g','s','g','s','g','g','s','s','g','g','g','g','g','g','s','g','g','s','g','g','g',
              'g','g','g','g','s','g','g','s','s','s','s','s','s','g','g','g','s','s','g','g','s','s','g','g',
              'g','g','g','s','s','s','g','g','g','s','s','g','s','s','s','s','s','g','g','s','s','s','g','s',
  


              ]
var gMap = [];
var sMap = [];


function setup() {
  createCanvas(canvasX, canvasY);
  var currentVertiRow = 0; 
  var currentHorizRow = 0; 
  //populating "Blocks" array based on the charmap array
  charmap.forEach((char, ind = 0) => {
    
    if (currentHorizRow === mapWidth)
    {
      currentVertiRow++;
      currentHorizRow = 0; 
    } else{};
    
     

    
    switch(char){
      case 's':          
        var s =  new Stone(currentHorizRow*24, currentVertiRow*24);
        Blocks.push(s);
        sMap.push(ind); 
      break;
      case 'g':  
        var g =  new Grass(currentHorizRow*24, currentVertiRow*24);
        Blocks.push(g);
        gMap.push(ind); 
      break;
      default: 
      break;
  }  
  currentHorizRow++;
  })


  sMap.forEach((nums, ind = 0) => {
    Blocks[sMap[ind]].init(); 
  })
}





function draw() {
  background(25);
  noStroke(); 
  fill (250,0,0)
  circle(200,200,25);

  
for (var i = 0; i < charmap.length; i++)
{
  Blocks[i].display();    
} 


}


