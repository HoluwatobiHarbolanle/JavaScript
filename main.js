// Ternary Operator

// Windows Operator

// let greetings = "Hello!";
// alert(`${greetings}`);

// let name = prompt("Enter your name");
// console.log(`${name}`);

// let firstNumber = prompt("Enter number");
// let secondNumber = prompt("Enter number")
// let output = +firstNumber + +secondNumber;
// console.log(output);

// const agree = confirm("Are you sure you want subscribe?")
// console.log(agree);

// Regex
// let num = 'I love JavaScript and I believe you also love javascript';
// let res = /javascript/gi;
// console.log(num.match(res));


// Ternary Operator

let isAMan = true;
if (isAMan) {
    console.log("Yes, he is a man");
} else {
    console.log("No, he is not a man");
}

let b = 5
if (b < 5) {
    console.log("Not correct");
} else if (b == 5) {
    console.log("It is correct");
} else if (b > 5) {
    console.log("It is wrong");
} else {
    console.log("Try again");
}

let today = prompt('What day is today')
let Day = today.toLowerCase()
switch (Day) {
    case 'monday':
        console.log('Today is Monday');
        break;
    case 'tuesday':
        console.log('Today is Tuesday');
        break;
    case "wednesday":
        console.log('Today is Wednesday');
        break;
    case "thursday":
        console.log('Today is Thursday');
        break;
    case 'friday':
        console.log('Today is Friday');
        break;
}