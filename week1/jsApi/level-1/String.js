//About strings and string manipulation

//length of str
// function getLength (str) {
//     console.log("orignal string", str);
//     console.log("length of str is ", str.length);
// }
// getLength("hello world");





//indexOf
/*function findIndexOf(str, target) { //str-orignal string, target-on which word we want to perform operation
    console.log("orignal string is: ", str);
    console.log("index of target is ", str.indexOf(target));
}
findIndexOf("hello world", "world"); //"hello world"is orignal str,  "world" is target str 

//Manual way
function findIdx(str, target) {
    for(let i = 0; i < str.length; i++) {
        if( str[i] === target ) {
            return i;
        }
    }
}
console.log(findIdx("hello world", "r")); */





//Slice
/*function getSlice(str, start, end) {
     console.log("orignal str: ", str);
     console.log("after slice: ", str.slice(start, end));
}
getSlice("Hello world", 0, 5);*/ //only includes o,1,2,3,4 idx not 5th. 





//Replace
// function replaceStr (str, target, replacement) {
//     console.log("orignal string: ", str);
//     console.log("After replacement: ", str.replace(target, replacement));
// }
// replaceStr("Hello world", "world", "Hardik");

//Manuall way
/* function replaceStrManually(str, target, replacement){
    let replaceStr = "";
    for(let i = 0; i < str.length; i++ ) {
        if (str[i] === target) {
            replaceStr += replacement;
        } else {
            replaceStr += str[i];
        }
    }
    return replaceStr;
}
console.log(replaceStrManually("Hello", "e", "w")); */





//Split - Basically use split strings into array
/* function splitStr (str, separator) {
    console.log("Orignal str is: ", str);
    console.log("After split str is: ", str.split(separator));
} 

splitStr("hello", ''); //out: ['h', 'e',..'o']; */





//Trim -  remove extra from beggining and ending of the str.
/*function trimStr(str) {
    console.log("orignal str is: ", str);
    console.log("After trim str is: ", str.trim());
}

trimStr("   hello world   "); */





//toUpperCase and toLowerCase
/* function toUpperCase(str) {
    console.log("orignal str is: ", str);
    console.log("str after: ", str.toUpperCase());
}
toUpperCase("hello world");

function toLowerCase(str) {
    console.log("orignal str is: ", str);
    console.log("str after: ", str.toLowerCase());
}
toLowerCase("HELLO WORLD"); */