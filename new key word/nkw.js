var User = function (fName, count) {
  this.fName = fName;
  this.count = count;
  this.getCourseCount = () => {
    console.log('Course count  is : ' + this.count);
  };
};

//above is a prototype, that can be used only by creating instance or else it will be undefined
// var King =  User('King', 100);
// console.error(King);

// new keyword creates a unique instances

//by creating a prototype we can ingect new keys/functions to the existing object and these are accessble to  new instances
User.prototype.getSomeThing = () => {
  console.log('This is something');
};

var King = new User('King', 100);
console.log(King);
King.getCourseCount();
King.getSomeThing();

var Sri = new User('Sri', 10);
console.log(Sri);
