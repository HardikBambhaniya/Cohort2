//synchronus- only one thing happening at a time.

//synchronus function
function findSum(n){
    let ans = 0;
    for(let i = 0; i < n; i++){
        ans += i;
    }
    return ans;
}

console.log(findSum(100));




//asynchronus - multiple things are context switching with each other

//asynchronus function
function findSum(n){
    let ans = 0;
    for(let i = 0; i <= n; i++){
        ans += i;
    }
    return ans;
}

function findSumTill100(){
    console.log(findSum(100));
}

setTimeout(findSumTill100, 1000);
console.log("first");



//another example of asynchronus-

const fs = require("fs"); //fs - sile system provides you access to file system and some function like reading in another file in your machine.

fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data);
})

console.log("hello");