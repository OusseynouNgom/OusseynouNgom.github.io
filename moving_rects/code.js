let brush = document. getElementById("c") .getContext("2d")
let w = 400 
let h = 400 
let size = 20;
let x = w / 2 - size / 2; // x of square 
let y = 0; 
let dy = 0;  // increase along y 
let dx = 5; //  increase along x 
let jumpImpact = 20; // the speed increase upward 
let g = 2; // gravity 
let timer = null; // timer id 
let isleft = false 
let isRight = false 
let isOnground = false

let bulletx = x 
let bullety = y 
let bulletDy = 20 
let isFire = false 
let bulletsize = 5 

function drawbullet () {
    brush.fillStyle = "#000000"
    brush.fillRect (bulletx, bullety, bulletsize, bulletsize)
}

document.addEventListener("keydown", onkeydown);
document.addEventListener("keyup", onkeyup);
drawbackground();
drawsquare();

function drawFrame() {
    if (isFire) {
        bullety -= bulletDy
    } else {
        bulletx = x
        bullety = y
    }
    if (bullety < 0) {
        isFire = false
    }
    // Apply Gravity 
    dy += g;

    // Update postion 
    y += dy;
    if (isleft) {
        x -= dx // x = x -dx 
    }
    if (isRight) {
        x += dx 
    }
    // check if the square is at the bottom 
    if (y > h - size ) {
        y = h - size;
        dy = 0;
        isOnground = true 
    } else {
        isOnground = false 
    }

    if (x <-size) {
        x = w - size; 
    }
    if (x > w) {
        x = 0; 
    }

    drawbackground();
    drawsquare();
    drawbullet();
}

function drawbackground() {
    brush.fillStyle = "#AAAAAA";
    brush.fillRect(0, 0, w, h);
}

function drawsquare() {
    brush.fillStyle = "#FF0000";
    if (x < 0) {
        brush.fillRect(x, y, size, size);
        brush.fillRect(w + x, y, size, size);
    } else if (x > w - size) {
        brush.fillRect(x, y, size, size); 
        brush.fillRect(x - w, y, size, size);
    } else {
        brush.fillRect(x, y, size, size);
    }
}

function onkeydown(e) {
    if (e.key === "Enter"){
        clearInterval(timer);
        y = 0;
        timer = setInterval(drawFrame, 20);
    } else if (e.key === "ArrowLeft") {
        isleft = true
        x -= dx // x = x - dx  
    } else if (e.key === "ArrowRight") {
        isRight = true 
        x +=dx; // x = x + dx 
    } else if (e.key === " ") {
        // check if the square is on the ground before allowing a jump 
    if (y === h - size ) {
        dy -= jumpImpact;

    }
    if (isOnground) {
        dy -=jumpImpact
    }
 } else if (e === "ArrowUp") {
    isFire = true
 }
}

function onkeyup(e) {

    if (e.key ==="ArrowLeft") {
        isleft = false
    } else if (e.key === "ArrowRight") {
        isRight = false
    } else if (e.key === " ") {
        
    }
}


