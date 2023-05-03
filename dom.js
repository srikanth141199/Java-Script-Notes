var counter = document.querySelector('.count');

console.log('inside dom.js');

var value = 1;

setInterval(() => {
  while (value < 10) {
    value++;
    counter.innerHTML = value;
  }
}, 1000);
