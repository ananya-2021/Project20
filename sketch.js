var garden,gardenImg;
var cat,catImg,catImg2,catImg3;
var mouse,mouseImg,mouseImg2,mouseImg3;

function preload() {
    //load the images here
    gardenImg = loadImage("images/garden.png");
   
    catImg = loadImage("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadImage("images/cat4.png");
    
    mouseImg = loadImage("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    
    //create tom and jerry sprites here
    garden = createSprite(500,400);
    garden.addImage(gardenImg);

    cat = createSprite(800,600);
    cat.addImage(catImg);
    cat.scale = 0.2;

    mouse = createSprite(200,600);
    mouse.addImage(mouseImg);
    mouse.scale = 0.1;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide    
    keyPressed();

    if(cat.x - mouse.x < cat.width - mouse.width){
        cat.addAnimation("catStanding",catImg3);
        cat.changeAnimation("catStanding",catImg3);
        cat.velocityX = 0;
    
        mouse.addAnimation("mouseStanding",mouseImg3);
        mouse.changeAnimation("mouseStanding",mouseImg3);
    }    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown("left_arrow")){
    cat.addAnimation("catRunning",catImg2);
    cat.changeAnimation("catRunning",catImg2);
    cat.velocityX = -5;

    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing",mouseImg2);
  }

}
