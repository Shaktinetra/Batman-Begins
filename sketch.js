const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var man_image;
var maxDrops = 100;
var drops = [];
var umbrella;
var thunderCreatedFrame, thunder;
var thunder1Img, thunder2Img, thunder3Img;

function preload(){
  man_image = loadImage("Batman.jpg");
  thunder1Img = loadImage("thunder1.png");
  thunder2Img = loadImage("thunder2.png");
  thunder3Img = loadImage("thunder3.png");
}

function setup(){
  var canvas = createCanvas(500,500);

  engine = Engine.create();
  world  = engine.world;
  
  umbrella = new Umbrella();

  if((frameCount%100)===0){
    for(var i=0; i<maxDrops;i++){
      drops.push(new Drop(random(0,400),random(0,400)));
    }
  }
}

function draw(){
  imageMode(CENTER);
  background(0);

  umbrella.display();

  for(var i=0; i<maxDrops; i++){
    drops[i].display();
    drops[i].update();
  }

  //creating thunder
  var rand = Math.round(random(1,3));

  if((frameCount%100)===0){
      thunderCreatedFrame = frameCount;
      thunder = createSprite(random(10,370), random(10,30), 10, 10);
      switch(rand){
          case 1: thunder.addImage(thunder1Img);
          break;
          case 2: thunder.addImage(thunder2Img);
          break; 
          case 3: thunder.addImage(thunder3Img);
          break;
          default: break;
      }

      thunder.scale = random(1, 3);
      thunder.lifetime = 20;

  } 
    Engine.update(engine);

    drawSprites();
}