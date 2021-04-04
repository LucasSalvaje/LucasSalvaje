
var canvas;
var fr = 120;
var grow = false;
var rMin = 40;
var rMax = 460;
var radRect = 4;
var rAcc = 0;

var intro = true;
var x = 0;
var y = 0;

var cx = 100;
var cy = -10;
var r = 40;
var time = 0;
var preTime = 0;
var desp = 0;
var direction = true;

var reductionVal =   0.98;

var rot = 0;
var rMap = 1.0;
var dirRot = 1;

var clearAll = true;

var touch = 0;

var colorC;



function setup() {
    pixelDensity(1.0);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.class("canvas");
    canvas.parent('canvasContainer_yellow');
    frameRate(fr);
    fill('rgba(237,238,240,1)');
    rectMode(CENTER);
    angleMode(DEGREES);
}


function draw() {
    noCursor();
    time = millis() / 1000.0;
    touch *= 0.8;
    var current = createVector(mouseX, mouseY);
    var previous = createVector(pmouseX, pmouseY);
    var dir = p5.Vector.sub(current, previous);
    var magnitude = dir.mag();

    if (intro == false) {
        if (grow == false) { // hacer que cambie el tamaño con el speed
            if (magnitude > windowWidth / 10) {
                rAcc += magnitude / 2;
            }
            if (rAcc > 0) {
                r += rAcc / 2;
                if (r >= rMax) r = rMax;
                rAcc -= rAcc / 4;
            } else {}
        }

        var R = 237;
        var G = 238;
        var B = 240;

        B = B - touch * 2;

        // MAS VIVOS
        //colorC=map(r, rMin, rMax, 0, 198); // DEGRADADO DE CALIDO A FRIO
        //fill(265-(colorC),228-(colorC),-40+(colorC)); 
        // FRIO A CALIDO
        colorC=map(r, rMin, rMax, 0, 255); // DEGRADADO DE CALIDO A FRIO
        //fill(265-(colorC),228-(colorC),-40+(colorC)); 
        fill(0+(colorC),-90+(colorC),255-(colorC));
        stroke(0+(colorC),-90+(colorC),255-(colorC));
        strokeWeight(33);
        // PASTEL
        //colorC=map(r, 0, rMax, 50, 196); // DEGRADADO DE CALIDO A FRIO
        //fill(295-(colorC),295-(colorC),0+(colorC)); 

        // COLOR CAMBIA CON EL SPEED

        //stroke(28,29,30);
        var strokeRad = 0;
        if (r >= rMin + 10) {
            strokeRad = 0;
        } else {
            strokeRad = 0;
        }
        strokeWeight(strokeRad);
        if (grow == true) {
            r *= 1.06;
            if (r >= rMax) r = rMax;
        } else {
            r *= reductionVal;
            if (r <= 50) {
                r = rMin;
                if (clearAll) clear();

            } else {
                if (clearAll) clear();
            }
        }
    } else {
        stroke(0, 15, 22);
        strokeWeight(2 + r / 15);
        fill(255);
    }
    // si se mueve el mouse dibujar la ellipse en el mouse

    radRect = map(r, rMin, rMax, r/10, r*2);
    translate(x, y);
    rot = frameCount * map(r, rMin, rMax, 1, 1.2) * rMap;
    rotate(rot * dirRot);

    if (intro == false && mouseX != 0 && mouseY != 0) {
        x = mouseX;
        y = mouseY;
        //rot = map(rot,rMin/2,rMax/2,0,45);
        rect(0, 0, r, r, radRect);
    }

}

function mousePressed() {
    reductionVal = 0.98;
    grow = true;
    rAcc += 90;
    touch + 80;
    rMap = 4 * map(r, rMin, rMax, 1, 2);
    clearAll = false;
}

// REDUCIR DESPUES DE MOVER

function mouseDragged() { 
if(r<rMin+40 && grow == false){
        grow = true;
        rAcc += 90;
        touch + 80;
        rMap = 4 * map(r, rMin, rMax, 1, 2);
        clearAll = false;
    } else if(r>rMax-1){
        grow = false;
        rMap = 1;
    }   
}


function mouseReleased() {
    grow = false;
    clear();
    rMap = 1;
    clearAll = true;
    reductionVal = 0.76;
}

function mouseMoved() {
    intro = false;
    //clear();
    rect(0, 0, r, r, radRect);

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
