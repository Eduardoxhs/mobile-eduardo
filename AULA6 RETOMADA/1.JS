const celsius = [0, 25, 37, 100, -10];

const fahrenheit = celsius.map((temp) => temp * 1.8 + 32);

console.log("Celsius:", celsius);
console.log("Fahrenheit:", fahrenheit);