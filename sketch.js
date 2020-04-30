const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var sun,sunimg;
var my,myimg;
var ve,veimg;
var ear,earimg;
var mar,marimg;
var ju,juimg;
var saturn,saturnimg;
var uranus,uranusimg;
var neptune,neptuneimg;
var engine, world;

function preload(){
sunimg=loadImage("sun1.png");
myimg=loadImage("mer.png");
earimg=loadImage("ear.png");
veimg=loadImage("ve.png")
marimg=loadImage("mar.png")
juimg=loadImage("ju2.png")
uranusimg=loadImage("uranus.png")
neptuneimg=loadImage("neptune.png")
saturnimg=loadImage("saturn.png")
}
function setup() {
  createCanvas(1400,640);
  engine = Engine.create();
  world = engine.world;
  sun =createSprite(700,290,20,20);
  sun.addImage("sun",sunimg);
  sun.setCollider("circle",0,0,102);
  
  my=createSprite(840,183,20,20);
  my.addImage("my",myimg);
   ve=createSprite(450,270,20,20);
   ve.addImage("ve",veimg);
   ear=createSprite(950,470,20,20);
   ear.addImage("ear",earimg);
   mar=createSprite(500,60,20,20);
   mar.addImage("mar",marimg);
   ju=createSprite(1100,150,20,20);
   ju.addImage("ju",juimg);
   uranus=createSprite(1250,410,20,20);
  uranus.addImage("uranus",uranusimg);
  neptune=createSprite(120,180,20,20);
  neptune.addImage("neptune",neptuneimg);
  saturn=createSprite(260,510,20,20);
  saturn.addImage("saturn",saturnimg);
}

function draw() {
  background(0); 
  Engine.update(engine);
  if (frameCount%50===0) {
  sun.scale=sun.scale+0.1;
  }
  if(sun.collide(my)){
    my.destroy();
  }
  if(sun.collide(ve)){
    ve.destroy();
  }
  if(sun.collide(ear)){
    ear.destroy();
  }
  if(sun.collide(mar)){
    mar.destroy();
  }
  if(sun.collide(ju)){
    ju.destroy();
  }
  if(sun.collide(saturn)){
    saturn.destroy();
  }
  if(sun.collide(uranus)){
    uranus.destroy();
  }
  if(sun.collide(neptune)){
    neptune.destroy();
  }     
  drawSprites();
}