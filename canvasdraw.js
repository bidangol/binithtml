console.log('drawing canvas...');
var c = document.getElementById("hotstar");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createRadialGradient(91,58,5,90,60,90);
grd.addColorStop(0,"cyan");
grd.addColorStop(0.6,"blue");
grd.addColorStop(1,"black");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0,0,350,146);

var grd = ctx.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0,"black");
grd.addColorStop(1,"black");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0,0,126,146);
ctx.fillStyle = "white";
ctx.font = "12px Comic Sans MS";

ctx.fillText("This is a star that is", 3, 13);
ctx.fillText("the biggest star, it is", 3, 26);
ctx.fillText("the hottest too. We", 3, 39);
ctx.fillText("can know if its the", 3, 52);
ctx.fillText("hottest by looking at", 3, 65);
ctx.fillText("the  color,", 3, 78);
ctx.fillText("white = coldest", 3, 91);
ctx.fillText("red = third coldest", 3, 104);
ctx.fillText("yellow = fourth", 3, 117);
ctx.fillText("hottest", 3, 130);
ctx.fillText("blue = hottest", 3, 143);


console.log('drawing sun...');
var c = document.getElementById("sun");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createRadialGradient(91,58,5,90,60,90);
grd.addColorStop(0.5,"orange");
grd.addColorStop(0,"white");

grd.addColorStop(1,"black");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0,0,350,160);

var grd = ctx.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0,"black");
grd.addColorStop(1,"black");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0,0,17,160);
ctx.fillStyle = "white";
ctx.font = "12px Comic Sans MS";

