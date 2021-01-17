
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground,dustbin;
function preload() {

}

function setup() {
	createCanvas(1600, 700);
	
	engine = Engine.create();
	world = engine.world;

	paper =new Paper(200,450,50);
	ground = new Ground(800, 670, 1600, 20);
	dustbin = new Dustbin(1200,650);
	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(0);
	keyPressed()
	paper.display();
	ground.display();
	dustbin.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW ){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:12,y:-13});
	}
}
