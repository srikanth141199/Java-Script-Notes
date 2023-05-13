//using bind and call we can use the method defined in a different object
const sri = {
  fName: 'Sri',
  lName: 'King',
  count: 143,
  printData: function () {
    console.log(
      'First name is : ' +
        this.fName +
        '\n' +
        'Last Name is : ' +
        this.lName +
        '\n' +
        'Count is  : ' +
        this.count
    );
  },
};

sri.printData();

const lekha = {
  fName: 'Lekha',
  lName: 'Deyam',
  count: 123,
};

console.log('using bind as a prototype : ', sri.printData.bind(lekha));
console.log('using bind and invoking the method : ');
sri.printData.bind(lekha)();
console.log('================================');

const obj = sri.printData.bind(lekha);
obj();

console.log('Invoking using call method');
sri.printData.call(lekha);
