// Statiska metoder

let cars = [];

class CarFactory {
  constructor(name) {
    this.name = name;
  }
  static createCar(name, brand, year, topSpeed) {
    let newCar = new Car(name, brand, year, topSpeed);
    cars.push(newCar);
  }
}

class Car {
  constructor(name, brand, year, topSpeed) {
    this.name = name;
    this.brand = brand;
    this.year = year;
    this.topSpeed = topSpeed;
  }
}

CarFactory.createCar("Toyota", "Corolla", 2024, 128);

console.log(cars);

// let fruits = ["Äpple", "päron"];
// let fruits = new Array("Äpple", "päron");

// fruits.filter();

// Array.from(nodeList);

// Super metoder

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    return `Hi my name is ${this.name} and i am ${this.age} years old!`;
  }
}

let student1 = new Student("Karl", 49);

class StudentRepresentant extends Student {
  royalGreeting() {
    let normalGreeting = super.greeting();
    return normalGreeting + ". By the way, I rule this class :)";
  }
}
console.log(student1.greeting());

let studentRep = new StudentRepresentant("Jon", 29);

console.log(studentRep.royalGreeting());
