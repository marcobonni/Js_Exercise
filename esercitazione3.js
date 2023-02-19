async function f() {
    let user
    try {
      let response =  await fetch("https://catfact.ninja/fact");
      user = await response.json();
    }catch(err) {
        console.log("vabbè")
    }
    return user;
  }

f().then((val) => console.log(val))
   .catch((err) => console.log(err));


// async function funzione1(url) {
//     try {
//         fetch(url)
//             .then(response => risposta = response.json())
//             .then(risposta => console.log(risposta))
//     }
//     catch (err) {
//         console.log("gnugna")   
//     }
// }


// console.log(funzione1("https://catfact.ninja/fact"));