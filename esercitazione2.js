
// function X(a, callback) {
//     let sum = 0;
//     return sum = callback(10, 50) + a
// }

// function callback(a, b) {
//     return sum1 = a + b;
// }


// // callback(10, 40);
// let totale = X(10, callback);
// console.log(totale);
class person {
    constructor(nome, surname) {
        this.nome = nome;
        this.surname = surname;
    }
    toJSON() {
        return {name: this.nome};
    }
}

let persona =  new person("Marco", "Bonnì");
console.log(`Ciao, mi chiamo ${persona.surname}`)
console.log(persona.toJSON());