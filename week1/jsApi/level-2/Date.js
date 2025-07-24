const currDate = new Date();

const hours = currDate.getHours();
console.log(hours); //show current hours

const minutes = currDate.getMinutes();
console.log(minutes); //shows current minutes

const second = currDate.getSeconds();
console.log(second); //shows current seconds

const milSec = currDate.getMilliseconds();
console.log(milSec); //shows current milisec.

const month = currDate.getMonth() + 1; //+1 because month saved on array so january is on 0th index of array month so if we want to get current month we need to do +1
console.log(month); //shows month

const day = currDate.getDay();
console.log(day); //shows day from week

const year = currDate.getFullYear();
console.log(year); //shows current year



