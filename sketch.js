var button;
var input_h, input_v;
var place, group_place;
var azul, vermelho, branco;
var time = 1;
var sprite;
var player = "1";
var player1, player2;

function preload(){
 azul = loadImage("azul.png");
 vermelho = loadImage("vermelho.png");
 branco = loadImage("branco.png");

}

function setup(){

  button = createButton("criar");
  button.position(100,100);

  input_h = createInput("k horizontal", "number");
  input_v = createInput("k vertical", "number");

  group_place = createGroup();
  sprite = createSprite(100,100,10,10);

  input_h.position(100,150);
  input_v.position(100,175);

  player1 = createSprite(225,220);
  player2 = createSprite(225,270);
}

function draw(){
  createCanvas(3000,3000);
  background("pink");
  
  textSize(20);
  fill("blue");
  text("PLAYER 1:", 100, 230);
  fill("red");
  text("PLAYER 2:", 100, 280);

  time +=1;

  sprite.x = mouseX;
  sprite.y = mouseY;


  azul.resize(50,50);
  vermelho.resize(34,34);
  branco.resize(34,34);

  player1.addImage(azul);
  player2.addImage(vermelho);

  button.mousePressed(Create);

  sprite.overlap(group_place, 
    function change(sprite, place){
     if(mouseDown("leftButton") && time > 15){
      if(player == "1"){
        place.addImage(azul);
        player = "2"
      }  
      else{
        place.addImage(vermelho);
        player = "1";
      }
      time = 0;
     }
    }
  )

  drawSprites();

}

function Create (){
  
  for(var i = 0; i < (input_h.value() - 2); i++){
    
    place = createSprite(534 + i*34, 100,50,50);
    place.addImage(branco);
    group_place.add(place);
    place = createSprite(534 + i*34, 100 + (input_v.value() -1) * 34,50,50);
    place.addImage(branco);
    group_place.add(place);
    
  }
  for(var i = 0; i < input_v.value(); i++){
    
    place = createSprite(500, 100 + i*34,50,50);
    place.addImage(branco);
    group_place.add(place);
    place = createSprite(500 + (input_h.value()-1)*34, 100 + i*34,50,50);
    place.addImage(branco);
    group_place.add(place);
    
  }
  
}