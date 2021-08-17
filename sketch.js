const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas,computerbase,playerbase,Player,computerPlayer;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   computerbase= new ComputerBase(300,random(450,height-300),180,150);
   playerbase= new ComputerBase(950,random(450,height-300),180,150);
   computerPlayer= new computerplayer(285,computerbase.body.position.y-153,50,180);
 Player= new computerplayer(955,playerbase.body.position.y-153,50,180);
 }

function draw() {

  background(180);

  Engine.update(engine);

   //Display Playerbase and computer base 
   computerbase.display();
  playerbase.display();
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);


   //display Player and computerplayer
computerPlayer.display();
Player.display();
}
