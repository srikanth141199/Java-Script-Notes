var counter = document.querySelector('.count');
var data = document.querySelector('.text');

console.log('inside dom.js');

var value = 0;

setInterval(() => {
  if (value <= 10) {
    console.log('value is  : ', value);
    value++;
    counter.innerHTML = value;
  }
}, 1000);


