class Lover {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.col = color(252, 108, 133);
    this.time = 0;
    this.timeStore = [];
    this.timeTaken = 0;
    this.moving = false;
    this.mouseOnTarget = false;
    this.acceptable = false; 
    this.colliding = false; 
    this.inLove = false; 

    this.leeway = heroR*2;
    
      this.xSpeed = random(-3, 3);
  this.ySpeed = random(-3, 3);
  }

  display() {
    fill (this.col); 
    ellipse(this.x, this.y, this.r, this.r);
  }

  move() {
    if (this.inLove == false){
      if (this.x < 0 || this.x > width) this.xSpeed *= -1;
  if (this.y < 0 || this.y > height) this.ySpeed *= -1;
  this.x += this.xSpeed;
  this.y += this.ySpeed;
  }
  }
  
  detectMouse (){
   if (
    (mouseX < this.x + this.r / 2 + this.leeway) &
    (mouseX > this.x - this.r / 2 - this.leeway) &
    (mouseY < this.y + this.r / 2 + this.leeway) &
    (mouseY > this.y - this.r / 2 - this.leeway)
  ) {
    this.mouseOnTarget = true;
  } else {
    this.mouseOnTarget = false;
  } 
  }
  
  checkSpeed(){
    if (this.inLove==false){
   this.timeStore[0] = 0;

  //Boolean toggle for moving object
  if (mouseX != int(heroX)& mouseY!=int(heroY)) {
    this.moving = true;
    this.timeStore[1] = this.time;
  } else {
    this.moving = false;
  }

  var dis = int(dist(heroX, heroY, this.x, this.y));

  if (this.moving == true) {
    this.time = this.time + 1;
    this.timeTaken = this.timeStore[1] - this.timeStore[0];
    this.dis = int(dist(heroX, heroY, this.x, this.y));
    this.speed = int(this.dis / this.timeTaken);
  } else {
    this.speed = 0;
    dis = 0;
    this.time = 0;
  }
  }
  }
  
  colourChange(){
  if (this.mouseOnTarget==true&&this.speed>2){
   this.col = color (255, 0, 0);  
    this.acceptable =false; 
    loverAccept = false;
  }
    else {
     this.col = color(252, 108, 133);
      loverAccept = true; 
    }
    if (this.speed<1){
      this.acceptable = true; 
    }
  
  }
  
  collission(){
var d = dist(this.x, this.y, heroX, heroY); 
    dooriyaan = d; 
    if (d<this.r){
      this.x = this.x + heroR; 
      this.y = this.y + heroR; 
      this.colliding = true; 
    }else {
      this.colliding=false; 
     this.move();  
    }
  }
  
  repelOrAccept (){
    if (this.acceptable == true&& this.colliding == true){
      this.inLove = true; 
    }
    if (this.inLove==true){
      this.x = heroX+heroR; 
      this.y = heroY;         
    this.r = heroR; 
      loverInLove = true;
    }
  }
}