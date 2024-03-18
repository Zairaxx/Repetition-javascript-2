let dataset1 = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let dataset2 = [0, 2, 4, 6, 8, 10];

let getUniqueValues = (arr1, arr2) => {
  //filter-lösning
  //   let uniqueValues1 = arr1.filter((num) => !arr2.includes(num));
  //   let uniqueValues2 = arr2.filter((num) => !arr1.includes(num));
  //   let uniqueValues = uniqueValues1.concat(uniqueValues2);
  //Ta bort dubletter


  //forEach-lösning
  let uniqueValues = [];

  arr1.forEach((num) => {
    if (!arr2.includes(num) && !uniqueValues.includes(num)) {
      uniqueValues.push(num);
    }
  });
  arr2.forEach((num) => {
    if (!arr1.includes(num) && !uniqueValues.includes(num)) {
      uniqueValues.push(num);
    }
  });
  return uniqueValues;
};

console.log(getUniqueValues(dataset1, dataset2));

