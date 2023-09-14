/* Crea una function llamada pizzaOven.  Debemos sentirnos libres de personalizar la información que registramos para nuestra pizza, pero asegurémonos de incluir lo siguiente:  tipoCorteza, tipoSalsa, quesos,y salsas. */
function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    let pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;
}
let pizza1 = pizzaOven(
    "Estilo chicago",
    "tradicional",
    ["mozzarella"],
    ["pepperoni", "salchicha"]
);
let pizza2 = pizzaOven(
    "lanzada a mano",
    "marinara",
    ["mozzarella", "feta"],
    ["champiñones", "aceitunas", "cebollas"]
);
let pizza3 = pizzaOven(
    "Delgada",
    "tradicional",
    ["mozzarella"],
    ["tomate", "jamon", "aceituna"]
);
let pizza4 = pizzaOven(
    "tradicional",
    "tradicional",
    ["mozzarella"],
    ["pepperoni", "salchicha", "choclo", "aceituna"]
);
console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);
