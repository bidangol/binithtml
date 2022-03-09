console.log('hello!')

function checkAnswer() {

  // price question
  var price = document.getElementById('price').value;
  var priceCorrect = document.getElementById("priceCorrect");
  var priceIncorrect = document.getElementById("priceIncorrect");
  console.log(priceCorrect);
  if (price == "10g") {
    priceCorrect.style.visibility = 'visible';
    priceIncorrect.style.visibility = 'hidden';
  } else {
    priceCorrect.style.visibility = 'hidden';
    priceIncorrect.style.visibility = 'visible';
  }

  // for me question

  var forMe = document.getElementById('forMe').value;
  var forMeCorrect = document.getElementById("forMeCorrect");
  var forMeIncorrect = document.getElementById("forMeIncorrect");

  if (forMe == "5g.") {
    forMeCorrect.style.visibility = 'visible';
    forMeIncorrect.style.visibility = 'hidden';
  } else {
    forMeCorrect.style.visibility = 'hidden';
    forMeIncorrect.style.visibility = 'visible';
  }

   // howMuch question

   var howMuch = document.getElementById('howMuch').value;
   var howMuchCorrect = document.getElementById("howMuchCorrect");
   var howMuchIncorrect = document.getElementById("howMuchIncorrect");

   if (howMuch == "5g") {
    howMuchCorrect.style.visibility = 'visible';
    howMuchIncorrect.style.visibility = 'hidden';
  } else {
    howMuchCorrect.style.visibility = 'hidden';
    howMuchIncorrect.style.visibility = 'visible';
  }

   // hogwarts question

   var hogwarts = document.getElementById('hogwarts').value;
   console.log(hogwarts);
   var hogwartsCorrect = document.getElementById("hogwartsCorrect");
   var hogwartsIncorrect = document.getElementById("hogwartsIncorrect");
   
   if (hogwarts == "f course you know a bit about Hogwarts" || hogwarts == "' course you know a bit about Hogwarts") {
     hogwartsCorrect.style.visibility = 'visible';
     hogwartsIncorrect.style.visibility = 'hidden';
   } else {
     hogwartsCorrect.style.visibility = 'hidden';
     hogwartsIncorrect.style.visibility = 'visible';
   }

     // what question

     var what = document.getElementById('what').value;
   console.log(what);
   var whatCorrect = document.getElementById("whatCorrect");
   var whatIncorrect = document.getElementById("whatIncorrect");
   
   if (what == "WHAT ARE THOSE?!" || what == "What are those?!" || what == "WHAT ARE those?!") {
     whatCorrect.style.visibility = 'visible';
     whatIncorrect.style.visibility = 'hidden';
   } else {
     whatCorrect.style.visibility = 'hidden';
     whatIncorrect.style.visibility = 'visible';

   }

   // spell question

   var spell = document.getElementById('spell').value;
   console.log(spell);
   var spellCorrect = document.getElementById("spellCorrect");
   var spellIncorrect = document.getElementById("spellIncorrect");
   
   if (spell == "fat rat into yellow" || spell "fat rat in to yellow") {
     spellCorrect.style.visibility = 'visible';
     spellIncorrect.style.visibility = 'hidden';
   } else {
     spellCorrect.style.visibility = 'hidden';
     spellIncorrect.style.visibility = 'visible';

   }
}  

 




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
console.log("newBasket");

console.log("Have potter");
var potterNames = Family.filter(name => name.includes("potter"));
console.log("potterNames");

console.log("Have Weasley");
var weasleygo = Family.filter(name => name.includes("Weasley"));
console.log("weasleygo");

console.log("Have lly");
var llymolly = Family.filter(name => name.includes("lly"));
console.log("llymolly");

console.log("Have r");
var rharry = Family.filter(name => name.includes("r"));
console.log("rharry");
