// замыкание
var count = 0;

function increment() {
  return ++count;
}

console.log(increment());  // 1
console.log(increment());  // 2

// поменяли значение переменной
count = 10;
console.log(increment());  // 11
console.log(increment());  // 12

// создаем замыкание
function createIncrementClosure() {
  var count = 0;

  return function() {
    return ++count;
  };
}

var incrementClosure = createIncrementClosure();
console.log(incrementClosure());  // 1
console.log(incrementClosure());  // 2

// каррирование
function createCurrying(f) {
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}

function add(a, b) {
  return a + b;
}

var carriedAdd = createCurrying(add);
var addTwo = carriedAdd(2);

console.log(addTwo(2)); // 4