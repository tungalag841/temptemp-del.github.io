let Canvas = document.getElementById('canvas');
Canvas.width = innerWidth; 
Canvas.height = innerHeight;
let ctx = Canvas.getContext('2d');
// ctx.fillStyle = "red";
// ctx.fillRect(100,100,200,200)//x,y,width,height
// ctx.fill();
let x;
let y;
let vx ;
let vy ;
let paddleWidth, paddleHeight;
let paddle1X, paddle1Y;
let paddle2X, paddle2Y;
let ballRadius = 10;
let ball = [1,-1];
function init(){
    x = Canvas.width/2;
    y = Canvas.height/2;
    paddleWidth = 20;
    paddleHeight =100;
    paddle1X = 10;
    paddle1Y = Canvas.height/2 - paddleHeight/2;
    paddle2X = Canvas.width -10-paddleWidth;
    paddle2Y = Canvas.height/2 - paddleHeight/2;
    vx = ball[Math.floor(Math.random()*ball.length)];
    vy = ball[Math.floor(Math.random()*ball.length)];
    ballRadius = 10;
}

init();
addEventListener('keydown', move);
function move(event){//uildliig sonsono
    switch(event.key){
        case "w":
            paddle1Y-=10;
            break
        case "s":
            paddle1Y+=10;
            break
        case 'ArrowUp':
            paddle2Y-=10;
            break
        case 'ArrowDown':
            paddle2Y+=10;
    }
    
}

setInterval(()=>{
    ctx.beginPath(); //ymar negen ym zurah gj baigaag zaaj ugnu
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,Canvas.width,Canvas.height);
    ctx.fillStyle = 'black';
    ctx.fillRect(paddle1X,paddle1Y,paddleWidth,paddleHeight);
    ctx.fillRect(paddle2X,paddle2Y,paddleWidth,paddleHeight)
    // ctx.strokeStyle = "red";
    ctx.arc(x+vx,y,ballRadius,0,Math.PI*2, true)//x,y,radius,0-haanaas ehelj zurahiig zaana,toirog, nar zow bolon buruu zuragdahiig zaaj ugnu
    ctx.fill();
    // ctx.stroke(); //zuraas gargaj irne
    ctx.closePath() //harandaagaa avah
    if(x+ballRadius == Canvas.width){
        // vx = -1;
        init();
    }
    if(x-ballRadius === 0){
        // vx = 1;
        init();
    }
    if(y+ballRadius >= Canvas.height){
        vy = -1;
    }
    if(y-ballRadius <= 0){
        vy = 1;
    }
    if(x-ballRadius < paddle1X + paddleWidth){ 
        vx = -vx;
    }
    if(x + ballRadius > paddle2X + paddleWidth){
        vx = -1
    }
    x+=vx;
    y+=vy;
},1)


