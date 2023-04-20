const Hamburger = function (size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
};

Hamburger.SIZE_SMALL = {
    price: 50,
    calories: 20,
    size: "small",
};
Hamburger.SIZE_LARGE = {
    price: 100,
    calories: 40,
    size: "large",
};
Hamburger.STUFFING_CHEESE = {
    price: 10,
    calories: 20,
    stuffing: "cheese",
};
Hamburger.STUFFING_SALAD = {
    price: 20,
    calories: 5,
    stuffing: "salad",
};
Hamburger.STUFFING_POTATO = {
    price: 15,
    calories: 10,
    stuffing: "potato",
};
Hamburger.TOPPING_MAYO = {
    price: 20,
    calories: 5,
    topping: "mayo",
};
Hamburger.TOPPING_SPICE = {
    price: 15,
    calories: 0,
    topping: "spice",
};

Hamburger.prototype.addTopping = function (topping) {
    this.toppings.push(topping);
};

Hamburger.prototype.calculatePrice = function () {
    const basePrice = this.size.price + this.stuffing.price;
    const toppingsPrice = this.toppings.reduce(
        (total, topping) => total + topping.price,
        0
    );
    return basePrice + toppingsPrice;
};

Hamburger.prototype.calculateCalories = function () {
    const baseCalories = this.size.calories + this.stuffing.calories;
    const toppingsCalories = this.toppings.reduce(
        (total, topping) => total + topping.calories,
        0
    );
    return baseCalories + toppingsCalories;
};


const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_MAYO);

console.log("Price:", hamburger.calculatePrice());
console.log("Calories:", hamburger.calculateCalories());