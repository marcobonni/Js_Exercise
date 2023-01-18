function printName(name) {
    helloName = `Hello ${name}`;
    function inner() {
        console.log(helloName);
    }
    setTimeout(inner, 1000);
}
printName("John");