var girl,zombie,bg,obs,gameover;
var backgroundimg,girlimg,zombieimg,obsimg,gameoverimg;
var score;

function preload(){
backgroundimg=loadImage("road.jpg");
girlimg=loadImage("backgrond.jpg");
zombieimg=loadImage("OLP.jpg");
obsimg=loadImage("box.jpg");
gameoverimg=loadImage("go.jpg")
}

function setup() {
  createCanvas(575,400);

  bg=createSprite(width/1,400,);
  bg.addImage(backgroundimg);
  bg.scale=5;
  bg.velocityX= -4;

  girl = createSprite(mouseX ,height-250,20,20);
  girl.addImage(girlimg);
  girl.scale=0.6;

  zombie=createSprite(width/13,height-250,20,20);
  zombie.addImage(zombieimg);
  zombie.scale=0.5;
 

  score = 0;

  boxGroup = createGroup();
}

function draw() {
  edges= createEdgeSprites();

  girl.x = mouseX;
  girl.y = mouseY;
  girl.collide(edges);

  if (bg.x < 0){
    bg.x = bg.width/2;
  }

  if(keyDown("space")&& girl.y >= 100) {
    girl.velocityY = -12;
  }

  if(boxGroup.isTouching(girl)){
    boxGroup.destroyEach()
    score += 5;
  }

 
  createObs();
  
  drawSprites();

  fill("maroon");
  textSize(22);
  text("Collect coins to win.",30,25);
  text("Score: "+score,width - 200,25);
}

function createObs(){
  if (World.frameCount % 50 == 0) {
  var box = createSprite(Math.round(random(30, width-100)),40, 10, 10);
  box.addImage(obsimg);
  box.scale=0.12;
  box.velocityY = 5;
  box.lifetime = width/box.velocityY;
  boxGroup.add(box);
  }
}