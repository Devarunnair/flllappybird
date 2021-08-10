var flappybird,flappybirdImg;
var pipe,pipeImg;



function preload() {
  flappybirdImg = loadImage("Flappy_Bird_icon.png");
  pipeImg =  loadImage("pipe.png");

}
function setup() {
  createCanvas(600,600);
  flappybird = createSprite(205,216);
  flappybird.addImage(flappybirdImg);
  flappybird.scale = 0.5;
  

  pipe = createSprite(249,264);
  pipe.addImage(pipeImg);
  pipe.scale = 0.5;
  pipe.depth = flappybird.depth;
  pipe.velocityX = 1;

}
function draw() {
  background("white");
  drawSprites();
}