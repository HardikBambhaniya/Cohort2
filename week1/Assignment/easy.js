/*
Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp. For example - (silent -> listen)
*/ 

// function isAnagram(str1, str2) {
//     const normalize = str =>  //helper function - no need to write same code for str1 and str2 
//         str.toLowerCase()
//     .replace( /[^'a-z0-9']/g, '') //  /g - removed all the other character or symbol and space so there are only a-z in str
//     .split('') //convert string into array so comparision is easy
//     .sort() //sort character alphabetically 
//     .join(''); //join back to string  

//     return normalize(str1) === normalize(str2);
// }

// console.log(isAnagram("silent", "listen"));







/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

// function largestEle(arr) {
//     let max = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
//     console.log("the largest element from array is: ", max);
// }


// const num = [456, 789, 23, 963];
// largestEle(num)









