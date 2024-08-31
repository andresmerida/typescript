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

console.log('======== functions =========');
processInput(10);
processInput('Hello');

const firstEmployee = createEmployee({id: 1});
const secondEmployee = createEmployee({id: 2});
console.log(firstEmployee, secondEmployee);

const newStudent = {
    id: 5,
    name: 'anna'
};
createStudent(newStudent);

console.log(processData(10));
console.log(processData('Hello'));
console.log(processData('Hello', {reverse: true}));

// types
type User = {id: number; name: string; isActive: boolean};
const john: User = { id: 1, name: 'john', isActive: true};
const susan: User = { id: 1, name: 'susan', isActive: false};

type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };
type Staff = Employee | Manager;

const alice: Employee = { id: 1, name: 'alice', department: 'Sales' };
const steve: Employee = { id: 2, name: 'steve', department: 'HR' };
const bob: Manager = { id: 1, name: 'bob', employees: [alice, steve] };
printStaffDetails(alice);
printStaffDetails(bob);



type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & {discount: number };
const book1: Book = {
    id: 1,
    name: 'How to cook a dragon',
    price: 15
};
const book2: Book = {
    id: 2,
    name: 'the secret life of unicorns',
    price: 18,
}
const discountedBook: DiscountedBook = {
    id: 3,
    name: 'Gnomes vs Goblins: The Ultimate Guide',
    price: 25,
    discount: 0.15,
};

interface BookI {
    readonly isbn: number;
    title: string;
    author: string;
    genre?: string;
} 
const deepWork: BookI = {
    isbn: 123,
    title: 'deep work',
    author: 'cal newport'
};

interface Computer {
    readonly id: number;
    brand: string;
    ram: number;
    upgradeRam(increase: number): number;
    storage?: number;
}
const laptopComputer : Computer = {
    id: 1,
    brand: 'random brand',
    ram: 8,
    upgradeRam(amount) {
        this.ram += amount;
        return this.ram;
    },
}
laptopComputer.storage = 256;
console.log(laptopComputer.upgradeRam(4));

interface Person {
    name: string;
    getDetails(): string;
}
interface DogOwner {
    dogName: string;
    getDogDetails(): string;
}
interface Person {
    age: number;
}
const person: Person = {
    name: 'john',
    age: 30,
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
console.log(person.getDetails());

interface EmployeeP extends Person {
    employeeId: number;
}

const employee: EmployeeP = {
    employeeId: 123,
    name: 'jane',
    age: 28,
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
    },
}
console.log(employee.getDetails());

interface ManagerP extends Person, DogOwner {
    managePeople(): void;
}
const manager: ManagerP = {
    name: 'bob',
    age: 35,
    dogName: 'rex',
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    },
    getDogDetails() {
        return `Name: ${this.dogName}`;
    },
    managePeople() {
        console.log('Managing people...');
    },
};
manager.managePeople();

enum ServerResponseStatus {
    Success,
    Error,
}
interface ServerResponse {
    result: ServerResponseStatus;
    data: string[];
}

const response: ServerResponse = getServerResponse();
console.log(response);

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
function processInput(input: string | number): void {
    if (typeof input === 'number') {
        console.log(input * 2);
    } else {
        console.log(input.toLowerCase());
    }
}
function createEmployee({id}: {id: number}): {
    id: number; isActive: boolean;
} {
    return {id, isActive: id % 2 === 0};
}
function createStudent(student: {id: number; name: string}): void {
    console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);
}
function processData(input: string | number, config: {reverse: boolean} = {reverse: false}
    ): string | number {
    if (typeof input === 'number') {
        return input * input;
    } else {
        return config.reverse 
        ? input.toUpperCase().split('').reverse().join('')
        : input.toUpperCase();
    }
}
function createUser(user: User): User {
    console.log(`Hello there ${user.name.toUpperCase()}!!!`);
    return user
}
function printStaffDetails(staff:Staff):void {
    if ('employees' in staff) {
        console.log(
            `${staff.name} is an manager in the ${staff.employees.length} employees`
        );
    } else {
        console.log(
            `${staff.name} is an employee in the ${staff.department} department`
        );
    }
}

