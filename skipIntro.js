function keyPressed(){
  if (key==='s'|key==='S'){
   skipIntroToggle=true; 
  }
}

function skipIntro(){
 if (skipIntroToggle==true){
  stage=4; 
    dial = 9;
    foodEaten = 0;
    fadingOut=true;
   gameEnded=false;
   //gameStart = true;
   mouseClick = true;
    heroR=30; 
   skipIntroToggle=false;
 }
}