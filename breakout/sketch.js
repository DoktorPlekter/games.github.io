
var Engine = Matter.Engine,
    World = Matter.World, 
    Bodies = Matter.Bodies;


var engine; 
var world; 
var balls = []; 

function setup() {

    createCanvas(600, 400);
    engine = Engine.create();
    world = engine.world;

    newBall();
    
   
 
}


function newBall() {
    var p = new Ball(300, 50, 10);
    balls.push(p);
}



function draw() {


    if (frameCount % 60 == 0 ) { 
        newBall();
    }
    background(25);
    Engine.update(engine);
    for (var i = 0; i < balls.length; i++ ) {
        balls[i].show()
    }
}