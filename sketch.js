
var sea; 
var sea,ship1,ship2,ship3,ship4;


function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation(ship1.png,ship2.png,ship3.png,ship4.png);
}

function setup(){
  createCanvas(400,400);
  //creating sea
  seacreateSprite(200,100,400,20);
  sea.addImage(seaImg); 
  sea.velocityX=-2;

  shipcreateSprite(200,100,400,20);
  ship.addTmage(shipImg);

  

  
}

function draw() {
  background("blue");
  if(sea.x < 0){
    sea.x = sea.width/2;
  }
 drawSprites();
}