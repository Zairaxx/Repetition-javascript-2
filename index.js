//Exempel på en funktion

let hej = () => {
  console.log("Hej!");
};

//Exempel på metod - Dvs en funktion i ett objekt
let obj = {
  hej: () => {
    console.log("Hej!");
  },
};

obj.hej();

//Exempel på en sträng metod - En sträng är ett objekt

console.log("Hello world!".length);

// let myArray = [1, 2, 3, 4, 5];
//Exempel på vad som händer egentligen när vi skapar en array - Vi skapar en instans av klassen Array.
let myArray = new Array(1, 2, 3, 4, 5);

let population = 0;

//Exempel på en klass
class Person {
  constructor(namn, ålder) {
    this.name = namn;
    this.age = ålder;
    //Varje gång en instans av denna klass skapas, ökar vi population med 1.
    population++;
  }

  //Exempel på en metod i Person-klassen.
  greet() {
    console.log("Hi my name is " + this.name);
  }
}

// Instanser av klassen Person som kommer innehålla allt som klassen har.

let myAvatar = new Person("Brandon", 29);
let myFriend = new Person("Kalle", 28);

//Vi kan komma åt metoder och värden via våra nya instanser/objekt på följande sätt
myFriend.greet();
console.log(myFriend.name);

let checkPopulation = () => {
  console.log(population);
};

// Date är ett exempel på en klass
let date = new Date();
//Exempel på hur man kan se vilka metoder som finns i objektets prototyp

console.log(date.__proto__);
console.log(myAvatar.__proto__);
