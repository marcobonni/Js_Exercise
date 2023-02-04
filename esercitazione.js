
function sum(a, b, callback) {
    let totale = a + b; 
    return callback(totale);
}

function callback(number) {
    return Math.round(number);
}

console.log(sum(1.4, 2.5, callback));


class person {
    constructor(name1, age1) {
        this.name1 = name1;
        this.age1 = age1;
    }
}

const instance1 = new person("Marco", "200");
console.log(person.name1);
console.log(person.age1);
console.log(`${instance1.name1} ${instance1.age1}`);
