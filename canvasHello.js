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
ctxRed.bezierCurveTo(100, 334, 210, 290, 195, 90, 250, 100); ctxRed.stroke();

