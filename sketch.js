//game states
var PLAY=1;
var END=2;
var START=0;
var gameState=START;

//storing objects
var sword,fruit ,monster,fruitGroup,enemyGroup, score,r,randomFruit;
var swordImage , fruit1, fruit2 ,fruit3,fruit4, monsterImage, gameOverImage

var KnifeSwooshSound,GameOverSound;
var position;

function preload(){
  
  //loading images and animation  
  swordImage = loadImage("sword.png");
  monsterImage = loadAnimation("alien1.png","alien2.png");
  fruit1i = loadImage("fruit1.png");
  fruit2i = loadImage("fruit2.png");
  fruit3i = loadImage("fruit3.png");
  fruit4i = loadImage("fruit4.png");
  cfruit1i = loadImage("kiwi.png");
  cfruit2i = loadImage("watermelon.png");
  cfruit3i = loadImage("orange.png");
  gameOverImage = loadImage("gameover.png");
  
}



function setup() {
  //creating canvas
  createCanvas(displayWidth-50, displayHeight-50);
  
  //creating sword
   sword=createSprite(40,200,20,20);
   sword.addImage(swordImage);
   sword.scale=0.7
  
  
  //set collider for sword
  sword.setCollider("rectangle",0,0,40,40);

  // Score variables and Groups
  score=0;
  fruit1Group=createGroup();
  fruit2Group=createGroup();
  fruit3Group=createGroup();
  fruit4Group=createGroup();
  enemyGroup=createGroup();
  
}

function draw() {
  //giving background colour
  background("mediumspringgreen");

  if(gameState===START){
    background("yellow");
    textSize(40);
    fill("black");  
    text("Rules:-",displayWidth/2-50,displayHeight/2-50);
    fill("black");
    text("Rule1:Move Your Mouse To Cut Fruits.",400,displayHeight-300);
    text("Rule2:Beware Of The Monsters.",400,displayHeight-250);
    fill("red");
    text("Press Space to start the Game",400,displayHeight-150);
    text("ALL THE BEST!!!",displayWidth/2-150,displayHeight-80);
    
    if(keyCode===32){
      gameState=PLAY;
    }
  }
 
  //gameState play with their respective code
  if(gameState===PLAY){
    
    //Call fruits and Enemy function
    F1();
    F2();
    F3();
    F4();
    Enemy();

    // Move sword with mouse
    sword.y=World.mouseY;
    sword.x=World.mouseX;
  
    // Increase score if sword touching fruit
    if(fruit1Group.isTouching(sword)){
      fruit1Group.destroyEach();
      score=score+1;
    }
    if(fruit2Group.isTouching(sword)){
      fruit2Group.destroyEach();
      score=score+2;
    }
    if(fruit3Group.isTouching(sword)){
      fruit3Group.destroyEach();
      score=score+3;
    }
    if(fruit4Group.isTouching(sword)){
      fruit4Group.destroyEach();
      score=score+5;
    }
    if(enemyGroup.isTouching(sword)){
      gameState=END;
    }
  }

      if(gameState===END){

        background("black");
        
        fruit1Group.destroyEach();
        fruit2Group.destroyEach();
        fruit3Group.destroyEach();
        fruit4Group.destroyEach();
        enemyGroup.destroyEach();
        
        
        // Change the animation of sword to gameover and reset its position
        
        sword.addImage(gameOverImage);
        sword.scale=1.5;
        sword.x=displayWidth/2-50;
        sword.y=displayHeight/2-50;
      }
    
  
  
  
  
  drawSprites();
  
  //Display score
  textSize(50);
  fill("red");
  text("Score : "+ score,displayWidth/2-100, 50);
}


//calling function enemy
function Enemy(){
  if(World.frameCount%200===0){
    
    monster=createSprite(400,200,20,20);
    monster.addAnimation("moving", monsterImage);
    monster.scale=1.3;
    var R = Math.round(random(1,4));
    switch(R){
      case 1: monster.x = 0;
              monster.y = random(0,displayHeight-50);
              monster.velocityX = 5;
      break;
      case 2: monster.x = displayWidth-50;
              monster.y = random(0,displayHeight-50);
              monster.velocityX = -5;
              
      break;
      case 3: monster.y = 0;
              monster.x = random(0,displayWidth-50);
              monster.velocityY = 5;
      break;
      case 4: monster.y = displayHeight-50;
              monster.x = random(0,displayWidth-50);
              monster.velocityY = -5;
      break;
      default:break;

    }
    monster.lifetime=1000;
    
    enemyGroup.add(monster);
  }
}

