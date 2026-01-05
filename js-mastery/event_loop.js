console.log(1);

setTimeout(() => {
  console.log(2);
  Promise.resolve().then(() => console.log(3));
}, 0);

Promise.resolve().then(() => {
  console.log(4);
  setTimeout(() => console.log(5), 0);
});

console.log(6);

//  * ------------------------ *

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("3");
  })
  .then(() => {
    console.log("4");
  });

setTimeout(() => {
  console.log("5");
  Promise.resolve().then(() => {
    console.log("6");
  });
}, 0);

console.log("7");

//  * ------------------------ *

console.log("1");

async function asyncTask() {
  console.log("2");
  await Promise.resolve();
  console.log("3");
}

setTimeout(() => {
  console.log("4");
}, 0);

asyncTask();

new Promise((resolve) => {
  console.log("5");
  resolve();
}).then(() => {
  console.log("6");
});

console.log("7");

// * -------------------------- *

console.log("1");

setTimeout(() => {
  console.log("2");
  Promise.resolve().then(() => {
    console.log("3");
  });
}, 0);

async function finalBoss() {
  console.log("4");
  await Promise.resolve();
  console.log("5");
}

finalBoss();

new Promise((resolve) => {
  console.log("6");
  setTimeout(() => {
    console.log("7");
    resolve();
  }, 0);
}).then(() => {
  console.log("8");
});

console.log("9");

// 1 4 6 9 2 3 7 8
