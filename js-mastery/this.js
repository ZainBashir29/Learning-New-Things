const counter = {
  count: 0,
  increment: function () {
    this.count++;
    console.log(this.count);
  },
};

const ins = counter.increment.bind(counter);

ins();

// const intervalID = setInterval(() => {
//   counter.increment();
//   if (counter.count === 3) {
//     clearInterval(intervalID);
//   }
// }, 1000);

setTimeout(() => {
  counter.increment();
}, 1000);
