
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ballObject,dustbinobject;
function setup() {
	createCanvas(1600,700);
	engine = Engine.create();
	world = engine.world;

   ground = new Ground(width/2,670,width,20);

    dustbinobject = new Dustbin(1200,500);
   
	ballObject = new Paper (200,450,40);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  Engine.update(engine);
  ballObject.display();    
  ground.display();
   dustbinobject.display();

}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ballObject.body,ballObject.body.position,{x:95,y:-95});
	}
}

	




