var ball,position,database;
var x,y;
var x1,y1,fr,h1,h2;

function setup(){
    database = firebase.database();

    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "green";
  
    var ballposition = database.ref('ball/position');
    ballposition.on("value",readPosition);

    button1=createButton("eraser");
    button1.position(450,450)
    
}
var rects = [];
var size
function draw(){
    background("white");
  
    textSize(100);
    fill("red")
    text("Draw!",130,100) 
    textSize(25);
    text("Hold Down Left Click To Paint",100,150); 
    
   
    
    if(mouseIsPressed){
       
       rects = createSprite(mouseX,mouseY,10,10);
       rects.shapeColor = "lime";
    }
    ball.x = mouseX;
    ball.y = mouseY;

    
    if(button1.mousePressed){
        clear();

    }

    drawSprites();
}

function writePosition(x,y){
        database.ref('ball/position').set({
        'x':mouseX,
        'y':mouseY
    })
}
function readPosition(data){
    position = data.val();
        ball.x = position.x;
    ball.y = position.y;
}



