var ballx = 30;
var bally = 30;
var speed= 0;
var gravity = 0.1;

function setup()
{	//setup function that
	createCanvas(900,900);
	//background(0,0,255);
}
function draw()
{	
    background(0,0,255);
    textSize(45);	
    text('Welcome', 10,30);
    
    strokeWeight(2);
    stroke(255,69,0);
    fill(255,69,0);
    ellipse(ballx,bally,60,60);
    
    bally = bally + speed;
    speed = speed + gravity;
    ballx = ballx + 0.8;
    
    if (bally > 900)
    {
        speed = speed * -0.95;
    }
    
    if (ballx > 900)
    {
        ballx = 30;
        bally = 30;
        speed = 0;
    }
}