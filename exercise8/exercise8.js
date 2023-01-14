function multiplyByaNumber(value) {
  let number = 2;
  function inner(number) {
    let result = value * number;
    console.log(result);
    return result;
  }
  inner(3);
}
multiplyByaNumber(4);
