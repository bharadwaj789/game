const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var bulletgrp;
var engine,world,captain;
var cap;
var villcount;
//var villian1
var villy_img;
var edges;
var villian;
var villygrp;
var bullet;
var life;
var life1,life2,life3,life4;
function preload(){
villy_img=loadImage("pics/chit.png");
captain=loadImage("pics/cap.png");
}
function setup() {
 var canvas= createCanvas(displayWidth,displayHeight-200);
 engine=Engine.create();
 world=engine.world;

cap=createSprite(displayWidth/2+500,displayHeight/2-50,150,250);
cap.addImage(captain);
cap.scale=0.5;
life1=createSprite(displayWidth-300,75,10,10);
life2=createSprite(displayWidth-250,75,10,10);
life3=createSprite(displayWidth-200,75,10,10);
life4=createSprite(displayWidth-150,75,10,10);
 //hero1=new hero(displayWidth/2+500,displayHeight/2-50,150,250);
 //villian1=new villian(displayWidth/2-650,displayHeight/2-50,150,250);
//villian1=createSprite(displayWidth/2-650,displayHeight/2-50,150,250);
//villian1.addImage(villy_img);
//villian1.scale=0.5;
villygrp=new Group();
bulletgrp=new Group();
villcount=0;
life=4;
}

function draw() {
background(255);  

//villian1.velocityX=1.5;

if(keyIsDown(DOWN_ARROW)){
cap.y=cap.y+10;
}

if(keyIsDown(UP_ARROW)){
  cap.y=cap.y-10;
  }

//if(keyDown leftArrow)
//{hero.pos=hero.pos+10}


//Engine.update(engine);
//hero1.display();
//villian1.display();

edges=createEdgeSprites();




villy();
if(keyDown("space")){
  createBullet();
}

if(bulletgrp.isTouching(villygrp)){
  for(var i=0;i<villygrp.length;i++){
    if(villygrp.get(i).isTouching(bulletgrp)){
      villygrp.get(i).velocityX=-10;
      villygrp.get(i).velocityY=8;
      bulletgrp.get(i).destroy();
      bulletgrp.get(i).velocityX=7;
      villcount++;
      
    }
  }
}
if(villygrp.isTouching(cap)){
  life=life-1;
}
  drawSprites();
}

function villy(){
if(frameCount%180===0){

  villian=createSprite(50,200,200,100);
  villian.y=Math.round(random(300,600));
  villian.velocityX=5;  
  villian.addImage(villy_img);
  villian.scale=0.45;
  villian.lifetime=displayWidth+50/5;
  villygrp.add(villian);


}
}

function createBullet(){

  bullet=createSprite(displayWidth/2+500,cap.y,40,40);
bullet.shapeColor="lightBlue";
//bullet.x=villian.x;
//bullet.y=villian.y;
bullet.velocityX=-5;
bulletgrp.add(bullet);
bullet.lifetime=displayWidth*2.1/5;
}
