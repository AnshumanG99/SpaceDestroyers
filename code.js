var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["eeca3264-1a25-439a-a8ca-dda2bef6e8f9","1eed9bad-1133-4d85-bf4b-0547f4d3d8f9","af904ec4-805d-449f-b23a-71036bd4c897","523ff9e0-041c-498b-a279-d9943a188a61","4a75f30d-9b87-4cd8-bde7-07726c0f6b73","9d4f0026-47f1-4540-a152-f2bc175cdb0d","aed8f987-8433-438b-b0dc-d2549e4050b2","6ca8974c-6876-4c20-af52-d33f70e3e2b8","545943d8-1562-4c4b-a29f-1ca121c0e73a","1484e62f-fa8a-4772-acd5-055d6ee3d933"],"propsByKey":{"eeca3264-1a25-439a-a8ca-dda2bef6e8f9":{"name":"rocketship","sourceUrl":null,"frameSize":{"x":552,"y":414},"frameCount":1,"looping":true,"frameDelay":12,"version":"LpiESiaEsvcGAcm8ms_HiYehP3uGxiuH","loadedFromSource":true,"saved":true,"sourceSize":{"x":552,"y":414},"rootRelativePath":"assets/eeca3264-1a25-439a-a8ca-dda2bef6e8f9.png"},"1eed9bad-1133-4d85-bf4b-0547f4d3d8f9":{"name":"enemy","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"ju_z2VV3ml9c4lJZe.UvPI4z9.7w8tT2","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/1eed9bad-1133-4d85-bf4b-0547f4d3d8f9.png"},"af904ec4-805d-449f-b23a-71036bd4c897":{"name":"laser","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"RRoMzp_uuLivBLAQjq4JbB.huewSwDK2","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/af904ec4-805d-449f-b23a-71036bd4c897.png"},"523ff9e0-041c-498b-a279-d9943a188a61":{"name":"tripleshotpowerup","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"_oF4iPz_qzAZIMkNPXaEiqwnPJZEnEBy","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/523ff9e0-041c-498b-a279-d9943a188a61.png"},"4a75f30d-9b87-4cd8-bde7-07726c0f6b73":{"name":"pressstart","sourceUrl":null,"frameSize":{"x":357,"y":55},"frameCount":1,"looping":true,"frameDelay":12,"version":"Vfk7xQNtnlGB9HwzY5xdSGWshFLT4HaL","loadedFromSource":true,"saved":true,"sourceSize":{"x":357,"y":55},"rootRelativePath":"assets/4a75f30d-9b87-4cd8-bde7-07726c0f6b73.png"},"9d4f0026-47f1-4540-a152-f2bc175cdb0d":{"name":"gameover","sourceUrl":null,"frameSize":{"x":136,"y":131},"frameCount":2,"looping":true,"frameDelay":12,"version":"_x_MZrSqegLLkbR.LfJFE4THwN9bL3SH","loadedFromSource":true,"saved":true,"sourceSize":{"x":136,"y":262},"rootRelativePath":"assets/9d4f0026-47f1-4540-a152-f2bc175cdb0d.png"},"aed8f987-8433-438b-b0dc-d2549e4050b2":{"name":"rocketexplosion","sourceUrl":null,"frameSize":{"x":384,"y":384},"frameCount":4,"looping":true,"frameDelay":12,"version":"1f_M5JiiViztGOR4szRNiRTgIV_FKbqW","loadedFromSource":true,"saved":true,"sourceSize":{"x":768,"y":768},"rootRelativePath":"assets/aed8f987-8433-438b-b0dc-d2549e4050b2.png"},"6ca8974c-6876-4c20-af52-d33f70e3e2b8":{"name":"laserbeam","sourceUrl":null,"frameSize":{"x":133,"y":133},"frameCount":5,"looping":true,"frameDelay":4,"version":"MCTb_qUKBbZYtSIBgO9MojJELY0Lgr6C","loadedFromSource":true,"saved":true,"sourceSize":{"x":266,"y":399},"rootRelativePath":"assets/6ca8974c-6876-4c20-af52-d33f70e3e2b8.png"},"545943d8-1562-4c4b-a29f-1ca121c0e73a":{"name":"levelup","sourceUrl":null,"frameSize":{"x":300,"y":190},"frameCount":1,"looping":true,"frameDelay":12,"version":"y7HxaF4n2SRjCJbXrSJ444rdccze2BGC","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":190},"rootRelativePath":"assets/545943d8-1562-4c4b-a29f-1ca121c0e73a.png"},"1484e62f-fa8a-4772-acd5-055d6ee3d933":{"name":"startscreentext","sourceUrl":null,"frameSize":{"x":679,"y":521},"frameCount":1,"looping":true,"frameDelay":12,"version":"ISkMZiQCdzzXCc8caU8M4a7XAWQ0Fp0R","loadedFromSource":true,"saved":true,"sourceSize":{"x":679,"y":521},"rootRelativePath":"assets/1484e62f-fa8a-4772-acd5-055d6ee3d933.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Create Variables
var score = 0;
var lives = 3;
var cooldown = 0;
var starting = false;

//Create Player
var player = createSprite(200,350);
player.setAnimation("rocketship");
player.scale = 0.15;
player.setCollider("rectangle",0,0,400,300);

//Create Enemies
var enemy = createGroup();
var enemy1 = createSprite(randomNumber(20,380), randomNumber(-150,50));
var enemy2 = createSprite(randomNumber(20,380), randomNumber(-150,50));
var enemy3 = createSprite(randomNumber(20,380), randomNumber(-150,50));
var enemy4 = createSprite(randomNumber(20,380), randomNumber(-150,50));
var enemy5 = createSprite(randomNumber(20,380), randomNumber(-150,50));
var enemy6 = createSprite(randomNumber(20,380), randomNumber(-150,50));
var enemy7 = createSprite(randomNumber(20,380), randomNumber(-150,50));
var enemy8 = createSprite(randomNumber(20,380), randomNumber(-150,50));

enemy.add(enemy1);
enemy.add(enemy2);
enemy.add(enemy3);
enemy.add(enemy4);
enemy.add(enemy5);
enemy.add(enemy6);
enemy.add(enemy7);
enemy.add(enemy8);

enemy.setAnimationEach("enemy");
enemy.setScaleEach(0.5);


//Create Laser
var pblts = createGroup();

      
//Create Start
var start = createSprite(200,350);
start.setAnimation("pressstart");
start.setCollider("rectangle");
start.visible = true;

//Create Start Text
var starttext = createSprite(200,170);
starttext.setAnimation("startscreentext");
starttext.scale = 0.5;

//Create Game over
var gameover = createSprite(200,200);
gameover.setAnimation("gameover");
gameover.visible = false;

//Create Edge Sprites
createEdgeSprites();

//Create Laser Powerup
var laserbeam = createSprite(200, -100);
laserbeam.setAnimation("laserbeam");
laserbeam.scale = 0.6;

//Create Triple Shot Powerup
var tripleshot = createSprite(200,-150);
tripleshot.setAnimation("tripleshotpowerup");


//Create Level Up
var levelup = createSprite(200, 200);
levelup.setAnimation("levelup");
levelup.visible = false;

//Draw Loop
function draw(){
  openingscreen();
  background1();
  background2();
  background3();
  movement();
  fallingenemies(enemy1);
  fallingenemies(enemy2);
  fallingenemies(enemy3);
  fallingenemies(enemy4);
  fallingenemies(enemy5);
  fallingenemies(enemy6);
  fallingenemies(enemy7);
  fallingenemies(enemy8);
  lifedecrease(enemy1);
  lifedecrease(enemy2);
  lifedecrease(enemy3);
  lifedecrease(enemy4);
  lifedecrease(enemy5);
  lifedecrease(enemy6);
  lifedecrease(enemy7);
  lifedecrease(enemy8);
  levels(enemy1);
  levels(enemy2);
  levels(enemy3);
  levels(enemy4);
  levels(enemy5);
  levels(enemy6);
  levels(enemy7);
  levels(enemy8);
  
  leveluptimes();
  laserbeampowerup();
  tripleshotpowerup();
  edgespritescollide();
  endgame();
  topdisplay();
  cooldown +=1;
  drawSprites();
  
}


//Opening Screen
function openingscreen(){
  if (mousePressedOver(start)){
    starting = true;
  }
if (starting == true){
  background1();
  start.x = 1293481204821043;
  starttext.visible = false;
  enemy.setVisibleEach(true);
  pblts.setVisibleEach(true);
  player.visible = true;

}else{
  background("black");
  player.visible = false;
  enemy.setVisibleEach(false);
  pblts.setVisibleEach(false);
  text;
  }
}


//Endgame function

function endgame(){
  background("black");
  
}

//First Background
function background1(){
  background("black");
  noStroke();
  fill("white");
  ellipse(randomNumber(0,400), randomNumber(0,400), 3, 3);
  ellipse(randomNumber(0,400), randomNumber(0,400), 3, 3);
  ellipse(randomNumber(0,400), randomNumber(0,400), 3, 3);
  ellipse(randomNumber(0,400), randomNumber(0,400), 3, 3);
  ellipse(randomNumber(0,400), randomNumber(0,400), 3, 3);
  ellipse(randomNumber(0,400), randomNumber(0,400), 3, 3);
} 

//Second Background
function background2(){
  if (score>100){
  background("darkblue");
  noStroke();
  fill("white");
  ellipse(randomNumber(0,400), randomNumber(0,400), 3, 3);
  ellipse(randomNumber(0,400), randomNumber(0,400), 3, 3);
  ellipse(randomNumber(0,400), randomNumber(0,400), 3, 3);
  ellipse(randomNumber(0,400), randomNumber(0,400), 3, 3);
  ellipse(randomNumber(0,400), randomNumber(0,400), 3, 3);
  ellipse(randomNumber(0,400), randomNumber(0,400), 3, 3);
  }
}

//Third Background
function background3(){
    if (score>300){
  background(rgb(75,0,130));
  noStroke();
  fill("white");
  ellipse(randomNumber(0,400), randomNumber(0,400), 3, 3);
  ellipse(randomNumber(0,400), randomNumber(0,400), 3, 3);
  ellipse(randomNumber(0,400), randomNumber(0,400), 3, 3);
  ellipse(randomNumber(0,400), randomNumber(0,400), 3, 3);
  ellipse(randomNumber(0,400), randomNumber(0,400), 3, 3);
  ellipse(randomNumber(0,400), randomNumber(0,400), 3, 3);
  }
}

//Top Display
function topdisplay(){
  textFont("Courier New");
  stroke("white");
  strokeWeight(1);
  textSize(15);
  text("SCORE:", 20, 20);
  text(score, 80, 20);
  text("LIVES:",320, 20);
  text(lives, 380, 20);
}


//Movement Controls
function movement(){
  if (keyDown("right")){
  player.x = player.x + 5;
  }
  if (keyDown("left")){
    player.x = player.x - 5;
  }
  if (keyDown("space")){
    shooting();
  }
}

//Shooting
function shooting(){
  if (cooldown >= 10){
  var laser = createSprite(player.x, player.y);
  laser.setAnimation("laser");
  laser.setCollider("rectangle",3,0,5,20);
  laser.velocityY = -10;
  pblts.add(laser);
  cooldown=0;
  if (laser.isTouching(enemy)){
    pblts.destroyEach();
  }
  }
}


//Enemies
function fallingenemies(enemy1){
   if (starting == true){
    enemy1.setSpeedAndDirection(5,Math.atan2(player.y-enemy1.y,player.x-enemy1.x)*180/Math.PI);
    if(enemy1.isTouching(pblts)){
    enemy1.x=randomNumber(-20,420);
    enemy1.y = random(-20,-120);
    score++;
    }
   }
}

//Death 
function lifedecrease(enemy1){
  if (enemy1.isTouching(player)){
    enemy1.x = randomNumber(20,380);
    enemy1.y = randomNumber(-20,-120);
    playSound("assets/category_explosion/retro_game_take_damage_chirp_3.mp3");
    lives = lives-1;
  }
}

//Endgame
function endgame(){
  if (lives < 1){
    player.setAnimation("rocketexplosion");
    setTimeout(function(){
      player.destroy();
    }, 1000);
    enemy.destroyEach();
    pblts.destroyEach();
    laserbeam.destroy();
    levelup.destroy();
    gameover.visible = true;
  }
}

//Levels
function levels(enemy1){
  if (score>100){
  enemy1.setSpeedAndDirection(10,Math.atan2(player.y-enemy1.y,player.x-enemy1.x)*180/Math.PI);
  }
  
  if (score>300){
  enemy1.setSpeedAndDirection(12,Math.atan2(player.y-enemy1.y,player.x-enemy1.x)*180/Math.PI);
  }
}

//Player collides with Edge Sprites
function edgespritescollide(){
  player.collide(rightEdge);
  player.collide(leftEdge);
}


//Laser Powerup falls
function laserbeampowerup(){
  if (score>100){
  laserbeam.velocityY = 5;
  }
  

  
  if (player.isTouching(laserbeam)){
    laserbeam.x = player.x;
    laserbeam.y = player.y;
    laserbeam.visible = false;
      if (cooldown >= 2){
      var laser = createSprite(player.x, player.y);
    laser.setAnimation("laser");
      laser.setCollider("rectangle",3,0,5,20);
      laser.velocityY = -10;
      pblts.add(laser);
      cooldown=10;
      }
  }
  
  if (score > 200){
    laserbeam.x = 209810924830912431824093812409381243;
  }
}


//Tripleshot Powerup falls
function tripleshotpowerup(){
  if (score>300){
  tripleshot.velocityY = 5;
  }
  
  if (player.isTouching(tripleshot)){
    textSize(10);
    text("let go of the space bar to use this triple shot powerup! This will disappear at score 1000", 10, 390);
    tripleshot.x = player.x;
    tripleshot.y = player.y;
    tripleshot.visible = false;
  
  
  if (cooldown >= 10){
  var laser = createSprite(player.x, player.y);
  var laser2 = createSprite(player.x, player.y);
  var laser3 = createSprite(player.x, player.y);
  laser.setAnimation("laser");
  laser2.setAnimation("laser");
  laser3.setAnimation("laser");
  laser.setCollider("rectangle",3,0,5,20);
  laser2.setCollider("rectangle",3,0,5,20);
  laser3.setCollider("rectangle",3,0,5,20);
  laser.velocityY = -10;
  laser2.velocityY = -10;
  laser2.velocityX = 5;
  laser3.velocityY = -10;
  laser3.velocityX = -5;
  pblts.add(laser);
  pblts.add(laser2);
  pblts.add(laser3);
  cooldown=0;
   if (laser.isTouching(enemy)){
    laser.destroy;
   }
   if (laser2.isTouching(enemy)){
    laser2.destroy();
   }
   
  }
}
  
  if (score > 1000){
    tripleshot.x = 209810924830912431824093812409381243;
  }
}

//levelup
function leveluptimes(){
  if (score==101){
    levelup.visible = true;
  }
  if (score > 100){
    setTimeout(function() { 
      levelup.visible = false;
    },1000);
  }
}


  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
