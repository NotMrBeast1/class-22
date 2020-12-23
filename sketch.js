const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var myWorld, myEngine, ground, ball;

function setup(){
  var canvas=createCanvas(400,400);

  myEngine = Engine.create();
  myWorld= myEngine.world;

  var op = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,380,400,40,op);

  World.add(myWorld,ground);

  var booff = {
    restitution: 0.5
  }
  ball = Bodies.circle(200,50,25,booff);

  World.add(myWorld,ball);


}
function draw(){
  background(0);

  Engine.update(myEngine);

  fill("red");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,40);

  fill("blue");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25,25);  
  
}
