let hej = () => {
  console.log("Hej!");
};

let obj = {
  hej: () => {
    console.log("Hej!");
  },
};

obj.hej();

let population = 0;

console.log("Hello world!".length);

// let myArray = [1, 2, 3, 4, 5];
let myArray = new Array(1, 2, 3, 4, 5);

class Person {
  constructor(namn, ålder) {
    this.name = namn;
    this.age = ålder;
    population++;
  }
  greet() {
    console.log("Hi my name is " + this.name);
  }
}
// Instanser av klassen Person
let myAvatar = new Person("Brandon", 29);
let myFriend = new Person("Kalle", 28);

myFriend.greet();
console.log(myFriend.name);

let checkPopulation = () => {
  console.log(population);
};

let date = new Date();
console.log(myAvatar.__proto__);
