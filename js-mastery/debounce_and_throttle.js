// Debounce

function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// Throttle

function throttle(fn, limit) {
  let inThrottle = false;

  return function (...args) {
    fn.apply(this, args);
    inThrottle = true;

    setTimeout(() => {
      inThrottle = false;
    }, limit);
  };
}
