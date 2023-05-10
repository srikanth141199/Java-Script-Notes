// Import stylesheets
import './style.css';
import './dom.css';

import './dom.js';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//DOM :  Document Object Model

var User = (fName, count) => {
  (this.fName = fName),
    (this.count = count),
    (this.getCourseCount = () => {
      console.log('Course count  is : ${this.count}');
    });
};

// var Sri = User('Sri', 10);
// console.log(Sri);

var King = new User('King', 100);
console.log(King);
