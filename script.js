console.log('hello!')
var x = 6;
console.log(x);
var y = 2;
var z = x + y;
console.log(z);

var Family = []
Family.push("Harry potter");
Family.push("Lilly potter");
Family.push("Pettuenia Dursly");
Family.push("James potter");
Family.push("Hermine h")
Family.push("vernon dursly");
Family.push("Molly Weasley");
Family.push("Ronald Weasley");
Family.push("Ginny Weasley");
Family.push("Harry James");
Family.push("Belatrick Black");
console.log(Family);
var index = Family.indexOf("Molly Weasley");
console.log(index)

console.log("start with H");
var newBasket = Family.filter(name => name.startsWith("H"));
console.log(newBasket);

console.log("Have potter");
var potterNames = Family.filter(name => name.includes("potter"));
console.log(potterNames)

console.log("Have Weasley");
var weasleygo = Family.filter(name => name.includes("Weasley"));
console.log(weasleygo);

console.log("Have lly");
var llymolly = Family.filter(name => name.includes("lly"));
console.log(llymolly);

console.log("Have r");
var rharry = Family.filter(name => name.includes("r"));
console.log(rharry);