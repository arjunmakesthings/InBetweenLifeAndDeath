class Food {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.r = r;
    this.alive = true;
    this.containTog = false; 
  }

  show() {
    if (this.alive == true) {
      fill(120);
    }
push(); 
    rectMode (CENTER); 
    rect(this.pos.x, this.pos.y, this.r, this.r);
    pop(); 
  }

  contains (px, py){
   var d  =dist (px, py, this.pos.x, this.pos.y); 
    if (d<this.r){
      foodEaten = foodEaten+1; 
      if (stage>2){
      eatSound.play();
      }
      return true; 
      
    }else {
     return false;  
    }
  }
}