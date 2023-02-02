function repeat(callback, string) {
    let sec = 1000;
    setTimeout(callback, sec);
    setTimeout(() => {
        console.log(string);
    }, sec + 2000);
}

repeat(() => console.log("Hello"), "Marco");
//devo usare un arrow function perché devo metterlo come parametro della funzione

