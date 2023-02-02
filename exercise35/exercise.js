function repeat(callback, string) {
    setTimeout(callback, 1000);
    setTimeout(() => {
        console.log(string);
    }, 2000);
}

repeat(() => console.log("Hello"), "Marco");
