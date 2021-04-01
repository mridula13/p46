 var bg1, bg2;
 var charImg, char;
 var form;
 var z1_img, z2_img, z3_img, z4_img, z5_img;
 var z1, z2, z3, z4, z5;
 var zombie;
 var gameState;
 gameState = "Intro";

 function preload(){
   bg1 = loadImage("images/start.png");
   bg2 = loadImage("images/z bg.jpg");

   charImg = loadImage("images/char p.png");

   z1_img = loadImage("images/z1.png");
   z2_img = loadImage("images/z2.png");
   z3_img = loadImage("images/z3.png");
   z4_img = loadImage("images/z4.png");
   z5_img = loadImage("images/z5.png");
 }


function setup() {
  createCanvas(displayWidth - 10, displayHeight - 130);
  form = new Form();

  char = createSprite(displayWidth/2 - 450, displayHeight/2 + 100, 20, 20);
  char.addImage(charImg);
  char.scale = 0.3;
  char.visible = false;

}

function draw() {
  background(bg1); 

  if(gameState == "Start")
  {
    background(bg2);

    char.visible = true;

    stroke("red");
    fill("red");
    textSize(30);
    text("GOOD LUCK!!", displayWidth/2 - 50, displayHeight/2 - 150);

    spawn();
  }

  form.display(); 
  drawSprites();
}

function spawn()
{
  if(frameCount % 60 == 0)
  {
   zombie = createSprite(displayWidth-50, displayHeight/2 + 100, 20, 20);

   zombie.velocityX = -5;
   
   var rand = Math.round(random(1,5));
   console.log(rand);

   switch(rand)
   {
    case 1: zombie.addImage(z1_img);
            zombie.scale = .3;
            break;
    case 2: zombie.addImage(z2_img);
            zombie.scale = .6;
            break;
    case 3: zombie.addImage(z3_img);
            zombie.scale = .5;
            break;
    case 4: zombie.addImage(z4_img);
            zombie.scale = .5;
            break;
    case 5: zombie.addImage(z5_img);
            zombie.scale = .5;
            break;
   }
  }
}