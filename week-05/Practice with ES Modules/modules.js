import aCourse from './Course.js';

aCourse.init(); //when we call our object we can call their methods
document.querySelector('#enrollStudent').addEventListener('click', function () {
  const sectionNum = document.querySelector('#sectionNumber').value;
  aCourse.changeEnrollment(sectionNum);
});
document.querySelector('#dropStudent').addEventListener('click', function () {
  const sectionNum = document.querySelector('#sectionNumber').value;
  aCourse.changeEnrollment(sectionNum, false);
});
