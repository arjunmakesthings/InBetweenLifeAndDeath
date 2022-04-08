function stageChange(){
  if (stage<4){
  skipIntro(); 
  }
  
   if (stage>0){
  heroX = lerp(heroX, mouseX, 0.07);
  heroY = lerp(heroY, mouseY, 0.07);
  }else {
    if (stage==0){
    heroX = width/2; 
    heroY = height/2; 
    blobPulsate(); 
      if (dial==1){
           beginGameofLife();  
      }
    }
  }
  if (stage ==1){
  if (frameCount%60==1){
  heroR=heroR-1.5; 
    //mainScore.pause();
  }
} //HeroR reducing
  
  if (stage>=1){
   heroTrail();
  } //Initialise trail of Hero

  if (stage==2){
    foodEaten=0; 
    foodFunction(1); 
    //heroR=heroR-1.5; //Reduce Hero's radius everytime
        //Eating
    for (let i = 0; i < 1; i++) {
    if (food[i].contains(heroX, heroY)&mouseClick==true) {
      heroR = heroR+food[i].r*0.5; 
      food.splice(i, 1);          
      stage=3; 
      foodEaten=0; 
      eatSound.play();
      throbSound.stop()
  }
    }
  } //Onboarding of eating food
  
    if (stage==3){
    foodEaten = 0;
      stage=3.5;
  } //Transition of eating and foodEaten = 0
  
  if (stage==3.5){
   fadingOut=true;  
  } //Transition
  
  if (stage>=4){ //Initialise death and food comes
    death(); 
    if (heroR>=0){
     heroR=heroR-0.05;  
    }
    
    foodStats(); 
    
            if (frameCount % amountOfFood == 1) {
    let newFood = new Food(
      random(50, width - 50),
      random(50, height - 50),
      random(5, 20)
    );
    food.push(newFood);
            }
              
              //Eating
                for (let i = 0; i < food.length; i++) {
    if (food[i].contains(heroX, heroY)&mouseClick==true) {
            heroR= heroR+food[i].r*0.5;  
      food.splice(i, 1);
    }
  }

        //Food
      for (let i = 0; i < food.length; i++) {
    food[i].show();
    food[i].contains(); 
  }
  }
  
  if (foodEaten==9){
   stage = 5.5;  
  } //Increase stage
  
  if (stage==5.5){
              if (enemies.length<2) {
    //Creation of new food
    let newEnemies = new Enemies(0+random(50, width-50), 0, heroR); 
    enemies.push(newEnemies);
                enemySound.play();
  }
    
      for (let i = 0; i<enemies.length; i++){
  enemies[i].display();
  enemies[i].move(); 
  enemies[i].collision(); 
              if (enemies[i].pos.y<height){
    enemies[i].trail();
    }
        
        if (enemies[0].pos.y>height&stage==5.5){ //Escaped screen
          stage = 5.7; 
        }
    
    for (let i =0; i<enemies.length; i++){
     if (enemies[i].collision(heroX, heroY)){
      killed(); 
     }
    }
  }
  } //Enemies onboarding
  
  if (stage==5.7){
    stage=5.8;
  } //Transition
  
  if (dial==12||dial==11){
    stage=6; 
  } //Transition
  
  if (stage==6){
                 if (frameCount%120==1&stage==6&enemies.length<12) {
    //Creation of new enemies
    let newEnemies = new Enemies(0+random(50, width-50), 0, heroR); 
    enemies.push(newEnemies);
                   enemySound.play();
  }
    
      for (let i = 0; i<enemies.length; i++){
  enemies[i].display();
  enemies[i].move(); 
  enemies[i].collision(); 
              if (enemies[i].pos.y<height){
    enemies[i].trail();
    }
    
    for (let i =0; i<enemies.length; i++){
     if (enemies[i].collision(heroX, heroY)){
      killed(); 
     }
    }
  }
    
    if (enemies.length>=12){
     stage =7;  
    }
  } //Enemies first wave
  
  if (stage==8){
    if (lover.length<2){
let newLover = new Lover (random(100, width-100), random (100, height-100), heroR);
        lover.push(newLover); 
    }
    
    for (let i=0; i<lover.length; i++){
  lover[i].display(); 
  lover[i].move(); 
  lover[i].detectMouse(); 
  lover[i].colourChange(); 
  lover[i].checkSpeed();
      if (dial>=17){
  lover[i].collission(); 
      }
  lover[i].repelOrAccept();
    }
    
    //Removing bug of positions going of screen
     if (lover[1].x>width+(lover[1].r/3)|lover[1].x<0-(lover[1].r/3)|lover[1].y>height+(lover[1].r/3)|lover[1].y<0-(lover[1].r/3)){
   lover[1].x = width/2;
    lover[1].y=height/2; 
  }
    
    if (loverInLove==true){
     stage=9; 
    }

  } //Partner arrives

  if (stage>=9){
       lover[1].display(); 
    lover[1].repelOrAccept();
  } //Accept and heroPos is equal to companion
  
  if (stage==10){
                 if (frameCount%60==1) {
    //Creation of new enemies
    let newEnemies = new Enemies(0+random(50, width-50), 0, heroR); 
    enemies.push(newEnemies);
                   enemySound.play();
  }
    
                for (let i =0; i<enemies.length; i++){
     if (enemies[i].collision(lover[1].x, lover[1].y)){
      loverKilledStatus=true; 
     }
    }
    
      for (let i = 0; i<enemies.length; i++){
  enemies[i].display();
  enemies[i].move(); 
  enemies[i].collision(); 
              if (enemies[i].pos.y<height){
    enemies[i].trail();
    }
         
    for (let i =0; i<enemies.length; i++){
     if (enemies[i].collision(heroX, heroY)){
      killed(); 
     }
    }
  }
    
    if (enemies.length==22){
     stage =11; 
    }
    
    if (loverKilledStatus==true){
     loverKilled(); 
    }
  } //Enemies second wave
  
    if (stage==12){   
    if (friend.length<20){
      let newFriend= new Friend (random(100, width-100), random (100, height-100), heroR)
     friend.push(newFriend);  
    }
     //Friends
  for (let i = 0; i<friend.length; i++){
            if (friend[i].colliding==true){
    stroke (190); 
    strokeWeight (2); 
   line (heroX,  heroY, friend[i].x, friend[i].y); 
  }
    noStroke(); 
    
  friend[i].display(); 
  friend[i].move(); 
  friend[i].detectMouse(); 
  friend[i].collission(); 
  friend[i].bringTogether();
  }
      
                        for (let i = 0; i < food.length; i++) { //Everyone eats food.
                    for (let j = 0; j<friend.length; j++){
    if (food[i].contains(friend[j].x, friend[j].y)) {
            friend[j].r= friend[j].r+food[i].r*0.5;  
      food.splice(i, 1);
                    }
                    }
  }
      
      for (let i=0; i<friend.length; i++){
       if (friend[i].death==true){
        friend.splice(i,1);  
       }
      }
      
      amountOfFood = 20; 
      if (friendNumber==6){
       stage=13; 
      }
  } //Friends come
  
  if (stage==13){
    //gaspSound.play();
        assemble =true;
   
    for (let i =0; i<friend.length; i++){
  friend[i].display(); 
  friend[i].move(); 
  friend[i].detectMouse(); 
  friend[i].collission(); 
  friend[i].bringTogether();
  } //Friends displayed
    
          for (let i = 0; i<enemies.length; i++){
  enemies[i].display();
  enemies[i].move(); 
  enemies[i].collision(); 
              if (enemies[i].pos.y<height){
    enemies[i].trail();
    }
         
    for (let i =0; i<enemies.length; i++){
     if (enemies[i].collision(heroX, heroY)){
      killed(); 
     }
    }
  } // Enemies Displayed
   
    if (frameCount%30==1&stage==13) {
    //Creation of new enemies
    let newEnemies = new Enemies(0+random(50, width-50), 0, heroR); 
    enemies.push(newEnemies);
      enemySound.play();
  } //Enemies create
    
    if (enemies.length>=48){
     stage=14; 
    }
    
  } //Enemies third wave
  
  if (stage==14){
    assemble = false;
        if (friend.length<30){
      let newFriend= new Friend (random(100, width-100), random (100, height-100), heroR)
     friend.push(newFriend);  
    }
     //Friends
  for (let i = 0; i<friend.length; i++){
            if (friend[i].colliding==true){
    stroke (190); 
    strokeWeight (2); 
   line (heroX,  heroY, friend[i].x, friend[i].y); 
  }
    noStroke(); 
    
  friend[i].display(); 
  friend[i].move(); 
  friend[i].detectMouse(); 
  friend[i].collission(); 
  friend[i].bringTogether();
  }
      for (let j = 0; j<friend.length; j++){
                        for (let i = 0; i < food.length; i++) { //Everyone eats food.                    
    if (food[i].contains(friend[j].x, friend[j].y)) {
            friend[j].r= friend[j].r+food[i].r*0.5;  
      food.splice(i, 1);
                    }
                    }
  }
      
      for (let i=0; i<friend.length; i++){
       if (friend[i].death==true){
        friend.splice(i,1);  
       }
      }
      
      amountOfFood = 20; 
    
      if (frameCount%300==1){
   probabilityToDie = int(random(0, 11));  
  }
    
    if (probabilityToDie>7){
      deathByAge();
    }
  } //Final stable stage and probability of death.

}

