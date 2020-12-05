const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score = 0;
var backgroundImg;

function preload(){
  polygonImage=loadImage("polygon.png");
  getBackgroundImg();
}

function setup() {
  createCanvas(1000,600);
  stroke(255)
  engine=Engine.create();
  world=engine.world;

  //RIGHT Row1:
  block1=new block(350,131,25,25);
  block2=new block(380,131,25,25);
  block3=new block(410,131,25,25);
  block4=new block(440,131,25,25);
  block5=new block(470,131,25,25);
  //RIGHT Row2:
  block6=new block(365,106,25,25);
  block7=new block(395,106,25,25);
  block8=new block(425,106,25,25);
  block9=new block(455,106,25,25);
  //RIGHT Row3:
  block10=new block(380,81,25,25);
  block11=new block(410,81,25,25);
  block12=new block(440,81,25,25);
  //RIGHT Row4:
  block13=new block(395,56,25,25);
  block14=new block(425,56,25,25);
  //RIGHT Row5:
  block15=new block(410,31,25,25);
  //LEFT Row1:
  block16=new block(140,231,25,25);
  block17=new block(170,231,25,25);
  block18=new block(200,231,25,25);
  block19=new block(230,231,25,25);
  block20=new block(260,231,25,25);
  block21=new block(290,231,25,25);
  block22=new block(320,231,25,25);
  //LEFT Row2:
  block23=new block(155,206,25,25);
  block24=new block(185,206,25,25);
  block25=new block(215,206,25,25);
  block26=new block(245,206,25,25);
  block27=new block(275,206,25,25);
  block28=new block(305,206,25,25);
  //LEFT Row3:
  block29=new block(170,181,25,25);
  block30=new block(200,181,25,25);
  block31=new block(230,181,25,25);
  block32=new block(260,181,25,25);
  block33=new block(290,181,25,25);
  //LEFT Row4:
  block34=new block(185,156,25,25);
  block35=new block(215,156,25,25);
  block36=new block(245,156,25,25);
  block37=new block(275,156,25,25);
  //LEFT Row5:
  block38=new block(200,131,25,25);
  block39=new block(230,131,25,25);
  block40=new block(260,131,25,25);
  //LEFT Row6:
  block41=new block(215,106,25,25);
  block42=new block(245,106,25,25);
  //LEFT Row7:
  block43=new block(230,81,25,25);
  //Ground:
  ground1=new Ground(800,1400,500,25);
  ground2=new Ground(500,350,1500,25);
  //OTHER:
  polygon=new Polygon(100,200,20,20);
  slingShot = new SlingShot(polygon.body,{x:100,y:200});
}

function draw() {
  if(backgroundImg){
 background(backgroundImg); 
  }
 Engine.update(engine) 

 text("SCORE : "+ score, 500, 20);

 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 block13.display();
 block14.display();
 block15.display();
 block16.display();
 block17.display();
 block18.display();
 block19.display();
 block20.display();
 block21.display();
 block22.display();
 block23.display();
 block24.display();
 block25.display();
 block26.display();
 block27.display();
 block28.display();
 block29.display();
 block30.display();
 block31.display();
 block32.display();
 block33.display();
 block34.display();
 block35.display();
 block36.display();
 block37.display();
 block38.display();
 block39.display();
 block40.display();
 block41.display();
 block42.display();
 block43.display();
 ground1.display();
 ground2.display();
 slingShot.display();
 polygon.display();
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
  if(keyCode === LEFT_ARROW)
  {
    if(keyIsDown(LEFT_ARROW))
    {
      camera.position.x=camera.position.x-10;
    }
  }
} 

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingShot.attatch(polygon.body);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      bg = "bg1.png";
  }
  else{
      bg = "bg2.png";
  }

  backgroundImg = loadImage(bg);
}