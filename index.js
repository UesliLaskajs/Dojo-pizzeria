function pizzaOven(crustType, sauceType, cheeses, toppingss) {
    return {
        crustType: crustType,
        sauceType: sauceType,
        cheeses: cheeses,
        toppings: toppingss
    };
}

const pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
const pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
const pizza3 = pizzaOven("thin crust", "pesto", ["mozzarella", "parmesan"], ["spinach", "tomatoes", "garlic"]);
const pizza4 = pizzaOven("stuffed crust", "alfredo", ["cheddar", "gouda"], ["bacon", "jalapenos", "pineapple"]);

console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);

function randomPizza() {
    const crustTypes = ["thin crust", "deep dish", "hand tossed", "stuffed crust"];
    const sauceTypes = ["marinara", "alfredo", "pesto", "bbq"];
    const cheeseOptions = ["mozzarella", "cheddar", "feta", "parmesan", "gouda"];
    const toppingOptions = ["pepperoni", "sausage", "mushrooms", "olives", "onions", "bell peppers", "ham", "pineapple"];

    const randomCrust = crustTypes[Math.floor(Math.random() * crustTypes.length)];
    const randomSauce = sauceTypes[Math.floor(Math.random() * sauceTypes.length)];
    const randomCheeses = [cheeseOptions[Math.floor(Math.random() * cheeseOptions.length)]];
}