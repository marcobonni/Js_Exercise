function printName(name) {
    helloName = `Hello ${name}`;
    function inner() {
        console.log(helloName);
    }
    setTimeout(inner, 3000);
}
printName("John");