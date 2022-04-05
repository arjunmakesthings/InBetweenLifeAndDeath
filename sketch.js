//Music
var mainScore; 
var eatSound; 
var throbSound; 
var enemySound; 
var breathSound;

let gameEnded = false; 
let skipIntroToggle = false;

let introOp=0;
let capOp = 0; 
let introPromptOp = 0; 

var heroX = 0; 
var heroY = 0; 
var heroR = 0;

let stage = 0; 
let dial = 0;

let mouseClick = false; 

let heroXHistory = [];
let heroYHistory = []; 

let gameStart = false; 

//Stage 1
  let food = [];
var foodEaten = 0; 

let amountOfFood = 60; 

//Stage 2 Declare
let enemies = []; 

//Stage 3
let lover = []; 
let dooriyaan = 0; 
let loverAccept; 
let loverInLove = false; 
let loverKilledStatus = false;

//Stage 4
let friend = []; 
let assemble = false; 
let other; 

//For ending
let aliveTime = 0;

let friendNumber = 0;

let probabilityToDie = 0; 

let captions; 
let promptFont; 
let statFont; 

function preload(){
  captions = loadFont ('EBGaramond-Regular.ttf'); 
  promptFont = loadFont ('FiraCode-Regular.ttf'); 
  statFont = loadFont ('FiraCode-SemiBold.ttf'); 
  
  //Music
  mainScore = loadSound ("MainScoreLow.mp3"); 
  eatSound = loadSound ("Eating.mp3"); 
  enemySound = loadSound ("Swoosh.mp3"); 
  throbSound = loadSound ("newPulse.mp3");
  breathSound = loadSound ("BreathSound.mp3");
  //gaspSound = loadSound ("Gasp.mp3"); 
}

function setup() {
  createCanvas(windowWidth, windowHeight); 
  
  //Music
  mainScore.setVolume(0.08); 
  eatSound.setVolume (0.001); 
  throbSound.setVolume(1);
  breathSound.setVolume(0.7);
  enemySound.setVolume(1); 
  
  mainScore.play();
    mainScore.loop();

  
  //Creation of food array. 
      for (let i = 0; i <1; i++) {
    food[i] = new Food(
      random(75, width - 75),
      random(100, height - 100),
      random(7, 25)
    );
  }
  
    //Creating Enemies
    for (let i =0; i<1; i++){
  enemies [i] = new Enemies(0+random(50, width-50), 0, heroR);
  }
  
    //Creating lover
  for (let i = 0; i<1; i++){
    lover[i] = new Lover (random(100, width-100), random (100, height-100), heroR);
  }
  
  //Creating friends
    for (let i =0; i<3; i++){
  friend [i]= new Friend (random(100, width-100), random (100, height-100), heroR); 
  }
  
    preload();
}

function draw() {
  background(0);

  if (gameStart==false){
    introScreen();
    
    if (capOp>=255){
     beginGamePrompt(); 
    }
  }

  
  if (gameStart==true){      
  //Adding seconds to alive time
    aliveTime = int(frameCount/int(frameRate())); 
    
    //Stage changes function 
  stageChange(); 
  
  //Calling UI Function
    if (gameEnded==false){
  ui (); 
  prompts(); 
    }
  
  //Calling heroObject Function
  heroObject(); 
  }


}

function heroObject(){
  fill(220);
  noStroke(); 
  
  //print (heroR); 
  if (stage>0){
  heroX = lerp(heroX, mouseX, 0.07);
  heroY = lerp(heroY, mouseY, 0.07);
  }else {
    if (stage==0){
    heroX = width/2; 
    heroY = height/2; 
    
    blobPulsate(); 
    }
  }
  ellipse(heroX, heroY, heroR, heroR);
}
  let goUp = true; 

function blobPulsate(){
  if (heroR<=64&goUp == true){
  heroR=heroR+0.5; 
  }
  
  if (heroR==64){
    goUp=false; 
  }
  
  if (goUp == false){
    heroR=heroR-0.5; 
  }
  
  if (heroR == 0){
    goUp = true; 
  }
}

function mouseClicked(){
 if (mouseClicked){
    mouseClick = true; 
 }else {
  mouseClick = false;
 }
  
  if (gameStart==false&capOp>=255){
   if (mouseClicked){
     throbSound.play();
    gameStart=true;
     mouseClick=false;
   }
  }
}

function mousePressed(){

}

function introScreen(){
 let statements = []; 
  statements [0] = 'in';
  statements [1] = 'between';
  statements [2] = 'life';
  statements [3] = '&';
  statements [4] = 'death.';
  statements [5] = 'An experience programmed by Arjun Yadav. Music mixed by Atreyo Roy. '
  
noStroke();
  fill (255, introOp);
  textSize (64);
  
  appear();
  push(); 
  translate (width/2.40, height/3.7); 
  textFont (captions);
  textAlign (LEFT, TOP);
  text (statements [0], 27, 0.05); 
  text (statements [1], 92, 95); 
  text (statements [2], 0.6, 197.7); 
  text (statements [3], 105, 305); 
  text (statements [4], 154, 404); 
  pop();
  
  if (introOp>=255){
    if (capOp<=255){ 
   capOp++; 
    }
  }
  fill (100, capOp);
  textSize (16); 
  textFont (statFont);
  textAlign (CENTER); 
  text (statements[5], width/2, height-70);
}

function appear(){
if (introOp<=255){
 introOp++;  
}else {
 if (introOp==255){
  introOp=255;  
 }
}
}

function beginGamePrompt(){
      startPrompt = 'CLICK ANYWHERE TO BEGIN'; 
  textFont (promptFont);
  textAlign (CENTER);
  fill (100, introPromptOp);
  textSize (14);
  text (startPrompt, width/2, 140); 
  
  startBlink(); 
}

let Intinc = true;

function startBlink(){
   if (introPromptOp<=255&Intinc == true){
  introPromptOp=introPromptOp+4; 
  }
  
  if (introPromptOp==256){
    Intinc=false; 
  }
  
  if (Intinc == false){
    introPromptOp=introPromptOp-4; 
  }
  
  if (introPromptOp<=0){
    Intinc = true; 
  } 
}

