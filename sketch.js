const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ball1, rope1,ball2,rope2,ball3,rope3,ball4,rope4,ball5,rope5

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  

  ball1 = new Ball(500, 50, 80, 80);
  rope1 = new Rope(ball1.body, { x: 500, y: 50 });

  ball2 = new Ball(570, 100, 80, 80);
  rope2 = new Rope(ball2.body, { x: 570, y: 50 });

  ball3 = new Ball(640, 100, 80, 80);
  rope3 = new Rope(ball3.body, { x: 640, y: 50 });
  
  ball4 = new Ball(710, 100, 80, 80);
  rope4 = new Rope(ball4.body, { x: 710, y: 50 });
  
  ball5 = new Ball(780, 100, 80, 80);
  rope5 = new Rope(ball5.body, { x: 780, y: 50 });

}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
  

  ball1.display();
  rope1.display();

  ball2.display();
  rope2.display();

  ball3.display();
  rope3.display();

  ball4.display();
  rope4.display();

  ball5.display();
  rope5.display();



}


function mouseDragged() {
  Matter.Body.setPosition(ball1.body, { x: mouseX, y: mouseY });
}