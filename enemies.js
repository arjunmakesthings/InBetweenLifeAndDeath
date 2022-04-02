class Enemies {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.r = r;
    
    this.finalXPos = random (100, width-100); 
    var finalYpos; 
    
   this.transp = 255; 
        this.speed = random (8,12); 
    
    this.xHistory = []; 
    this.yHistory = []; 
    this.fade = 255; 
  }
  
  display (){
    fill (196, 30, 58, this.transp); 
    ellipse (this.pos.x, this.pos.y, this.r, this.r); 
  }
  
  move (){
    this.pos.x = lerp (this.pos.x, this.finalXPos, 0.007); 
    this.pos.y+=this.speed; 
  }
  
  collision (px, py){
   var d = dist(px, py, this.pos.x, this.pos.y); 
    
    if (d<this.r){
      return true; 
    } else {
     return false;  
    }
  } 
  
    trail (){
    this.fade=this.fade-10; 
   this.xHistory.push(this.pos.x); 
    this.yHistory.push(this.pos.y); 
    
    if (this.xHistory.length>this.speed){
     this.xHistory.splice( 0,1); 
      this.yHistory.splice( 0,1); 
    }
  
    for (var i = 0; i<this.xHistory.length; i++){
      var posX = this.xHistory[i]; 
      var posY = this.yHistory[i]; 
      
      fill (color(196, 30, 58, this.fade)); 
      ellipse (posX, posY, this.r, this.r); 
    }
  }
}
