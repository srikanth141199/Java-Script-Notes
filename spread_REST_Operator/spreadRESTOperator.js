function sumOne(a, b) {
  return a + b;
}

var myA = [5, 4];
console.log(sumOne(myA));
console.log(sumOne(...myA)); //spread Operator

function sumTwo(...args) {
  //Rest Operator
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return sum;
}

console.log(sumTwo(2, 4, 6, 7));
