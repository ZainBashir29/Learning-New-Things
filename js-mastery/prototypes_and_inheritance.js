function A() {}
A.prototype.x = 1;

function B() {}
B.prototype = new A();
B.prototype.y = 2;

const b = new B();

console.log(b.x); // 1
console.log(b.y); // 2
console.log(b.hasOwnProperty("x")); // false
console.log(b.hasOwnProperty("y")); // false
