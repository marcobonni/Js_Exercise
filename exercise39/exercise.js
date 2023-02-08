const isLogged = true;
let p = new Promise((resolve, reject) => {
    if (isLogged == true) {
        let number = Math.floor(Math.random() * 10);
        resolve(number)
    } else {
        reject("error")
    }
});

p.then((number) => {
    if (number > 5) {
        let obj = {name: "John", age: 24}
        console.log(obj);
        return obj;
    } else {
            console.log("error")
        }
    }
)
