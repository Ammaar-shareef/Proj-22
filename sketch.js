const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var leftSide;
var rightSide;

var ball;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  ground =new Ground(200,390,400,20);
  rightSide = new Ground(390,200,20,400);
  leftSide = new Ground(10,200,20,400);

  var ball_options = {
    restitution:0.50
  }
 
  ball = Bodies.circle(200,200,20,ball_options);
  World.add(world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  fill("white");
  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  leftSide.show();
  rightSide.show();

  Engine.update(engine);
}

function Hforce(){
 Matter.Body.applyForce(ball,{x:0, y:0},{x:0.03, y:0})
}

function Vforce(){
  Matter.Body.applyForce(ball,{x:0, y:0},{x:0, y:-0.03})
 }

