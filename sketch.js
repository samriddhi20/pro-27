
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(350,100,400,20)
	bob1 = new BOB(200,500,30)
	bob2 = new BOB(260,500,30)
	bob3 = new BOB(320,500,30)
	bob4 = new BOB(380,500,30)
	bob5 = new BOB(440,500,30)
	bob6 = new BOB(500,500,30)
	rope1= new ROPE(bob1.body,ground1.body,-150,0)
	rope2= new ROPE(bob2.body,ground1.body,-90,0)
	rope3= new ROPE(bob3.body,ground1.body,-30,0)
	rope4= new ROPE(bob4.body,ground1.body,30,0)
	rope5= new ROPE(bob5.body,ground1.body,90,0)
	rope6= new ROPE(bob6.body,ground1.body,150,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 stroke("black")
 strokeWeight(3);
 
  ground1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 rope6.display();
 keyPressed();
 drawSprites();
}
function keyPressed(){
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100});
	}
	}


