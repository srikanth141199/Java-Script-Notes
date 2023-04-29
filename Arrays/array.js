var country = ['Indis', 'US', 'Russia', 'UK'];

var states = new Array('Andra', 'Delhi', 'Karnataka');

console.log('Country Array : ', country);
console.log('states Array : ', states);

console.log('states Length : ', states.length);

states[0] = 'Goa';
console.log('Updated States : ', states);

states.pop();
console.log('Updated States : ', states);

states.unshift('Jammu');
console.log('Updated States : ', states);

states.shift();
console.log('Updated States : ', states);

console.log('Index nod an element present in Array : ', states.indexOf('Goa'));
console.log(
  'Index if the element is not present in an array : ',
  states.indexOf('Srikanth')
);

console.log(Array.from('Srikanth'));

var isEven = (ele) => {
  return ele % 2 == 0;
};

var res = [1, 2, 3, 4, 5, 6].every(isEven);
//here we are check if every element inside above array is even or not
console.log('Result using every : ', res);

//same as above and optimized
//when ever there are braces for function we should write return
var res2 = [2, 4, 6, 8].every((ele) => {
  return ele % 2 === 0;
});
console.log('Result in Optimed : ', res2);

// If braces are not there return is not required
var res3 = [2, 3, 4, 5].every((e) => e % 2 === 0);
console.log('Res3 Optimed : ', res3);

const arr1 = [1, 2, 3, 4, 5, 6];
console.log('Fill property of Array : ', arr1.fill('S', 2));
console.log('Fill property of Array : ', arr1.fill('K', 3, 4));

const arr2 = [23, 34, 45, 56, 67];
const res4 = arr2.filter((ele) => ele != 56);
console.log('Array using Filter : ', res4);

var peps = ['Sri', 'Ram', 'Ajay', 'Subbu', 'Krishna', 'Shiva', 'Raju', 'Hari'];
console.log('Array Slice : ', peps.slice(1, 7));
console.log('Updated Peps Array : ', peps);
console.log('Array Splice : ', peps.splice(1, 5));
var peps = ['Sri', 'Ram', 'Ajay', 'Subbu', 'Krishna', 'Shiva', 'Raju', 'Hari'];
console.log('Updated Peps Array : ', peps);
peps.splice(1, 3, 'King', 'Raju');
console.log('Splice array : ', peps);
