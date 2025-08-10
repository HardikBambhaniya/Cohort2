/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

// function countVowels(str) {
//   const smallVow = ["a", "e", "i", "o", "u"];
//   const capitalVow = ["A", "E", "I", "O", "U"];
//   let totalVowels = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (smallVow.includes(str[i]) || capitalVow.includes(str[i])) { //.includes use for checking vowels inside string
//       totalVowels = totalVowels + 1; //count +1 if str include any vowels
//     }
//   }
//   console.log("Total vowels in string are: ", totalVowels);
// }

// countVowels("HardIk"); 












/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  palindrome - the string that remain same when read from backward and forward ex- "madam"
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/



function isPalindrome(str) {
  const clearStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  const reversedStr = clearStr.split('').reverse().join('');

  return clearStr === reversedStr
}

console.log(isPalindrome("hello"));


