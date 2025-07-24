const user = {
    name: "Hardik",
    age: 20,
    gender: "male"
}

let keysOfUser = Object.keys(user);
console.log(keysOfUser);  //gives you array of keys of object.

let valuesOfUser = Object.values(user);
console.log(valuesOfUser); //gives you an array of value of object.

let entries = Object.entries(user);
console.log(entries); //it gives  you an array with both the field key and value all in multiple arrays

let hasOwn = Object.hasOwn(user, "surname");
console.log(hasOwn); //used to get information about does object has a specific property or not.

let assign = Object.assign(user, {surName: "Bambhaniya"});
console.log(assign); //merge new property inside an object