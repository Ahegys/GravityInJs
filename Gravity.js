let canvas = document.querySelector('canvas')
let wid = canvas.getContext('2d')

let gravity = 0.9

let ball = {
    radius:30,
    vx:Math.floor(Math.random()*10)+1,
    vy:0,
    x:50,
    y:50,
    color:"#00f",
    held:false
}

const loop = () =>{
    window.requestAnimationFrame(loop, canvas);
    update();
    render();
}
const update = () =>{
    if(!ball.held){
        ball.vy += gravity;
        ball.y += ball.vy;
        ball.x += ball.vx;
    }else{
        ball.vy = 0;
        ball.vx = 0;
    }
    //fazer a bola quicar
    if(ball.y + ball.radius > canvas.height){
        ball.y = canvas.height -ball.radius
        ball.vy *= -0.8;
    }
    //quicar nas paredes
    if(ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width){
        ball.x = ball.x - ball.radius < 0 ? ball.radius: canvas.width - ball.radius;
        ball.vx *= -0.8;

    }

}
const render = () =>{
    wid.clearRect(0,0,canvas.width,canvas.height);
    wid.fillStyle = ball.color;
    wid.beginPath();
    wid.arc(ball.x,ball.y,ball.radius,0,Math.PI*2);
    wid.closePath();
    wid.fill();
}
loop();
