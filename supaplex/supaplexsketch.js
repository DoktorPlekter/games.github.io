
var Stones = [];

function setup() {
  createCanvas(512, 512);


  for (var i = 0; i < 10; i++ ) {
    Stones.push(new Stone(random(10, width), random(10, height)));

  }

  

}

function draw() {
  background(25);
  noStroke(); 
  fill (250,0,0)
  circle(200,200,25);



  for (var i = 0; i < 10; i++ ) {
    Stones[i].display();

  }





}