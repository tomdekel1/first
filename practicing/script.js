let studentsList = [];
const submitButton = document.querySelector("#submitButton");
const studentBoard = document.querySelector("#main-students-info");
let id = 0;

function addToList() {
  let info = getInfo();
  createStudent(info);
}

function getInfo() {
  const studentName = document.querySelector("#name").value;
  const studentBirthday = document.querySelector("#birthday").value;
  const studentAddress = document.querySelector("#address").value;
  const studentPhone = document.querySelector("#phone").value;
  const studentFood = document.querySelector("#food").value;
  id++;

  return {
    studentName,
    studentBirthday,
    studentAddress,
    studentPhone,
    studentFood,
    id,
  };
}

function createStudent(studentDetails) {
  studentsList.push(studentDetails);
  studentBoard.innerHTML += `<div id="${studentDetails.id}" class="studentCard">
  studentName: ${studentDetails.studentName} <br>
  studentBirthday: ${studentDetails.studentBirthday} <br>
  studentAddress: ${studentDetails.studentAddress}<br>
  studentPhone: ${studentDetails.studentPhone}<br>
  studentFood: ${studentDetails.studentFood}<br>
  </div>
  `;
  return studentDetails;
}

submitButton.addEventListener("click", addToList);

// class Student {
//   constructor({ name, birthday, address, phone, food, index }) {
//     this.name = name;
//     this.birthday = birthday;
//     this.address = address;
//     this.phone = phone;
//     this.food = food;
//     this.index = index;
//   }
// }

//   student = new Student(studentDetails);
//   console.log(student);
