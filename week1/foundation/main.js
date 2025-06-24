/*Varibles 
const a = 10; //not changeable
var b = 20; //changeable
let c = 30;  //changeable
a = 2;
console.log(a); 
*/


/*
let firstName = "Hardik"; //strings
let lastName = "Bambhaniya";
let age = 18; //number
let gender = "male";
let isMarried = true; //boolean


console.log("this person name is " + firstName + " and their age is " + age);

if(gender === "male") {
    console.log("Hello Mr." + firstName + lastName);
} else if (gender === "female") {
    console.log("Hello Ms." + firstName + lastName);
} 
*/


/*Loops
let answer = 0;

for(i = 0; i <= 100; i++) {
    answer = answer + 1;
    console.log(answer);
} 
*/


//Arrays 
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(let i = 0; i <= number.length; i++) {
//     if(number[i] % 2 == 0) {
//         console.log(number[i] + " number is even")
//     } else {
//         console.log(number[i] + " number is odd");
//     }
// }


//find biggest number from the array
//const number = [21, 52, 43, 14];
//manual way (through loop)
// let max = number[0];
// for(let i =1; i < number.length; i++) {
//     if(number[i] > max) {
//         max = number[i];
//     }
// }

// console.log(max);

//direct way
//console.log(Math.max(...number));

//print only male person name from the array

// const personName = ["Hardik", "shubham,", "mangesh", "divya"];
// const genderArray = ["male", "male", "male", "female"];

// for (let i = 0; i < personName.length; i++){
//     if(genderArray[i] === "male"){
//         console.log(personName[i]);
//     }
// }

//reverse all the elements of array

// const fruits = ["apple", "bannana", "mango", "pineapple"]

// const reversedAry = [];

//console.log(fruits.reverse()); //direct method

// for(let i = fruits.length-1; i >= 0; i--) {
//     reversedAry.push(fruits[i]);
//     console.log(reversedAry);
// } this creates new array of reverse elements



//objects

// const user1 = {
//     firstName: "Hardik",
//     gender: "male"
// }

// const user2 = {
//     firstName: "rahul",
//     gender: "male"
// }

// const user3 = {
//     firstName: "priya",
//     gender: "female"
// }


// const allUser = [{
//     firstName: "Hardik",
//     gender: "male"
// }, {
//     firstName: "rahul",
//     gender: "male"
// }, {
//     firstName: "priya",
//     gender: "female"
// }]

// for(i=0; i < allUser.length; i++){
//     if(allUser[i].gender === "male") {
//         console.log(allUser[i]);
//     }
// } 



//console.log(user2["firstName"]); //way to aggrigate data of object


//Functions



// function findSum(a, b) {
//     //function takes prompt as an argument and do operation
//     const sumValue = a + b;
//     return sumValue;
// }

// const value = findSum(1,2);
// console.log(value);


// function calculateArithmetic (a, b, type) { //you can also pass as much as argument inside function depends on need. we can also pass function inside argument with using "fnTocall".
//     if (type == "sum") {
//         return a + b;
//     }
//     if(type == "minus") {
//         return a -b;
//     }
// }



// const value = calculateArithmetic(1, 2, "minus");
// console.log(value);


//setTimeOut
// function greet () {
//     console.log("hello world")
// }

// setTimeout(greet, 3* 1000);  