function beginGameofLife(){
if (mouseX>heroX - (heroR/2)&mouseX<heroX + (heroR/2)&mouseY>heroY - (heroR/2)&mouseY<heroY + (heroR/2)){
  if (mouseClick==true){
  stage = 1;
    heroR = 64; 
    breathSound.play();
    fadingOut=true;
  mouseClick = false; 
}
}
}

function foodFunction(num){
     //Food
  for (let i = 0; i <num; i++) {
    food[i].show();
    food[i].contains(); 
  }
}

function death(){
     if (heroR<=0){
       gameEnded=true;
     fill (0); 
     rect (0, 0, width, height); 
     fill (255); 
       textFont (statFont);
     textSize (24); 
    text ('You died because you could not maintain the necessary state for survival.', width/2, height/2);

      textFont (promptFont); 
       textSize (14); 
       fill (190, 255); 
       text ('PLEASE RELOAD THE WEBPAGE TO BEGIN AGAIN.', width/2, height/2+36);
     noLoop(); 
   }
}

function killed(){
  gameEnded = true; 
  heroR = 0; 
       fill (0); 
     rect (0, 0, width, height); 
     fill (255); 
     textSize (24); 
  textFont (statFont);
    text ('You were killed by a hostile particle.', width/2, height/2);
  
       textFont (promptFont); 
       textSize (14); 
       fill (190, 255); 
       text ('PLEASE RELOAD THE WEBPAGE TO BEGIN AGAIN.', width/2, height/2+36);
     noLoop(); 
}

function loverKilled(){
  lover[1].r=0;
 lover[1].x=heroX; 
  lover[1].y=heroY; 
}

function deathByAge(){
  gameEnded = true;
  heroR = 0; 
       fill (0); 
     rect (0, 0, width, height); 
     fill (255); 
  textFont (statFont);
     textSize (24); 
    text ('It was only a matter of time. You lived gloriously for ' +aliveTime +' seconds.', width/2, height/2);
     noLoop(); 
}

function heroTrail(){
   //Trail
    heroXHistory.push(heroX);
  heroYHistory.push(heroY);
  
  for (var i = 0; i<heroXHistory.length; i++){
   var objX = heroXHistory[i]; 
    var objY = heroYHistory[i];
    noStroke();
    fill (255, 60); 
    
    ellipse (objX, objY, heroR, heroR);
    
    if (heroXHistory.length>4){
     heroXHistory.splice(0,1);
      heroYHistory.splice(0,1);
    }
  }  
}

