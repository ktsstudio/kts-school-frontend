var subject = 'Math';

function lovePhysics(subject) {
  subject = 'Physics';
}

// передача по значению
lovePhysics(subject);
console.log(subject);

var student = {
  name: 'Sheldon',
  grade: 4
}

// передача по ссылке
function changeGrade(obj) {
  obj.grade = 9
}

changeGrade(student);
console.log(student);