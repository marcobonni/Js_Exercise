function sum(...args) {
   let total = 0; 
   args.forEach(element => {
    total+= element
   });
   return total
}
console.log(sum(0, 1, 2, 3, 4));
