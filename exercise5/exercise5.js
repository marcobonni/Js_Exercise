const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".

person2.firstName = "Simon";
// entrambi gli oggetti cambiano perché quando si copia un oggetto si punta alla stessa casella di memoria. quindi se io cambio , in questo caso person2, cambia anche person1. la stessa cosa succedeva se io modificavo person1.
console.log(person1);
console.log(person2);
