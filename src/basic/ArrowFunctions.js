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


//Perhaps the greatest benefit of using Arrow functions is with DOM-level methods (setTimeout, setInterval, addEventListener) that usually required some kind of closure, call, apply or bind to ensure the function executed in the proper scope.

var obj = {
  count : 10,
  doSomethingLater : function (){
      setTimeout(function(){ // the function executes on the window scope
          this.count++;
          console.log(this.count);
      }, 300);
  }
}

obj.doSomethingLater(); // console prints "NaN", because the property "count" is not in the window scope.



var obj = {
  count : 10,
  doSomethingLater : function(){
      // The traditional function binds "this" to the "obj" context.
      setTimeout( () => {
          // Since the arrow function doesn't have its own binding and
          // setTimeout (as a function call) doesn't create a binding
          // itself, the "obj" context of the traditional function will
          // be used within.
          this.count++;
          console.log(this.count);
      }, 3000);
  }
}

obj.doSomethingLater();
