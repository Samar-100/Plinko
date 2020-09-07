const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground;
var engine, world;
var divisionHorizontal;

var particles = [];
var plinkos = [];
var divisionVertical = [];

var divisionHeight = 300;
function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;

  divisionHorizontal = new Division(240, 785, 460, 10);

  for (var i = 10; i <= 470; i += 57) {
    divisionVertical.push(new Division(i, 788, 6, divisionHeight));
  }

  ground = new Ground(0, 795, 960, 10);

  for (var i = 100; i <= 350; i = i + 50) {
    plinkos.push(new Plinko(i, 175));
  }
  for (var i = 80; i <= 400; i = i + 50) {
    plinkos.push(new Plinko(i, 275));
  }
  for (var i = 60; i <= 420; i = i + 50) {
    plinkos.push(new Plinko(i, 375));
  }
  for (var i = 35; i <= 450; i = i + 50) {
    plinkos.push(new Plinko(i, 475));
  }
}

function draw() {
  background("royalBlue");
  Engine.update(engine);
  divisionHorizontal.display();
  ground.display();

  if (frameCount % 30 === 0) {
    particles.push(new Particle(random(220, 230), 10, 10));
  }

  for (var i = 0; i < divisionVertical.length; i++) {
    divisionVertical[i].display();
  }
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
  for (var i = 0; i < particles.length; i++) {
    particles[i].display();
  }
}
