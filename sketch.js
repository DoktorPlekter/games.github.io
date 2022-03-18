let speedX = 0, speedY = 0, speedScale = 1; 
let canvasX = 1920, canvasY = 969; 
let ballLocX = 300, ballLocY = 300, ballSize = 100; 
let ballSpeedX = 13, ballSpeedY = 25; 
let bgColX = 0, bgColY = 0, bgColZ = 0; 

function setup() {
  createCanvas(canvasX, canvasY);
}

function draw() {
  background(bgColX, bgColY, bgColZ);

  noStroke(); 
 

if (ballLocX > canvasX || ballLocX < 0){
  ballSpeedX*= -1; 
  ballLocX+= ballSpeedX *speedScale; 
  fill(random(55,255),random(55,255),random(55,255))
  bgColX =random(55,255); bgColY = random(55,255); bgColZ = random(55,255); 
}
else {
  ballLocX+= ballSpeedX*speedScale; 
}

if (ballLocY > canvasY || ballLocY < 0){
  ballSpeedY*= -1; 
  ballLocY+= ballSpeedY*speedScale; 
  fill(random(55,255),random(55,255),random(55,255))
  bgColX =random(55,255); bgColY = random(55,255); bgColZ = random(0,255); 
  
}
else {
  ballLocY+= ballSpeedY*speedScale; 
}

circle(ballLocX, ballLocY, ballSize)
speedScale = map(mouseX, 0, canvasX, 0.2, 4);
ballSize = map(mouseY, 0, canvasY, 500, 50)
  
}