function getServerResponse(): ServerResponse {
    return {
        result: ServerResponseStatus.Success,
        data: ['first item', 'second item'],
    };
}

enum UserRole {
    Admin,
    Manager,
    Employee
}

type UserR = {
    id: number;
    name: string;
    role: UserRole;
    contact: [string, string];
};

function createUserR(user: UserR): UserR {
    return user;
}

const userR: UserR = createUserR({
    id: 1,
    name: 'john doe',
    role: UserRole.Admin,
    contact: ['john@gmail.com', '123-456-789'],
});

console.log(userR);

let someValue: any = 'This is a string';
let strLength: number = (someValue as string).length;
type Bird = {
    name: string;
};

let birdString = '{"name": "Eagle"}';
let dogString = '{"breed": "Poodle"}';

let birdObject = JSON.parse(birdString);
let dogObject = JSON.parse(dogString);

let bird = birdObject as Bird;
let dog = dogObject as Bird;

console.log(bird.name);
console.log(dog.name);

enum Status {
    Pending = 'pending',
    Declined = 'declined'
}

type UserStatus = {
    name: string,
    status: Status
}

// save Status.Pending is the DB as a string
// retrieve string from the DB

const statusValue = 'pending';
const userStatus: UserStatus = { name: 'john', status: statusValue as Status };

function runSomeCode() {
    const random = Math.random();
    if (random < 0.5) {
        throw new Error('there was arror...');
    } else {
        throw 'some error';
    }
}

try {
    runSomeCode();
} catch(error) {
    if (error instanceof Error) {
        console.log(error.message);
    } else {
        console.log(error);
    }
}

enum Color {
    Red,
    Blue,
    Green,
}

function getColorName(color: Color) {
    switch (color) {
        case Color.Red: 
            return 'Red';
        case Color.Blue:
            return 'Blue';
        case Color.Green:
            return 'Green';
        default:
            let unexpectedColor: never = color;     // at built time
            throw new Error(`Unexpected color value: ${color}`);
    }
}

console.log(getColorName(Color.Red));
console.log(getColorName(Color.Blue));
console.log(getColorName(Color.Green));

type Dog = { type: 'dog', name: string; bark: () => void };
type Cat = { type: 'cat', name: string; meow: () => void };
type Animal = Dog | Cat;

function makeSound(animal: Animal) {
    if (animal.type === 'dog') {
        animal.bark();
    } else {
        animal.meow();
    }
}

// Generic function and generic interface

function genericFunction<T>(arg: T): T {
    return arg;
}

const someStringValue = genericFunction<string>('Hello world');
const someNumberValue = genericFunction<number>(2);

interface GenericInterface<T> {
    value: T;
    getValue: () => T;
}

const genericString: GenericInterface<string> = {
    value: 'Hello World',
    getValue() {
        return this.value;
    }
}

// lets create a async function somoFunc2
async function someFunc2(): Promise<string> {
    return 'hello world';
}

const result2 = someFunc2();

function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    result = Array(length).fill(value);
    return result;
}

let arrayStrings = createArray<string>(10, 'hello');
let arrayNumbers = createArray<number>(10, 10);

console.log(arrayStrings);
console.log(arrayNumbers);

const url = 'https://www.course-api.com/react-tours-project';
type Tour = {
    id: string;
    name: string;
    info: string;
    image: string;
    price: string;
};

async function fetchData(url: string): Promise<Tour[]> {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status:${response.status}`);
        }
        const data: Tour[] = await response.json();

        return data;
    } catch(error) {
        const errorMsg = error instanceof Error ? error.message : 'there was an error...';
        console.log(errorMsg);
        return [];
    }
}

const tours = await fetchData(url);
tours.map((tour) => {
    console.log(tour.name);
});
