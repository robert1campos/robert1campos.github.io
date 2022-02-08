(function() {
    'use strict';

    AOS.init();

})();

function setup(){
    const myBoard = createCanvas(668, 668);

    myBoard.parent('myBoard');
    background(255);
}

function draw(){
    if(mouseIsPressed){
        strokeWeight(12.0);
        strokeCap(ROUND);
        stroke(150);
    } else {
        stroke(255,0);
    }
    line(mouseX, mouseY, pmouseX, pmouseY);
}

function mouseReleased(){
    clear();
}

var pageTop;
var bodyTag = document.querySelector('body');

    window.addEventListener('scroll', function(){
    pageTop = window.pageYOffset;

    switch(true){
        case pageTop < 900: bodyTag.className="white";
        break;
        case pageTop < 1200: bodyTag.className="grey";
        break;
        default: bodyTag.className="black";
        }
});