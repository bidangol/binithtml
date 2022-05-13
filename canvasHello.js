const canvas = document.getElementById("house");
const ctx = canvas.getContext("2d");
   
ctx.beginPath();
ctx.bezierCurveTo(168, 10, 140, 83, 255, 60)

ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.bezierCurveTo(167, 10, 130, 90, 247, 80)
ctx.moveTo(117, 10, 85, 100, 229, 10);
ctx.lineTo(117, 10, 57, 110, 222, 101);
//ctx.fillStyle='orangered';
//ctx.fill();
ctx.stroke();


ctx.beginPath();
ctx.bezierCurveTo(168, 10, 140, 83, 255, 60)
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.bezierCurveTo(167, 10, 130, 90, 247, 80)

ctx.moveTo(255,60);
ctx.lineTo(200,25);
ctx.lineTo(265,50);

ctx.lineTo(270,45);
ctx.lineTo(230,10);
ctx.lineTo(275,30);
ctx.stroke();


const canvasRed = document.getElementById("redDeath");
const ctxRed = canvasRed.getContext("2d");
   
ctxRed.beginPath();
ctxRed.moveTo(100, 334);
ctxRed.bezierCurveTo( 210, 334, 100, 90, 250, 100); ctxRed.stroke();
ctxRed.closePath();


const canvasHuge = document.getElementById("HugeDeath");
const ctxHuge = canvasHuge.getContext("2d");
var y = 320;
ctxHuge.beginPath();
//ctxHuge.moveTo(20, 0);
ctxHuge.arc(100, y+75, 50, 0, 2*Math.PI);
ctxHuge.stroke();

ctxHuge.beginPath();
//ctxHuge.moveTo(20, 0);
ctxHuge.arc(218, y+45, 40, 0, 2*Math.PI);
ctxHuge.stroke();
   
// third biggest eye
ctxHuge.beginPath();
//ctxHuge.moveTo(20, 0);
ctxHuge.arc(315, y+20, 32, 0, 2*Math.PI);
ctxHuge.stroke();

// smallest eye
ctxHuge.beginPath();
//ctxHuge.moveTo(20, 0);
ctxHuge.arc(450, y+20, 15, 0, 2*Math.PI);
ctxHuge.stroke();

// nose
ctxHuge.beginPath();
ctxHuge.ellipse(70, y+175, 22, 40, 0.2, 0, 2*Math.PI);
ctxHuge.stroke();

// eye in
ctxHuge.beginPath();
ctxHuge.ellipse(64, y+86, 2, 22, 0.2, 0, 2*Math.PI);
ctxHuge.stroke();
ctx.fillStyle = "#FF0000";

// second biggest eye
ctxHuge.beginPath();
//ctxHuge.moveTo(20, 0);
ctxHuge.arc(391, y+0, 24, 0, 2*Math.PI);
ctxHuge.stroke();

// mouth
ctxHuge.beginPath();
ctxHuge.moveTo(30, y+235);
ctxHuge.bezierCurveTo(410, y+200, 10, y+592, 410, y+592);
ctxHuge.stroke();

//  front head
ctxHuge.beginPath();
//ctxHuge.moveTo(10, y-100);
ctxHuge.bezierCurveTo(10, y-48, 0, y+133, 130, y+655);
ctxHuge.stroke();

// top head
ctxHuge.beginPath();
ctxHuge.moveTo(10, y-48);
ctxHuge.bezierCurveTo(-20, y-200, 300, y- 153, 430, y- 148);
ctxHuge.stroke();

//ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle)

