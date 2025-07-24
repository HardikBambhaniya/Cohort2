//Json - javascript object notation - used to transmit data between server and web application as text

/* const users = '{"name": "Hardik","age": 20,"gender": "male"}'

//JSON.parse - pass string data as an object

const user = JSON.parse(users);
console.log(user["name"]);
*/

const users2 = {
   name: "Karan",
   age: 22,
   gender: "male"
}

//JSON.stringify - pass object as a string data

const finalString = JSON.stringify(users2);
console.log(finalString); // {"name":"karan", "age":22,"gender":"male} 
 



