console.log(this);

var users = {
  fName: 'Srikanth',
  lName: 'Kollepara',
  course: 4,
  getCourseCount: function () {
    console.log('Line 7', this);
    function fun() {
      console.log('Inside Function ');
      console.log('This inside Function : ', this);
    }
    fun();
  },
};

users.getCourseCount();
