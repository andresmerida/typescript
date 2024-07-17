const books = ['1984', 'Brave New World', 'Fahrenheit 451'];
let foundBook: string | undefined;

for (let book of books) {
    if (book === '1983') {
        foundBook = book;
        foundBook = foundBook.toUpperCase();
    }
}

console.log(foundBook?.length);

// Arrays types

let prices: number[] = [100,75,42];
let fruit: string[] = ['apple', 'orange'];
let emptyValues: number[] = [];
let names = ['peter', 'susan', 1];
let array: (string | boolean)[] = ['apple', true, 'orange', false];

// examples of type of arrays
let temperatures: number[] = [20, 25, 30];
let colors: string[] = ['red', 'green', 'blue'];
let mixedArray: (number | string)[] = [1, 'two', 3];

// objects
let car: {brand: string; year: number} = {brand: 'toyota', year: 2020};
car.brand = 'ford';
let car1: {brand: string; year: number} = {brand: 'audi', year: 2022};

let book = {title: 'book', cost: 20};
let pen = {title: 'pen', cost: 10};
let notebook = {title: 'notebook'};
let items: { readonly title: string; cost?: number}[] = [book, pen, notebook];

let bike: {brand: string; year: number} = {brand: 'yamaha', year: 2010};
let laptop: {brand: string; year: number} = {brand: 'Dell', year: 2020};
let product1 = {title: 'shirt', price: 20};
let product2 = {title: 'pants'};
let products: {title: string, price?: number}[] = [product1, product2];
products.push({title: 'shoes'});

sayHi('john');
const finalPrice = calculateDiscount(200);
console.log(finalPrice);

const namesList: string[] = ['john', 'jane', 'jim', 'jill'];
let nameToCheck = 'jane'
if (isNameInList(nameToCheck)) {
    console.log(`${nameToCheck} is in the list`);
} else {
    console.log(`${nameToCheck} is not in the list`);
}

let priceAfterDiscount = calculatePrice(100, 20);

let scoreAfterPenalty = calculateScore(100, 20);
let scoreWithoutPenalty = calculateScore(300);

let resultSum = sum('The total is: ', 1,2,3,4,5);
console.log(resultSum);

// start working with functions
function sayHi(name: string) {
    console.log(`Hello there ${name.toUpperCase()}`);
}

function calculateDiscount(price: number): number {
    return price * 0.9;
}

function isNameInList(name: string): boolean {
    return namesList.includes(name);
}

// function with optional parameter
function calculatePrice(price: number, discount?: number): number {
    return price - (discount || 0);
}
function calculateScore(initialScore: number, penaltyPoints: number = 0): number {
    return initialScore - penaltyPoints;
}
function sum(message: string, ...numbers: number[]): string {
    const doubled = numbers.map((num) => num * 2);
    console.log(doubled);
    let total = numbers.reduce((previus, current) => {
        return previus + current;
    });
    return `${message}${total}`;
}