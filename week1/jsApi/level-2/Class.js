class Animal { 
    constructor(name, legCount, speak) {
        this.name = name;
        this.legCount = legCount;
        this.speak = speak;
    }

    static myType () {
        console.log("pet")
    }
     speak() {
        console.log("meow");
    }
}

let dog = new Animal("dog", "4", "bhow bhow");
let cat = new Animal("cat", "4", "meow meow");
console.log(dog);  
console.log(Animal.myType()); // error because speak is not a static function.

//static method use hota hein jab hamein koi aesi method create karni ho jo sirf class se belong karti ho na ki instance 

//instance - class ko use karke jo speacific object banate hein vo for example in this case  cat and dog which is use class animal for creating new object with keyword "new"
    