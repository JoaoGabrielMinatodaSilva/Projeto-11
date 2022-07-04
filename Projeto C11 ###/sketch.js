var Runner

var Runner1

var path, PathImage

function preload(){
   
Runner1 = loadAnimation("Runner-1.png","Runner-2.png");

PathImage = loadImage("path.png");

}

function setup(){
  createCanvas(400,400);

  path = createSprite(200,200);
  path.scale = 1.3
  path.addImage("chao",PathImage)

  Runner = createSprite(200,350,50,20);
  Runner.scale = 0.1
  Runner.addAnimation("running",Runner1);

  path.velocityY = 5
}

function draw() {
  background(220);

  Runner.x = World.mouseX;

  if(path.y>400){
    path.y = height/2;
  }
   
  drawSprites();
  
}
