const form = document.getElementById("studentForm");
const table = document.getElementById("studentTable");
const editIndexInput = document.getElementById("editIndex");

const studentIdInput = document.getElementById("studentId");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const genderInput = document.getElementById("gender");
const courseInput = document.getElementById("course");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const addressInput = document.getElementById("address");

let students = JSON.parse(localStorage.getItem("students")) || [];
displayStudents();

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const student = {
    id: studentIdInput.value,
    name: nameInput.value,
    age: ageInput.value,
    gender: genderInput.value,
    course: courseInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    address: addressInput.value
  };

  const editIndex = editIndexInput.value;

  if (editIndex === "") {
    students.push(student);
  } else {
    students[editIndex] = student;
    editIndexInput.value = "";
  }

  saveToLocalStorage();
  form.reset();
  displayStudents();
});

function displayStudents() {
  table.innerHTML = "";

  students.forEach((student, index) => {
    table.innerHTML += `
      <tr>
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.gender}</td>
        <td>${student.course}</td>
        <td>${student.email}</td>
        <td>${student.phone}</td>
        <td>${student.address}</td>
        <td>
          <button class="action-btn edit" onclick="editStudent(${index})">Edit</button>
          <button class="action-btn delete" onclick="deleteStudent(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
}

function editStudent(index) {
  const student = students[index];

  studentIdInput.value = student.id;
  nameInput.value = student.name;
  ageInput.value = student.age;
  genderInput.value = student.gender;
  courseInput.value = student.course;
  emailInput.value = student.email;
  phoneInput.value = student.phone;
  addressInput.value = student.address;

  editIndexInput.value = index;
}

function deleteStudent(index) {
  students.splice(index, 1);
  saveToLocalStorage();
  displayStudents();
}

function saveToLocalStorage() {
  localStorage.setItem("students", JSON.stringify(students));
}