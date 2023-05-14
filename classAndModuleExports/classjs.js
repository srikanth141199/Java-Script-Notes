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
}

module.exports = User;

const rock = new User('Rock', 'rock@star.com');
console.log(rock.getInfo());

rock.enrollCourse('Angular');

console.log('Rock Course List : ', rock.courseList);
console.log('Rock Course List : ', rock.getCourseList());
