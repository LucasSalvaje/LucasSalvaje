var r = 40;
var canvas;
var fr = 25;
var grow = false;
var rMin = 40;
function setup() {
    pixelDensity(2.0);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.class("canvas");
    canvas.parent('canvasContainer');
    frameRate(fr);
}

function draw() {
     noFill();
    //fill(255, 255, 255);
    stroke(r);
    strokeWeight(1);
    ellipse(mouseX, mouseY, r, r);
/*
    if (grow == true) {
        r *= 1.07;
    } else {
        r *= 0.76;
        if (r <= 50) {
            r = rMin;
            clear();
            ellipse(mouseX, mouseY, r, r);
        } else {
            //clear();
        }
    }
    */

}

function mousePressed() {
    grow = true;
    //r += 10;
}

function mouseReleased() {
    grow = false;
    // clear();
}

function mouseMoved() {
    clear();
    ellipse(mouseX, mouseY, r, r);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}