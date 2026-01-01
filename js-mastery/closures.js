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
