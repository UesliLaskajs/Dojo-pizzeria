function pizzaOven(crustType, sauceType, cheeses, toppings) {
    return {
        crustType: crustType,
        sauceType: sauceType,
        cheeses: cheeses,
        toppings: toppings
    };
}

function randomPizza() {
    var crustTypes = ["deep dish", "hand tossed", "thin crust", "stuffed crust"];
    var sauceTypes = ["traditional", "marinara", "alfredo", "pesto"];
    var cheesesOptions = [["mozzarella"], ["cheddar"], ["feta"], ["parmesan", "asiago"]];
    var toppingsOptions = [
        ["pepperoni", "sausage"],
        ["mushrooms", "olives", "onions"],
        ["bell peppers", "tomatoes", "spinach"],
        ["ham", "pineapple", "bacon"]
    ];

    var randomCrust = crustTypes[Math.floor(Math.random() * crustTypes.length)];
    var randomSauce = sauceTypes[Math.floor(Math.random() * sauceTypes.length)];
    var randomCheeses = cheesesOptions[Math.floor(Math.random() * cheesesOptions.length)];
    var randomToppings = toppingsOptions[Math.floor(Math.random() * toppingsOptions.length)];

    return pizzaOven(randomCrust, randomSauce, randomCheeses, randomToppings);
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var pizza3 = pizzaOven("thin crust", "alfredo", ["cheddar"], ["ham", "pineapple", "bacon"]);
var pizza4 = randomPizza();

console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);

