//Lexit scope
function init(){
  var fName = 'Srikanth',
  function hello() {
    console.log('First Name is  : '+fName);
  }
  hello()
}

init();
//console.log(fName);
var name = init();

console.log("data is  : "+name);

//closure

function abc(){
  var fName = 'King',
  function hi() {
    console.log('First Name is  : '+fName);
  }
  console.log('this is : ',hi)
  return hi;
}

var value = abc();

value()

//closue ex 2

function add(x) {
  return (y) =>{
    return x+y;
  };
};
console.log('add is : ', add)
var add2 = add(9);
console.log("Add2 is : ",add2);
console.log("ADDTION is : ",add2(5));
console.log('Double paranthesis : ', add(11)(56))