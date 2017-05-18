// create arrays
greetings = ["Salaam","Hello","Bonjour","Marhaba", "Aloha"]

names = ["Kevin","Abdul","Dana","Samuel","Tabitha"]

function printGreet(greetings, names) {
  // pull values at random
  var randomNumber = Math.floor(Math.random() * 5);
  var greetingsLength = greetings.length
  console.log(greetings[randomNumber] + ", " + names[randomNumber])
}

printGreet(greetings, names);
