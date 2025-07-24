//callback - passing function as argument

//example of callback function

function square(n) {
    return n * n
}

function cubes(n) {
    return n * n * n
}


function sumOfSomething(a, b, fn){ //fn- here we pass function as an argument inside function
    console.log(fn) //prints what function did user call either it is a square or a cube
    let var1 = fn(a);
    let var2 = fn(b);

    return var1 + var2;
}

console.log(sumOfSomething(5, 5, cubes)); //User have to tell what they want a square or a cube whatever 
