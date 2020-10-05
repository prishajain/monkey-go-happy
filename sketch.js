
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var monkey;
var ground;
var bananaGroup;
var obstacleGroup;
var survivalTime=0;
var edges;
var obstacles;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX =-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  edges=createEdgeSprites()
  
}


function draw() {
  background("pink");
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  monkey.velocityY=monkey.velocityY + 0.8;
  monkey.collide(ground);
  
spawnfood();
spawnobstacles();

  

drawSprites();
// monkey.collide(ground);
var survivalTime=0;
stroke("white");
textSize=20;
fill("white");
text("Score:" + score,500,50);
stroke("black");
textSize=20;
fill("black");
survivalTime=Math.ceil(frameCount/frameRate());
text("Survival Time:"+ survivalTime,100,50);
}

function spawnfood(){
  if(frameCount%80===0){
    banana=createSprite(600,250,40,10);
    banana.y=random(120,200)
    banana.velocityX=-5;
    banana.addImage(bananaImage);
    banana.scale=0.05
    
  }
}

function spawnobstacles(){
  if(frameCount%100===0){
    obstacles=createSprite(800,320,10,40);
    obstacles.velocityX=-6;
    obstacles.addImage(obstacleImage);
    obstacles.scale=0.2
    
  }
}








