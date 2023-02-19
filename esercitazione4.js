const myBirthdayCakes = (isMarcosick) => {
    return new Promise((resolve, reject) => {
        if(!isMarcosick) {
            resolve(2);
        } else {
            reject(new Error("i am sad"))
        }
    })
}

myBirthdayCakes(true)
    .then((result) => {
        console.log(`i have ${result} cakes`)
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("i have a party!");
    })