//calling function fruits
function F1(){
  if(World.frameCount%140===0){
    
    fruit1=createSprite(400,400,20,20);
    fruit1.addImage(fruit1i);
    fruit1.scale=0.3;
    var r = Math.round(random(1,4));
    switch(r){
      case 1: fruit1.x = 0;
      fruit1.y = random(0,displayHeight-50);
      fruit1.velocityX = 5;
      break;
      case 2: fruit1.x = displayWidth-50;
      fruit1.y = random(0,displayHeight-50);
      fruit1.velocityX = -5;
            
      break;
      case 3: fruit1.y = 0;
      fruit1.x = random(0,displayWidth-50);
      fruit1.velocityY = 5;
      break;
      case 4: fruit1.y = displayHeight-50;
      fruit1.x = random(0,displayWidth-50);
      fruit1.velocityY = -5;
      break;
      default:break; 
      

    }
    //fruit1.velocityY=-5;
      fruit1.lifetime=100;
    fruit1Group.add(fruit1);
    
  }
}

function F2(){
  if(World.frameCount%160===0){
    
    fruit2=createSprite(400,400,20,20);
    fruit2.addImage(fruit2i);
    fruit2.scale=0.3
    fruit2.velocityY=-5;
    fruit2.lifetime=100;
    fruit2Group.add(fruit2);

    var r = Math.round(random(1,4));
    
    switch(r){
      case 1: fruit2.x = 0;
      fruit2.y = random(0,displayHeight-50);
      fruit2.velocityX = 5;
      break;
      case 2: fruit2.x = displayWidth-50;
      fruit2.y = random(0,displayHeight-50);
      fruit2.velocityX = -5;
            
      break;
      case 3: fruit2.y = 0;
      fruit2.x = random(0,displayWidth-50);
      fruit2.velocityY = 5;
      break
      case 4: fruit2.y = displayHeight-50;
      fruit2.x = random(0,displayWidth-50);
      fruit2.velocityY = -5;
      break;
      default:break;

    }
    
  }
}

function F3(){
  if(World.frameCount%180===0){
    
    fruit3=createSprite(random(0,400),400,20,20);
    fruit3.addImage(fruit3i);
    fruit3.scale=0.3
    fruit3.velocityY=-5;
    fruit3.lifetime=100;
    fruit3Group.add(fruit3);

    var r = Math.round(random(1,4));
    switch(r){
      case 1: fruit3.x = 0;
      fruit3.y = random(0,displayHeight-50);
      fruit3.velocityX = 5;
      break;
      case 2: fruit3.x = displayWidth-50;
      fruit3.y = random(0,displayHeight-50);
      fruit3.velocityX = -5;
            
      break;
      case 3: fruit3.y = 0;
      fruit3.x = random(0,displayWidth-50);
      fruit3.velocityY = 5;
      break;
      case 4: fruit3.y = displayHeight-50;
      fruit3.x = random(0,displayWidth-50);
      fruit3.velocityY = -5;
      break;
      default:break;

    }
    
  }
}

function F4(){
  if(World.frameCount%200===0){
    
    fruit4=createSprite(random(0,400),400,20,20);
    fruit4.addImage(fruit4i);
    fruit4.scale=0.3
    fruit4.velocityY=-5;
    fruit4.lifetime=100;
    fruit4Group.add(fruit4);
    
    var r = Math.round(random(1,4));
    switch(r){
      case 1: fruit4.x = 0;
      fruit4.y = random(0,displayHeight-50);
      fruit4.velocityX = 5;
      break;
      case 2: fruit4.x = displayWidth-50;
      fruit4.y = random(0,displayHeight-50);
      fruit4.velocityX = -5;
            
      break;
      case 3: fruit4.y = 0;
      fruit4.x = random(0,displayWidth-50);
      fruit4.velocityY = 5;
      break;
      case 4: fruit4.y = displayHeight-50;
      fruit4.x = random(0,displayWidth-50);
      fruit4.velocityY = -5;
      break;
      default:break;

    }
  }
}
     
    
   
    



