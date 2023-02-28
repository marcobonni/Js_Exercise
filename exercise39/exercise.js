const isLogged = true;
const john = {
    name : "John",
    age : 24
}
const promise = new Promise((resolve, reject) => {
    isLogged ? 
        resolve(Math.random()) : reject(new Error("Not logged"))
})

function check_Numb(numb){
    return new Promise((resolve, reject) => {
        try {
        if (numb > 0.5){
            resolve(john)
        } else{
            reject(new Error("the number is smaller than 0.5"))
        }
    })
    } catch(err) {
        console.log("errore")
    }
}

promise
    .then(check_Numb(Random_number))
    .then((val) => console.log(val))
    .catch((error) => console.log(error))
    .finally(() => console.log("END"))