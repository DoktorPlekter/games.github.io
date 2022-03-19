
var Stones = [];
var charmap =['g', 'g', 'g', 'g', 's', 'g', 'g', 'g', 's', 's']

function setup() {
  createCanvas(512, 512);

}


charmap.forEach((char, ind = 0) => {

  switch(char){
    case 'g':  
    console.log('g was met')
    //Stones.push(new Stone(100, 100));
    break;

    default: console.log('Nothing met')
  }
 

})


function draw() {
  background(25);
  noStroke(); 
  fill (250,0,0)
  circle(200,200,25);

  for (var i = 0; i < 0; i++ ) {
    Stones[i].display();

  }





}