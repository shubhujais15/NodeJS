// Full code base ko chhote chhote modules me baat dena is modular programming


// we can use require func to use math function from math.js
// reuire func is used for importing exported obj

const math = require('./math')   // "./" is imp so it can find math.js in thier current directory 

// Instead of above we can also destructur it like
// const { add, subtract } = require('./math')  // this will give us add and sub so we can call it directly
// console.log(add(5, 6))  // this will print 11


console.log(math.sub(3,4));
console.log(math.add(6,4));
// console.log(math.add(3,4)); // this will also work but it is not good