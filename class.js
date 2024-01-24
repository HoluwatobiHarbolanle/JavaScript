// console.log("Hello world!");
// let name = "Titi";
// console.log(name);
// name = "Abiola";
// console.log(name);
// let age = 57;
// let newAge = 13;
// let percentage = newAge / age;
// console.log(percentage);

let string = "Javascript"
firstLetter = string[3];
console.log(firstLetter);
console.log(string.length);
console.log(string.length - 1);

console.log(string.toUpperCase());
console.log(string.toLowerCase());

let text = "Programming";
console.log(text.substring(1, 4));
console.log(text.substr(1, 4));


let day = "30 Days of Javascript"
console.log(day.split());
console.log(day.split(" "));

console.log(day.includes("Days"));

let title = "javascript";
let lastIndex = title.length - 1;
console.log(title.charAt(lastIndex));
console.log(title.indexOf("j"));
console.log(title.replace("javascript", "Asabeneh"));

// Assignment Operators
let numOne = 5;
let numTwo = 4;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;
let powerOf = numOne ** numTwo;
console.log(sum, diff, mult, div, mult, remainder,powerOf);

// Comparison Operators
let first = 3;
let second = 2;
console.log(first > second);
console.log(first < second);
console.log(first == second);
console.log(first === second);
console.log(first !== second);
console.log(first <= second);

console.log("3" == 3);
console.log("3" === 3);

// console.log
console.log(1 == true);
console.log(0 == true);
console.log(0 == false);
console.log("0" === false);

// Logical Operators
let check = 4 > 3 && 10 > 5;
let see = 4 > 3 && 5 > 10 ;
console.log(check, see);

let compare = 4 > 3 || 10 > 5;
let value = 4 > 3 || 10 < 5;
let answer = 4 < 3 || 10 < 5;
console.log(compare, value, answer);

// Negation Operators
let negate = !(4 < 3);
let result = !true;
console.log(result, negate);

// Increment and Decrement Operators
let count = 1;
console.log(++count);
console.log(count++);
count--;
console.log(count);
let num = 20;
num--;
// console.log(num--);
// console.log(--num);
console.log(num);

// Ternary Operators
// let isAMan = true;
// isAMan ? console.log("Yes, he is a man") :
// console.log("No, he is not a man")

// Symbol
const mySymbol = Symbol()
console.log(mySymbol);
const newSymbol = Symbol("lot")
console.log(newSymbol);

// Concatenation
const love = "I love"
const sentence = love + " " + "studying " + day;
console.log(sentence);

const backtickSentence = `${love}  studying ${day}`
console.log(backtickSentence);

const myArray = ["Rukaya", "Marvellous", "Grace", "Munirah"];
console.log


// Math object
const four=4
console.log(Math.sqrt(four));
console.log(Math.pow(4, 2));
console.log(Math.PI);
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random() * 1);
console.log(Math.max(3, 4, 9, 0));
console.log(Math.random()+1);

// console.log(Math.floor(Math.random() * 10 + 1));

const pi = Math.round

// let random = (Math.random( 10 + 1));
// const click = random<=10 ?random :10;
