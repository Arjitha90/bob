
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var paper,bob1Diameter
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	//Create the Bodies Here.
bob1 = new Bob(250,200,20,20)
ground = new Ground(300,100,300,30)
rope1= new Rope(bob1.body,ground.body,-bob1Diameter*2,0)

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display()
  ground.display()
  rope1.display()
  drawSprites();
 
}



