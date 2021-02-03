
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const body = Matter.body;

var paper,paperObject;
var ground;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);
	rectMode(CENTER);

    engine = Engine.create();
	world = engine.world;

    paperDiameter = 20;

	startPaperPositionX=width/4;
	startPaperPositionY=height/4+400;
	paper=new Paper(startPaperPositionX-paperDiameter*2,startPaperPositionY,paperDiameter);
    
    ground = new Ground(600,670,1200,20);

    
   boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);

	





	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);

  drawSprites();
  
  paper.display();
  ground.display();
  
}

function keyPressed(){

	if(keyCode === UP_ARROW){

       Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

	}
}
