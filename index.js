//Extends-keywordet - Prototypkedjor

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    console.log("Hi my name is " + this.firstName + " " + this.lastName + "!");
  }
}
class Teacher extends Person {
  constructor(firstName, lastName, subjects, students = 0) {
    super(firstName, lastName);
    this.amountOfStudent = students;
    this.subjects = subjects;
    this.studentsGraded = 0;
  }

  gradeStudent(student, grade) {
    student.grade = grade;
    this.studentsGraded++;
  }
}

class Student extends Person {
  constructor(firstName, lastName, grade) {
    super(firstName, lastName);
    this.grade = grade;
  }
}

class SubstiteTeacher extends Teacher {
  constructor(firstName, lastName, subjects) {
    super(firstName, lastName, subjects);
  }
}

let t1 = new Teacher("Brandon", "Tsegai", 70, ["Frontend", "UX", "Backend"]);
// console.log(t1.constructor.name);

let s1 = new Student("Peter", "Waltz", "-");

t1.gradeStudent(s1, "VG");
console.log(s1);
console.log(t1);

let st = new SubstiteTeacher("Emma", "Gren", ["Frontend"]);

st.greeting();
