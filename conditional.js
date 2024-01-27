
// let userAge = prompt("Enter your age");
// console.log(typeof userAge);
// if (userAge >= 18) {
//     alert("You are old enough to drive")
// } else {
//     let ageLeft = 18 - userAge;
//     alert(`You are left with ${ageLeft} years to drive` )
// }

// const number = prompt("What number do you wish to know if it is even or odd")
// if (+number%2===0) {
//     alert(`${number} is an even number`);
// } else {
//     alert(`${number} is an odd number`);
// }

// Arrays
const myFirstArray = Array(10).fill("students");
console.log(myFirstArray);
const studentArray  = ["Aishat", "Salamat", "Titilayo"];
console.log(studentArray);
const numberArray = [2, 2, 5, 7,8];
const mixedArray =[3, 4, 5, "me", "you", "your"];
console.log(mixedArray);

const JavaScript = "Javascript is bae";
console.log(JavaScript);
console.log(JavaScript.split("a"));

console.log(studentArray.length);
console.log(JavaScript.lastIndexOf("x"));
console.log(studentArray.lastIndexOf("a"));

// Adds to the back
studentArray.push("Bashirah");
console.log(studentArray);

// Adds to the front
studentArray.unshift("Barakah");
console.log(studentArray);

// Removes from the back
studentArray.pop();
console.log(studentArray);

// Removes from the front
studentArray.shift();
console.log(studentArray);

studentArray[0] = "Mariam"
console.log(studentArray);
console.log(studentArray.reverse());
console.log(studentArray.indexOf("Mariam"));
console.log(studentArray[0]);
console.log(JavaScript.charAt(0));

console.log(studentArray.concat(numberArray));
console.log(numberArray.concat(studentArray));
console.log(Array.isArray(studentArray));
console.log(Array.isArray(JavaScript));
console.log(studentArray.join());
console.log(studentArray.join(","));

studentArray.splice(1, 1, "Aminah", "Kaosar", "Mariam");
console.log(studentArray);
console.log(studentArray.splice());
console.log(studentArray.slice(1, 3));

console.log(studentArray.sort());

const anotherArray = [];
console.log(anotherArray);