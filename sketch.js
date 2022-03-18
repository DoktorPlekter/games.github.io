
//draw a spinning teapot
let teapot;

function preload() {
  // Load model with normalise parameter set to true
  teapot = loadModel('assets/big_lion.obj', true);
}

function setup() {
  createCanvas(720, 1250, WEBGL);
}

function draw() {
  background(255);
  ambientLight(25)
  directionalLight(555,555,555,255,75,0); 
  scale(3); // Scaled to make model fit into canvas
  rotateX(frameCount * 0);
  rotateY(frameCount * 0.01);
  rotate(3.2);
  
  translate(0,40,0)
  specularMaterial(250);
  shininess(50);
  noStroke(); 
  
  model(teapot);
 
}
