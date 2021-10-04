const cars = ["Honda", "Toyota", "Bugatti", "Lamborghini", "Marcedes Benz"];

const randomNumber = Math.round(Math.random() * 100);

const randomElement = randomNumber % cars.length;

console.log(cars[randomElement]);
