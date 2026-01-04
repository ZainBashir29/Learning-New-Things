function createCounter(start) {
  let count = start;
  return {
    increment: function () {
      console.log(++count);
    },
  };
}

const c1 = createCounter(10);
c1.increment(); // 11
c1.increment(); // 12

const c2 = createCounter(0);
c2.increment(); // 1

function setup() {
  let value = 0;

  return [() => value++, () => ++value, () => value];
}

const [a, b, c] = setup();

console.log(a()); // 0
console.log(b()); // 2
console.log(c()); // 2
