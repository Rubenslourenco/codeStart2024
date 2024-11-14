const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersX = numbers.map((number) => number * 2);

console.log(numbersX);

const numbersY = numbers.filter((number) => number % 2 === 0);

console.log(numbersY);

const sum = numbersX.reduce((acc, number) => acc + number, 0);
console.log(sum);
