//Context Start

tip(10);

function tip(a) {
  var b = parseInt(a);
  console.log(b + 5);
}

//here bigTip is a variable and it will be stored as nundefined at the start
var bigTip = function (a) {
  var b = parseInt(a);
  console.log('Big Tip : ', b + 5);
};

// here we are getting ans but if we write bigTip above fuinction we will get error as it is not a function because big Tip is a vari9able and it will be stored as undefined at start.
bigTip(200);

// below example gives idea that global context know name is there but it is stored as undefined untill we go to that Line
console.log(name);
var name = 'Srikanth';
console.log(name);

//below error proves it is stored as undefined rather than throwing error
//console.data(data);
//var data = "data"

//Context End
