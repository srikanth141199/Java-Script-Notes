const User = require('../classAndModuleExports/classjs.js');

const sri = new User('Srikanth', 'King@sri.com');

console.log(sri.getInfo());

sri.enrollCourse('React');
sri.enrollCourse('Angular');

console.table(sri.courseList);
console.log(sri.getCourseList());
