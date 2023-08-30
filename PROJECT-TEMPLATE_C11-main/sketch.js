var sea,ship,seaImg,shipImg1;

function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-2.png")
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  sea = createSprite()
  sea.addImage(seaImg);
  ship = createSprite(400,400)
  ship.addAnimation("shipping", shipImg1)
  ship.scale = 0.3
}

function draw() {
  background("blue");
    drawSprites();
    if(sea.x < 0){
      sea.x = sea.width/2;
    }
 
}
