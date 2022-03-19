
var Stones = [];
var charmap =['g', 'g', 'g', 'g', 's', 'g', 'g', 'g', 's', 's']

function setup() {
  createCanvas(512, 512);
  
  
  charmap.forEach((char, ind = 0) => {

    switch(char){
      case 's':  
        console.log('g was met')
        var s =  new Stone(ind * 50, 100);
        Stones.push(s);
      break;
      case 'g':  
        console.log('g was met')
        var s =  new Stone(ind * 50, 100);
        Stones.push(s);
      break;
      default: console.log('Nothing met')
    }
   
  
  })
}





function draw() {
  background(25);
  noStroke(); 
  fill (250,0,0)
  circle(200,200,25);

  for (var i = 0; i < charmap.length; i++ ) {
    Stones[i].display();

  }





}