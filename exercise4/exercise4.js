function sumUntil(maxValue) {
  let sumValue = 0;
  for ( i = 0; i <= maxValue; i++) {
    sumValue = sumValue + i;
  }
  return sumValue;
}

console.log(sumUntil(10));