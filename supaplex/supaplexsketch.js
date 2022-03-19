
  //var test = new Stone();

function setup() {
  createCanvas(512, 512);

}

function draw() {
  background(25);
  noStroke(); 
  fill (250,0,0)
  circle(200,200,25);

  Stone.display();
  noStroke(); 
  
  fill (155,0,55);
  rectMode(CENTER);
  rect(300,300,25);


}