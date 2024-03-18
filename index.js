let data = [
  {
    name: "Brandon",
    age: 29,
  },
  {
    name: "Batman",
    age: 50,
  },
  {
    name: "Aquaman",
    age: 37,
  },
];
//Mutating array method - push
data.push({
  name: "Wonder woman",
  age: 39,
});
// spread-operator - skapa kopia av array för att inte mutera originaldata
let sortedData = [...data];

sortedData.sort((a, b) => a.age - b.age);

// Non-mutating array method - filter

let filteredArray = data.filter((obj) => obj.age > 40);

// console.log(filteredArray);

//Funktion för att sortera en array baserat på valfri property med [] istället för .
let sortArray = (arr, property) => {
  let newArray = [...arr];
  newArray.sort((a, b) => a[property] - b[property]);
  return newArray;
};

let sortedByAge = sortArray(data, "age");
let sortedByName = sortArray(data, "name");
