// Description:

// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples:

// peopleWithAgeDrink(13) === "drink toddy"
// peopleWithAgeDrink(17) === "drink coke"
// peopleWithAgeDrink(18) === "drink beer"
// peopleWithAgeDrink(20) === "drink beer"
// peopleWithAgeDrink(30) === "drink whisky"


// mine
var peopleWithAgeDrink = function(old) {
  return 'drink '+ (old < 14? 'toddy' : old < 18? 'coke': old < 21? 'beer':'whisky');
};


// top vote solution
function peopleWithAgeDrink(age){
  if(age < 14)
    drink = 'toddy';
  else if(age < 18)
    drink = 'coke'
  else if(age < 21)
    drink = 'beer';
  else if(age => 21)
    drink = 'whisky';

  return 'drink ' + drink;
}