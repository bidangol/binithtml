console.log('drawing canvas house...');
var c = document.getElementById("house");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.moveTo(0,28)
ctx.bezierCurveTo(0,28,31,7,70,8);
ctx.bezierCurveTo(109,9,313,99,425,90);
ctx.bezierCurveTo(516,82.5,536,55,536,55);
ctx.stroke();