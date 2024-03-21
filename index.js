console.log("test");

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  getTitle() {
    return "Titel: " + this.title;
  }
  getAuthor() {
    return "Författare: " + this.author;
  }
}

let book1 = new Book("Harry Potter", "J.K Rowling");

console.log(book1.getTitle());

class Employee {
  constructor(firstName, lastName) {
    // this.firstName = firstName
    // this.lastName = lastName
    this.fullName = firstName + " " + lastName;
    this.fullName = {
      firstName: firstName,
      lastName: lastName,
    };
    this.email = `${firstName}.${lastName}@company.se`.toLowerCase();
  }
}

let newEmployee = new Employee("John", "Smith");
console.log(newEmployee);

//Kalkylator

class Calculator {
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a / b;
  }
}

let calculator = new Calculator();

console.log(calculator.divide(10, 5));

//Glass

class IceCream {
  constructor(flavor, numOfSprinkles) {
    this.flavor = flavor;
    this.numOfSprinkles = numOfSprinkles;
  }
}

let chocoIceCream = new IceCream("Chocolate", 7);
let vanillaIceCream = new IceCream("Vanilla", 16);
let strawberryIceCream = new IceCream("Strawberry", 2);

let calculateSweetness = (iceCream) => {
  let sweetnessValue = iceCream.numOfSprinkles;
  if (iceCream.flavor === "Vanilla" || iceCream.flavor === "ChocolateChip") {
    sweetnessValue += 5;
  } else if (
    iceCream.flavor === "Strawberry" ||
    iceCream.flavor === "Chocolate"
  ) {
    sweetnessValue += 10;
  } else {
    console.log("This is not a valid flavor");
  }

  return sweetnessValue;
};

let getSweetest = (arr) => {
  let highestSweetnessValue = 0;

  arr.forEach((iceCream) => {
    let sweetness = calculateSweetness(iceCream);
    if (sweetness > highestSweetnessValue) {
      highestSweetnessValue = sweetness;
    }
  });

  return highestSweetnessValue;
};

console.log(getSweetest([chocoIceCream, vanillaIceCream, strawberryIceCream]));
