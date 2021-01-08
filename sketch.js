var truck,truckImage;

var background1,backgroundImage;
var path1,path1Image;
var path,pathImage;
var car1,car1Image;
var car2,car2Image;
var car3,car3Image;
var car4,car4Image;



function preload(){
  truckImage=loadImage("images/t1.png");
  backgroundImage=loadImage("images/road.jpg");
  car1Image=loadImage("images/car1.png");
  car2Image=loadImage("images/car2.png");
  car3Image=loadImage("images/car3.png");
  car4Image=loadImage("Images/car4.png");
  
  path1Image=loadImage("images/path1.png");
  //pathImage=loadImage("images/path.png");

}
function setup() {

  createCanvas(1000,800);
   
  


  background1=createSprite(500,700,1000,1000);
  background1.addImage("background",backgroundImage);
  background1.scale=2;

  /*path1=createSprite(100,700,50,50);
  path1.addImage("path1",path1Image);
  path1.velocityY=-10;

  path=createSprite(900,700,50,50);
  path.addImage("path",pathImage);
  path.scale=2;
  path.velocityY=-10;*/

  background1.velocityY=10;
   



  truck=createSprite(500,500,70,70);
  truck.addImage("truck",truckImage);
  truck.scale=0.7;
  

  
}

function draw() {
  background(0);  
  if(keyDown("up")){
    truck.y=truck.y-5;

  }
  if(keyDown("down")){
    truck.y=truck.y+5;

  }
  if(keyDown("right")){
    truck.x=truck.x+5;

  }
  if(keyDown("left")){
    truck.x=truck.x-5;
 
  }
  
  if(background1.y>500){
    background1.y=400;
   
  }
 /* if(path1.y<200){
    path1.y=500;
  }*/
  

 // console.log(background1.y);



  drawSprites();
  cars();
}
function cars(){

if(frameCount%50===0){
  car1=createSprite(300,300,50,50);
  car1.addImage("car1",car1Image);
  car1.velocityY=10;
  car1.x=Math.round(random(150,800));
  console.log(truck.depth);
  
  car1.depth=truck.depth;
  truck.depth=truck.depth+1;
}

if(frameCount%150===0){
  car2=createSprite(300,300,50,50);
  car2.addImage("car2",car2Image);
  car2.velocityY=10;
  car2.x=Math.round(random(200,450));
  console.log(truck.depth);
  car2.scale=0.3;
  
  car2.depth=truck.depth;
  truck.depth=truck.depth+1;
}

if(frameCount%250===0){
  car3=createSprite(300,300,50,50);
  car3.addImage("car3",car3Image);
  car3.velocityY=10;
  car3.x=Math.round(random(300,650));
  console.log(truck.depth);
  car3.scale=0.3;
  
  car3.depth=truck.depth;
  truck.depth=truck.depth+1;
}

if(frameCount%350===0){
  car4=createSprite(300,300,50,50);
  car4.addImage("car4",car4Image);
  car4.velocityY=10;
  car4.x=Math.round(random(482,700));
  console.log(truck.depth);
  car4.scale=0.3;
  
  car4.depth=truck.depth;
  truck.depth=truck.depth+1;
}
}