class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get _firstName() {
        return this.firstName;
    }
    get _lastName() {
        return this.lastName;
    }
    get _age() {
        return this.age;
    }
    set _firstName(value) {
        this.firstName = value;
    }
    set _lastName(value) {
        this.lastName = value;
    }
    set _age(value) {
        this.age = value;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person._firstName = 'Maria';
person._lastName = 'Verdi';
person._age = 20;
console.log(person.fullName);
console.log(person._age);
person._age = 22;
console.log(person._age);