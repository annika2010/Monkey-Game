
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0 ;
var ground;
var survivalTime=0 ;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(400,400);
  
  monkey=createSprite(50,320,10,10);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale=0.15;
  
  ground=createSprite(200,368,400,5)

}


function draw() {
  
  background("white");
  
  text("Survival Time:"+survivalTime, 100, 50);
  survivalTime=survivalTime+Math.round(getFrameRate());
  
  //text("Score: "+ score,250,50);


  
  if(ground.x<0){
    
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    
    monkey.velocityY=-10;
  }
  
  monkey.velocityY= monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
  
  food();
  SpawnObstacles();

  drawSprites();
  
}

function food() {
    if (frameCount%80 === 0) {
    banana = createSprite(400,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.09;
    banana.velocityX = -3;
    banana.lifetime=200;
   //FoodGroup.add(banana);
    }
}  


function SpawnObstacles() {
    if (frameCount%300 === 0) {
    obstacle = createSprite(200,340,40,10);
    obstacle.x = Math.round(random(200,200));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -3;
    obstacle.lifetime=200;
    //obstacleGroup.add(obstacle);
    }
}