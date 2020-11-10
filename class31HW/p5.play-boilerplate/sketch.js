const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var plinkos=[];
var particles=[];
var divisions=[];
var divisionHeight=300;
//var stand1,stand2,stand3,stand4,stand5,stand6,stand7

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);

  engine=Engine.create();
  world=engine.world;

  /*stand1 = new Ground(0, 680, 5, 200);
  stand2 = new Ground(80, 680, 10, 200);
  stand3 = new Ground(170, 680, 10, 200);
  stand4 = new Ground(250, 680, 10, 200);
  stand5 = new Ground(330, 680, 10, 200);
  stand6 = new Ground(410, 680, 10, 200);
  stand7 = new Ground(475, 680, 5, 200);*/

for(var k=0;k<=width;k++){
 divisions.push(k,height-divisionHeight/2,10,divisionHeight)
}

  ground=new Ground(0,780,1200,10);

  for (var j = 75; j <=width; j=j+50) 
  {
       plinkos.push(new Plinko(j,75,10));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {  
     plinkos.push(new Plinko(j,175,10));
  }

   for (var j = 75; j <=width; j=j+50) 
  {  
     plinkos.push(new Plinko(j,275,10));
  }

   for (var j = 50; j <=width-10; j=j+50) 
  {  
     plinkos.push(new Plinko(j,375,10));
  }


}

function draw() {
  background(0);  
  Engine.update(engine);
 
  
  ground.display();


  for (var j = 0; j < plinkos.length; j++) {
      plinkos[j].display();    
  }
  
  for (var i = 0; i < particles.length; i++) {
      particles[i].display();
  }



  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    
  }
  for (var k=0;k<divisions.length;k++){
    divisions[k].display();
}



 

  /*stand1.display();
  stand2.display();
  stand3.display();
  stand4.display();
  stand5.display();
  stand6.display();
  stand7.display();*/
  
  
   
  drawSprites();


}



