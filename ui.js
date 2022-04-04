let textOp = 0; 
let frames = 0; 
let time = 0; 

let fadedOut=false; 
let fadingOut = false; 

let lines; 
let prompt;

let promptOp = 0;

function ui(){
    time = int(frames/60);
  textFont (captions);
  textSize (24);  
  fill (255, textOp);
  text (lines, width/2, height-70); 

  
      if (fadingOut==false){
    fadeIn(); 
    }
  
  if (fadingOut==true){
   fadeOut();  
  }
  
  story();
}

function story(){
textAlign (CENTER);
    if (stage==0){
      if (dial ==0){
   lines = 'You find yourself as matter in space, floating in and out of consciousness.'; 
    if (time>3){
     fadingOut = true;  
    }
  }
    if (dial ==1){
      fadingOut=false;
   lines = 'Would you like to wake up?'; 
    if (stage==1){
     fadingOut = true;  
    }
  }
        }
  
  if (stage==1){
        if (dial ==2){
      fadingOut=false;
   lines = 'Something does not feel right.'; 
    if (time>2){
     fadingOut = true;  
    }
  }
    
            if (dial ==3){
      fadingOut=false;
   lines = 'Is the world getting bigger?'; 
    if (time>1){
     fadingOut = true;  
    }
  }
    
            if (dial ==4){
      fadingOut=false;
   lines = 'Or are you getting smaller?'; 
    if (time>1){
     fadingOut = true;  
    }
  }
    
                if (dial ==5){
      fadingOut=false;
   lines = "It's definitely you."; 
    if (time>2){
     fadingOut = true;  
    }
  }
    
                if (dial ==6){
      fadingOut=false;
   lines = 'You must find food.'; 
    if (time>4){
      stage=2;
     //fadingOut = true;  
    }
  }
    
  }
  
  if (stage==3.5){
    stage=3.7;
  }
  if (stage==3.7){
    if (dial ==7){
      fadingOut=false;
   lines = 'Ah. That feels better.'; 
    if (time>2){
     fadingOut = true;  
    }
  }
        if (dial ==8){
      fadingOut=false;
   lines = 'You must eat in order to survive.'; 
    if (time>2){
     fadingOut = true;  
            stage = 4;
  }
  }
}
  
  if (stage==5.5){
   if (dial==9){
           fadingOut=false;
   lines = 'Woah. What was that?'; 
    if (time>1){
     fadingOut = true; 
    }
   }
  }
  
  if (stage==5.8&time>7){
   fadingOut=true;  
  }
  
       if (dial==10){
           fadingOut=false;
   lines = 'These other particles seem hostile.'; 
    if (time>2){
     fadingOut = true; 
    }
       }

           if (dial==11){
           fadingOut=false;
   lines = 'You might want to protect yourself by staying away from them.'; 
    if (time>2){
     fadingOut = true;
    }
   }
  
  if (stage>=6){
   armourStat();  
  } //Armour Stat
  
  if (stage==7){
    if (dial==12){
      fadingOut=false; 
     lines = "Whew. Looks like that was the last of them." 
      
      if (time>2){
        fadingOut=true;
      }
    }
    
        if (dial==13){
      fadingOut=false; 
     lines = "It feels safe. Safer than before."      
      if (time>2){
        fadingOut=true;
      }
    }
          if (dial==14){
      fadingOut=false; 
     lines = "But what's the point?"      
      if (time>1){
        fadingOut=true;
      }
    }
              if (dial==15){
      fadingOut=false; 
     lines = "Why be in this vast land all alone?"      
      if (time>1){
        fadingOut=true;
        stage =8; 
      }
    }
  }
  
  if (stage==8){
     if (dial==16){
      fadingOut=false; 
     lines = "Hey, what is that?"
       
      if (time>1){
        fadingOut=true;
      }
    }
         if (dial==17){
      fadingOut=false; 
     lines = "That particle seems similar to you. Try interacting with it."
       
      if (time>2){
        fadingOut=true;
      }
    }
  }
  
  if (stage>=8){
       loveStat();  
  }
  
  if (stage==9){
    if (dial==18){
       fadingOut=false; 
     lines = "Looks like you found a companion."
      if (time>3){
        fadingOut=true;
      }
    }
    if (dial==19){
           fadingOut=false; 
     lines = "Cherish & protect it. "
       
      if (time>3){
        fadingOut=true;
        stage = 10;
      }
    }
  }
  
  if (stage==11){
     if (dial==20){
       fadingOut=false; 
     lines = "Wow. Look at you!"
      if (time>2){
        fadingOut=true;
      }
    }
    
         if (dial==21){
       fadingOut=false; 
     lines = "You've made it this far."
      if (time>1){
        fadingOut=true;
      }
    }
             if (dial==22){
       fadingOut=false; 
     lines = "You're healthy, safe and have a companion."
      if (time>2){
        fadingOut=true;
      }
    }
                 if (dial==23){
       fadingOut=false; 
     lines = "Makes you wonder whether there's more to it, doesn't it?"
      if (time>4){
        heroR=60;
        fadingOut=true;
        stage =12;
      }
    }
  }
  
  if (stage==12){
   if (dial==23){
            fadingOut=false; 
     lines = "Interact with the others and form your own network."
      if (time>8){
        fadingOut=true;
      }
   }
  }
  
  if (stage>=12){
    friendNumberStats(); 
  }
  
}

