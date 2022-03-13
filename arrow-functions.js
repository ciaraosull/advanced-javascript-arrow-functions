/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function AddTwoNumbers(a, b) {
//     return a + b;
// }

// let sum = AddTwoNumbers(3, 5);
// console.log(sum)


// Arrow Function With Parameters

const AddTwoNumbers = (a, b) => {
    return a + b;
}

let sum = AddTwoNumbers(3, 5);
console.log(sum)

// Single Line Arrow Function With Parameters

// const AddTwoNumbers2 = (a, b) => (a + b); // also valid
const AddTwoNumbers2 = (a, b) => a + b;
let sum2 = AddTwoNumbers(3, 5);
console.log(sum2)

// Implicit Returns

const saySomething = message => console.log(message); // only 1 parameter so no brackets needed
saySomething("Hello World");

const sayHi = () => console.log("Hi");
sayHi();

// Returning Multiple Lines

const returnMultiLine = () => (
    `<p>
        This is a multiline string
    </p>`
)

console.log(returnMultiLine());


// Challenge - You will create a function using the arrow syntax that should return the average marks of a subject. 
// Your function should loop through the array that is passed in. For each student contained within, you should: 
// 1. Check if the subject passed into your function is in said student's results object; 
// 2. If it is, add it to a cumulative total of all results for that subject. 
// 3. Finally, return the average result for the subject.
// You will only be asked to return the average marks for the subject english, 
// but your function must be able to return the average marks if another subject name is used

let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];

const averagePoints = (arr, subject) => {
    let allPoints = 0;
    let sum = 0;
    for(let itm of arr) {
      if(subject in itm.results) {
        allPoints += itm.results[subject];
        sum+=1;
      }
    }
    return allPoints / sum;
};

let result = averagePoints(students, "english");

console.log(result);