const Engine=Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground,ground2,ground3,ground4;
var engine, world;
var divisionH;



var particles = [];
var plinkos = [];
var divisionsV = [];

var divisionHeight = 600;
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

 divisionH = new Divisions(240,785,460,10);

 for(var V=10;V<=470;V = V+57){
    divisionsV.push( new Divisions(V, 788, 6, divisionHeight));
 }
 
 ground=new Ground (0, 795, 960, 10);
 ground2=new Ground (0, 5, 960, 10);
 ground3=new Ground(475,5,10,2000);
 ground4=new Ground(5,5,10,2000);

 for(var j=60; j<=420;j=j+50){
   plinkos.push(new Plinko(j,75));
 }
 for(var j=35; j<=450;j=j+50){
  plinkos.push(new Plinko(j,175));
}
for(var j=60; j<=420;j=j+50){
  plinkos.push(new Plinko(j,275));
}
for(var j=35; j<=450;j=j+50){
 plinkos.push(new Plinko(j,375));
}

}

function draw() {
  background(0,0,0);
  Engine.update(engine); 
  divisionH.display();
  ground.display();
  ground2.display();
  ground3.display();
 

  if(frameCount%30===0){
    particles.push(new Particle(random(220,230),10,10));
    }
  
 for(var I=0;I<divisionsV.length;I++){
  divisionsV[I].display();
 }
 ground4.display();
 for(var J=0;J<plinkos.length;J++){
  plinkos[J].display();
 }
 for(var J=0;J<particles.length;J++){
  particles[J].display();
 }
}