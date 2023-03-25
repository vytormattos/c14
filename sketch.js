var bow, arrow, backGround;
var bowImg, arrowImg, greenBalloonImg, redballoonImg, pinkballoonImg, blueballoonImg, backgroundImg;

var score = 0;

function preload() {

  backgroundImg = loadImage("background0.png");
  arrowImg = loadImage("arrow0.png");
  bowImg = loadImage("bow0.png");
  redballoonImg = loadImage("red_balloon0.png");
  greenBalloonImg = loadImage("green_balloon0.png");
  pinkballoonImg = loadImage("pink_balloon0.png");
  blueballoonImg = loadImage("blue_balloon0.png");


}



function setup() {
  createCanvas(400, 400);

  //crie o fundo
  backGround = createSprite(0, 0, 400, 400);
  backGround.addImage(backgroundImg);
  backGround.scale = 2.5

  // criando arco para a flecha
  bow = createSprite(380, 220, 20, 50);
  bow.addImage(bowImg);
  bow.scale = 1;



  score = 0
}

function draw() {
  background(0);
  // chão em movimento
  backGround.velocityX = -3

  if (backGround.x < 0) {
    backGround.x = backGround.width / 2;
  }

  //arco em movimento
  bow.y = World.mouseY

  // soltar arco quando a tecla espaço for pressionada
  if (keyDown("space")) {
    createArrow();

  }

  //criando inimigos continuamente
var select_balloon = Math.round(random(1,4));

  if (World.frameCount % 100 == 0) {
    switch (select_balloon) {
      case 1:
        redBalloon();
        break;
      case 2:
        greenBalloon();
        break;
      case 3:
        blueBalloon();
        break;
      case 4:
        pinkBalloon();
        break;
      default: break;
    }
  }

  drawSprites();
}


// Criar flechas para o arco
function createArrow() {
  var arrow = createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImg);
  arrow.x = 360;
  arrow.y = bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}

function redBalloon() {
  var red = createSprite(0, Math.round(random(20, 370)), 10, 10);
  red.addImage(redballoonImg);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
}

function blueBalloon() {
  var blue = createSprite(0, Math.round(random(20, 370)), 10, 10);
  blue.addImage(blueballoonImg);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;

}

function greenBalloon() {
  var green = createSprite(0, Math.round(random(20, 370)), 10, 10);
  green.addImage(greenBalloonImg);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
}

function pinkBalloon() {
  var pink = createSprite(0, Math.round(random(20, 370)), 10, 10);
  pink.addImage(pinkballoonImg);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1.4;
}
