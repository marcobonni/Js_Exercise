const isLogged = true;
const john = {
    name : "John",
    age : 24
}
const Random_number = Math.random()
const promise = new Promise((resolve, reject) => {
    isLogged ? 
        resolve(Math.random()) : reject("Not logged")
})

function check_Numb(numb){
    return new Promise((resolve, reject) => {
        if (numb > 0.5){
            resolve(john)
        } else{
            reject("error")
        }
    })
}

promise
    .then(check_Numb(Random_number))
    .then((val) => console.log(val))
    .catch((error) => console.log(error))