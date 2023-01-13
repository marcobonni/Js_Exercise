function printName(name) {
    helloName = `Hello ${name}`;
    function inner() {
        console.log(helloName);
    }
    inner();
}
printName("John");