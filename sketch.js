var canvas;
var backgroundImg,forest;
var manImage
var champ1Image, champ2Image, champ3Image, champ4Image, champ5Image, champ6Image, champ7Image, champ8Image, champ9Image, champ10Image, champ11Image, champ12Image;
var appleImage, bananaImage, pineappleImage, orangeImage;
var startImage;
var endImage;
var scoreImage;
var lifeImage;
var distance=0;
var boy1, boy2, boy3, boy4, boy5, boy6, boy7, boy8;

var man_running;
var chimpanzee_running;
function preload() {
  backgroundImg = loadImage("./assets/Background.png")
  appleImage = loadImage("./assets/apple2.png")
  bananaImage = loadImage("./assets/banana2.png")
  pineappleImage = loadImage("./assets/pineapple2.png")
  orangeImage = loadImage("./assets/orange2.png")

  chimpanzee_running = loadAnimation("./assets/champ1.png", "./assets/champ2.png", "./assets/champ3.png", "./assets/champ4.png", "/assets/champ5.png", "./assets/champ6.png", "./assets/champ7.png", "./assets/champ8.png", "./assets/champ9.png", "./assets/champ10.png", "./assets/champ11.png", "./assets/champ12.png");
  boy_running = loadAnimation("./assets/boy1.png", "./assets/boy2.png", "./assets/boy3.png", "./assets/boy4.png", "./assets/boy5.png", "./assets/boy6.png", "./assets/boy7.png", "./assets/boy8.png",);
}

function setup() {





  canvas = createCanvas(1600, 1200);
forest = createSprite(300,200)

forest.addImage(backgroundImg)
forest.velocityX=17
forest.velocityX = (6 + 15*distance/100);
  boy = createSprite( 450,325, 100, 100);
  boy.addAnimation("running", boy_running);
  boy.scale = 0.3
  chimpanzee = createSprite( 550, 335, 100, 100);
  chimpanzee.addAnimation("running", chimpanzee_running);
  chimpanzee.scale = 1.5
}

function draw() {
  background("white")

 
  


  drawSprites();
  distance=distance+Math.round(getFrameRate()/50)
 forest.velocityX=(6+15*distance/150)
 console.log(forest.velocityX);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
