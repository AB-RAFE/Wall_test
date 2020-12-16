var bullet,wall;
var speed,weight;
var thikness;
var DamageNum;
var Img,png;

function preload() {
  png = loadImage("death_PNG39.png");
}

function setup() {
  createCanvas(1600,400);
  speed  = random(223,321);
  weight = random(30,52);
  thikness = random(22,83);

  bullet = createSprite(50,200,50,10);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;
  
  wall = createSprite(1200,200,thikness,height/2);
  wall.shapeColor = rgb(80,80,80);

  img = createSprite(width/2,300,10,10);
  img.addImage(png);
  img.scale = 0.1;
}

function draw() {
  background("black");
  img.visible = false;
  if(hasCollided(bullet,wall)) {
    bullet.velocityX = 0;
    var Damage = 0.5*weight*speed*speed/(thikness*thikness*thikness);
    DamageNum = Math.round(Damage);
    if(Damage < 10) {
      wall.shapeColor = rgb(0,255,0);
      fill(rgb(0,255,0));
      textSize(30);
      text("Damage:"+DamageNum,width/2,height/2);
    }
    if(Damage > 10) {
      img.visible = true;
      wall.shapeColor = rgb(255,0,0);
      fill(rgb(255,0,0));
      textSize(30);
      text("Damage:"+DamageNum,800,200);
    }
  }


  drawSprites();
}

function hasCollided(lbullet,lwall) {
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge) {
    return true;
  }
  else {
    return false;
  }
}