let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext('2d');

let pause = false;

$('#pause').on('click', function(){
    pause =true;
});

$('#continue').on('click', function(){
    pause =false;
    requestAnimationFrame(bouge);
});

const rayon =50;

function centre(){
    return {x: 200,
            y: 100,
            dx: 4,
            dy: 3,
            coul:"blue"}
}

function dessine(o){
    c.beginPath();
    c.strokeStyle = "blue";
    c.arc(o.x, o.y, rayon, 0, 2*Math.PI, true);
    c.fillStyle = "blue"
    c.fill();
    c.stroke();
}

function maj(o){
    if( o.x + rayon >= innerWidth || o.x -rayon <= 0){
        o.dx = -o.dx
    }
    if( o.y + rayon >= innerHeight || o.y -rayon <= 0){
        o.dy = -o.dy
    }
    
    o.x += o.dx;
    o.y += o.dy;
    dessine(o);

}
let o = centre();

function bouge(){
    requestAnimationFrame(bouge);
    if (pause){return;}
    c.clearRect(0, 0, innerWidth, innerHeight);
    maj(o)
}

bouge();
