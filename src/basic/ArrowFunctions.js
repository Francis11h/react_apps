// Traditional Anonymous Function
function normalAdd(a) {
  return a + 100;
}

// Arrow Function Break Down

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
arrowfunc1 = (a) => {
  return a + 100;
};

// 2. Remove the body braces and word "return" -- the return is implied.
arrowfunc2 = (a) => a + 100;

// 3. Remove the argument parentheses
arrowfunc3 = (a) => a + 100;


console.log(normalAdd(1));
console.log(arrowfunc1(1));
console.log(arrowfunc2(1));
console.log(arrowfunc3(1));


//use `node ArrowFunctions.js` to run