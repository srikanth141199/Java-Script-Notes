const courses = [
  {
    name: 'Complete React JS',
    price: 2.3,
  },
  {
    name: 'Complete Angular JS',
    price: 5,
  },
  {
    name: 'Complete Vue Course',
    price: 3.2,
  },
  {
    name: 'Complete MERN Course',
    price: 2,
  },
];

function generateList() {
  //we created <ul> tag here based on html class selection
  const ul = document.querySelector('.list-group');
  ul.innerHTML = '';
  //inserting each element of courses to <li> tag
  courses.forEach((ele) => {
    const li = document.createElement('li');
    li.classList.add('list-group-item');

    //appending name feild to <li>
    const name = document.createTextNode(ele.name);
    li.appendChild(name);

    const span = document.createElement('span');
    span.classList.add('cost');
    const price = document.createTextNode('$ ' + ele.price);
    span.appendChild(price);

    //appending <span> to <li>
    li.appendChild(span);

    //appending <li> to <ul>
    ul.appendChild(li);
  });
}

// generateList();
//In normal application below to be written but in Stack Blitz function call to be written to understand go through commented part.

//window.addEventListener('load', generateList);
window.addEventListener('load', generateList());

//The difference between window.addEventListener('load', generateList()); and window.addEventListener('load', generateList); is in the way the generateList() function is passed as an argument to the addEventListener() method.

// In the first case window.addEventListener('load', generateList());, the generateList() function is executed immediately when the addEventListener() method is called. This means that the function is executed before the 'load' event is triggered. This is because the function is invoked and its return value is passed as the argument to addEventListener(). If generateList() returns a value, that value is passed to addEventListener(), which is not what we want.

// In the second case window.addEventListener('load', generateList);, the generateList() function is passed as a reference or a callback to the addEventListener() method. This means that the function is not executed immediately when the addEventListener() method is called. Instead, the generateList() function is executed only when the 'load' event is triggered. This is the correct way to use addEventListener() with a function.

// To summarize, when passing a function as a parameter to the addEventListener() method, you should pass the function reference (without the parentheses) rather than the function invocation (with the parentheses) so that it can be executed later as a callback function when the event occurs.

// User
// then why window.addEventListener('load', generateList()); is executed in stackblitz but not window.addEventListener('load', generateList);

// ChatGPT
// The reason why window.addEventListener('load', generateList()); is executed in StackBlitz but not window.addEventListener('load', generateList); is due to the way StackBlitz executes JavaScript code.

// When you use the first version, window.addEventListener('load', generateList());, StackBlitz executes the generateList() function immediately, as soon as the JavaScript code is loaded. This is because StackBlitz automatically adds the script to the head section of the HTML file, and the script is executed as soon as it is loaded. So when the 'load' event is triggered, the function has already been executed.

// On the other hand, when you use the second version, window.addEventListener('load', generateList);, the generateList() function is passed as a reference to the addEventListener() method. StackBlitz does not automatically execute the function, but instead waits for the 'load' event to be triggered before executing the function. However, since StackBlitz does not simulate a user interacting with the page, the 'load' event is never triggered, and the function is never executed.

// In summary, while both versions of the code are valid, they behave differently depending on the execution environment. In a typical web browser environment, both versions would behave as expected, but in StackBlitz, the second version may not behave as expected due to the absence of a user-triggered 'load' event.

const button = document.querySelector('.btn-outline-dark');
button.addEventListener('click', function () {
  //courses.sort((a, b) => a.price - b.price);
  courses.sort(function (a, b) {
    return a.price - b.price;
  });
  generateList();
});

const desButton = document.querySelector('.btn-primary');
desButton.addEventListener('click', function () {
  courses.sort((a, b) => b.price - a.price);
  generateList();
});
