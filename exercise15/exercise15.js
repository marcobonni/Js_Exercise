function sortPeopleByAge(array) {
  for (i = 0; i < array.length; i++) {
    let roadmap = array[i];
    for (j = 0; j < array.length - i - 1; j++) {
      if (array[j].age > array[j + 1].age) {
        console.log(array[j])
      }
    }
  }
}


const people = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];
sortPeopleByAge(people);
// const sortingByAge = sortPeopleByAge(people)
// console.log(sortingByAge)