function prompts(){
  textFont (promptFont); 
  textSize (14); 
  fill (150, promptOp); 
  
  textAlign (CENTER); 
  
  if (dial==1&stage==0){
    prompt = 'CLICK TO WAKE UP'; 
  text (prompt, width/2, height/2+(64+10)); 
  
  blink(); 
}
  
  if (stage==2){
        prompt = 'CLICK ON THE FOOD PARTICLE TO EAT IT.'
    text (prompt, food[0].pos.x, food[0].pos.y+35); 
    blink (); 
  }
  
  if (stage==8){
     if (loverAccept==false){
   text ("TRY CHANGING YOUR APPROACH", lover[1].x, (lover[1].y+lover[1].r));  
    blink(); 
  } 
  }
}

function fadeIn(){
  if (textOp<255){
   textOp=textOp+5; 
  }
  if (textOp==255){
    frames++; 
  }
}

function fadeOut(){
  if (textOp>0){
   textOp= textOp-5; 
  }
  if (textOp==5){
     reset();
  }
}

let inc = true; 
  
  function blink(){
  if (promptOp<=255&inc == true){
  promptOp=promptOp+4; 
  }
  
  if (promptOp==256){
    inc=false; 
  }
  
  if (inc == false){
    promptOp=promptOp-4; 
  }
  
  if (promptOp<=0){
    inc = true; 
  }
}

function reset(){
 frames=0; 
  time=0;
dial=dial+1; 
}

let foodStat; 

function foodStats(){
  rectMode (LEFT); 
  //Object
  noFill();
  strokeWeight (1); 
  stroke (190); 
  rect (138, 47, 150, 11); 
  
    foodStat = map(heroR, 0, 120, 0, 150, true); 
  
  //Fill
  fill (190); 
  noStroke(); 
  rect (138, 47, foodStat, 11); 

  //Text
  textFont (statFont); 
  textSize (16); 
  fill (225); 
  
  text ('NUTRITION', 70, 47+11); 
  
  
  //Changing data for the parameter
  //foodStat = map (mouseX, 0, width, 0, 150); 
}

let safety;


function armourStat(){ 
  var distanceOfEnemy; 
  
  //Object
  noFill();
  strokeWeight (1); 
  stroke (190); 
  rect (138, 84, 150, 11); 
  
  //Fill
  fill (190); 
  noStroke(); 
  rect (138, 84, safety, 11); 

  //Text
  textFont (statFont); 
  textSize (16); 
  fill (225); 
  
  text ('SAFETY', 70, 84+11); 

  if (stage==6|stage==10|stage==13){
   safety = 30;  
  }
  else {
   safety = 120; 
  }
  
  //safety = map(distanceOfEnemy, width, 0, 0, 150);
  
}

let lovedStats;

function loveStat(){
   //Object
  noFill();
  strokeWeight (1); 
  stroke (190); 
  rect (404, 47, 150, 11); 
  
  //Fill
  fill (190); 
  noStroke(); 
  rect (404, 47, lovedStats, 11); 

  //Text
  textFont (statFont); 
  textSize (16); 
  fill (225); 
  
  text ('LOVE', 355, 47+11); 
  
      lovedStats = map(dooriyaan, width, 0, 0, 150); 
  
}

let socialOut; 

function friendNumberStats(){
   //Object
  noFill();
  strokeWeight (1); 
  stroke (190); 
  rect (404, 84, 150, 11); 
  
  //Fill
  fill (190); 
  noStroke(); 
  rect (404, 84, socialOut, 11); 

  //Text
  textFont (statFont); 
  textSize (16); 
  fill (225); 
  
  text ('ESTEEM', 355, 84+11); 
  
      socialOut = map(friendNumber, 0, 20, 0, 150, true); 
}
