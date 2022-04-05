class Friend {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.col = 150;
    this.time = 0;
    this.timeStore = [];
    this.timeTaken = 0;
    this.moving = false;
    this.mouseOnTarget = false;
    this.acceptable = false; 
    this.colliding = false; 
    this.inLove = false; 
    
    this.death = false; 

    this.leeway = heroR*2;
    
      this.xSpeed = random(-0.5, 0.5);
  this.ySpeed = random(-0.5, 0.5);
    
    this.angle = 0+5; 
    
    this.placement = random (heroR+20, heroR+40); 
  }

  display() {
    fill (this.col); 
    ellipse(this.x, this.y, this.r, this.r);
    
    this.r=this.r-0.05; 
    
    if (this.r<=1){
     this.death=true; 
    }
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
  
  collission(){
    if (assemble==false){
var d = dist(this.x, this.y, heroX, heroY); 
    if (d<this.r){
      this.x = this.x + heroR; 
      this.y = this.y + heroR; 
      this.colliding = true; 
       friendNumber=friendNumber+1; 
      this.col = ('#9ADBB3');
    }else {
     this.move();  
    }
  }
  }
  
bringTogether(){
 if (assemble==true){
   //rotate (random (0, TWO_PI)); 
   if (this.colliding!=false){
   //push(); 
     this.x = lerp (this.x, heroX, 0.08); 
     this.y = lerp (this.y, heroY, 0.08); 
   //translate (width/2, height/2); 
   //rotate (this.angle); 
   //pop(); 
 }else {
  this.move();  
 }
}
}
  
  intersects (other){
   let d = dist (this.x, this.y, other.x, other.y); 
    if (d<this.r+other.r){
     return true;  
    }else {
     return false;  
    }
  }
  
  death (){
   if (this.death==true){
    this.r = 0;
   }
  }
}
