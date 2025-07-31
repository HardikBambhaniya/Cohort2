//Helper function - Map, filter

//Arrow function - just another way to write a function
// const sum = (a, b) => {
//     return a + b;
// }

//console.log(sum(56, 46));







//map()
//problem statment - given an array, give me back a new array in which every value is multiplied by 2.
//maual way
function multipliedArr(arr){
    let newArr = [];
    let mul ;
    for(let i = 0; i < arr.length; i++){
      mul = arr[i]*2;
      newArr.push(mul)
    }
    
    console.log(newArr);
}
 
multipliedArr([2, 8, 5, 7]);



//other solution -would'nt be a nice if there was a function that take a function as an argument and return in it with some operation something like this:
//USING MAP() 
const number = [1, 2, 3, 4, 5];

const mul = num.map(function(i){
    return i * 2;
});

console.log(mul);







//filter()
//problem statement for filter - given an input array, give me back all the even values from it;

//maual way
let newArr = [];

function evenArr(arr){
  for(let i = 0; i < arr.length; i++){
    arr[i] % 2 === 0 ? newArr.push(arr[i]): newArr;
  }

  console.log(newArr);
}
evenArr([145397, 2500, 99, 79, 10]);


//with filter
const num = [1, 2, 3];

const ans = num.filter(function(i){
    return i % 2 === 0;
})

console.log(ans);

// USAGE - let suppose array of person and i want to find only person whose name start with any specific charcter let suppose "H";
const user = ["Hardik", "Shubham", "Magesh", "Harsh"];

const newUser = user.filter(function(n) {
    if(n.startsWith("H")){ //startsWith - a helper function in string
        return true;
    } else {
        return false;
    }
})

console.log(newUser);











//assignment for map - create a map function taht takes an array and function and return output as an new array
function mul (arr) {
    return arr * 2
}
const map = (arr, fn) => {
    const transformedArr = [];
    for(let i =0; i < arr.length; i++){
        transformedArr.push(fn(arr[i]));
    }
    return transformedArr;
}

console.log(
    map([1, 2, 3], mul));


