let number = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
let ourPromise = new Promise((resolve, reject) => {
    if (number > 10) {
        resolve(number);}
    else {
        reject(number);
    }
})

ourPromise
    .then ((number) => console.log(number))   
    .catch ((err) => console.log("errore"))
