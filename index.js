function getAverageGrade(student, course) {
  let sum = 0;
  for (let transRec of student.transcript) {
      if (transRec.course === course) {
        for (let grade of transRec.grades) {
          sum += grade;
        }
        return sum / 3;
      }
  }
  return -1;
}

function getAssignmentMark(student, course, num) {
  for (let transRec of student.transcript) {
      if (transRec.course === course) {
          if (num >= 1 && num <= 3) {
              return transRec.grades[num - 1]; 
          }
      }
  }
  return -1;
}

function averageAssessment(students, courseName, assignment) {
  let sum = 0;
  let count = 0;

  for (let student of students) {
      let mark = getAssignmentMark(student, courseName, assignment);
      if (mark !== -1) {
          sum += mark;
          count++;
      }
  }
  if (count === 0) {
      return -1;  
  }

  return sum / count;
}

//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};

const students = [bob, sally, paul];
console.log(getAverageGrade(bob, 'INFO 1603'));
console.log(getAssignmentMark(sally, 'INFO 1601', 2));
console.log(averageAssessment(students, 'INFO 1601', 2));