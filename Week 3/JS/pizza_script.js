
function pizzaOven(crustType,sauceType,cheeses,toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var pizza3 = pizzaOven("thin crust", "marinara", ["romano", "parm"], ["pepperoni", "pineapple"]);
var pizza4 = pizzaOven("hand tossed", "white sauce", ["goat cheese"], ["mushrooms", "olives", "spinach"]);

console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);