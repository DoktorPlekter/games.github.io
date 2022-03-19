
var canvasX = 600, canvasY = 600; 

var Blocks = [];
var Grasses = [];
var charmap =['g', 'g', 'g', 'g', 's', 'g', 'g', 'g','g', 's', 's', 'g', 's', 's', 'g', 'g','g', 'g', 'g','g', 's', 's', 'g', 's',]
var gMap = [];
var sMap = [];


function setup() {
  createCanvas(canvasX, canvasY);
  
  charmap.forEach((char, ind = 0) => {

    //populating "Blocks" array based on the charmap array
    switch(char){
      case 's':  
        console.log('s was met')
        var s =  new Stone(ind * 25, 100);
        Blocks.push(s);
        sMap.push(ind); 
      break;
      case 'g':  
        console.log('g was met')
        var g =  new Grass(ind * 25, 100);
        Blocks.push(g);
        gMap.push(ind); 
      break;
      default:
    }
    

    
  })
  setInterval(updatephys, 150)
  console.log(sMap.length)
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




function updatephys(){
 

  sMap.forEach((nums, ind = 0) => {
  
  Blocks[sMap[ind]].physupdate();

  
})

}
