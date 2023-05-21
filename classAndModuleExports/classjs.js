class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  courseList = [];

  getInfo() {
    return { name: this.name, email: this.email };
  }

  enrollCourse(name) {
    this.courseList.push(name);
  }

  getCourseList() {
    return this.courseList;
  }

  //making statis won't allow child class to inherit this function.
  static login() {
    return 'User logged in';
  }
}

module.exports = User;

const rock = new User('Rock', 'rock@star.com');
console.log(rock.getInfo());

rock.enrollCourse('Angular');

console.log('Rock Course List : ', rock.courseList);
console.log('Rock Course List : ', rock.getCourseList());

//here we defined a class which extendes the User class, SubAdmin has access to all the functions of the User class

class SubAdmin extends User {
  constructor(name, email) {
    super(name, email);
  }
  getAdminInfo() {
    return "I'm Sub Admin";
  }
}

const tom = new SubAdmin('tom', 'tom@gmail.com');
console.log('This SubAdmin class : ', tom.getAdminInfo());
console.log(tom.getInfo());
