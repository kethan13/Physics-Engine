const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,bodies,object;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
var options={
isStatic:true  
}

  object = Bodies.rectangle(200,100,50,50,options);
  World.add(world,object);
  var ballOptions={
  restitution:0.8  
  }
  ball=Bodies.circle(100,100,20,ballOptions);
  World.add(world,ball);

  ground=Bodies.rectangle(200,380,400,20,options);
  World.add(world,ground);

}

function draw() {
  background(0);  
  rectMode(CENTER);
  rect(200,200,50,50);
  Engine.update(engine);
  rect(this.object.position.x,this.object.position.y,50,50);
  ellipseMode(RADIUS);
  ellipse(this.ball.position.x,this.ball.position.y,20,20);
  rect(this.ground.position.x,this.ground.position.y,400,20);
  
  
  
  
  drawSprites();
}