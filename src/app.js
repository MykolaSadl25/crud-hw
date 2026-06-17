import { getStudents } from "./js/getStudents";
import { deleteStudents } from "./js/deleteStudents";
import { addStudent } from "./js/addStudents";
import { updateStudents } from "./js/updateStudents";
const tableRef = document.querySelector("tbody");
const getStudentsBtn = document.getElementById("get-students-btn");
const formRef = document.getElementById("add-student-form")
let currentID = null;

function createItems(array) {
    const elem = array.map(({id,name,age,course,skills,email,isEnrolled})=>{
        return `<tr id="${id}">
        <td>${id}</td>
    <td class="name">${name}</td>
    <td class="age">${age}</td>
    <td class="course">${course}</td>
    <td class="skills">${skills}</td>
    <td class="email">${email}</td>
    <td>${isEnrolled?"Випустився":"Невипустився"}</td>
    <td>
      <button data-action="edit">Edit</button>
      <button data-action="delete">Delete</button>
    </td>
    </tr>`;
    }).join("")
     tableRef.innerHTML = elem;
};

getStudentsBtn.addEventListener("click",()=>{
    getStudents()
    .then(res=>createItems(res))
    .catch(error=>console.log(error));
})

formRef.addEventListener("submit",(e)=>{
    e.preventDefault()
    const data = {
        name:e.currentTarget.elements.name.value,
        age:e.currentTarget.elements.age.value,
        course:e.currentTarget.elements.course.value,
        skills:e.currentTarget.elements.skills.value,
        email:e.currentTarget.elements.email.value,
        isEnrolled:e.currentTarget.elements.isEnrolled?"Випустився":"Не випустився"
    }
    if (currentID) {
        updateStudents(data,currentID)
        .then(getStudents)
        .then(res=>createItems(res))
        .finally(()=>{
            formRef.reset()
        })
        return;
    }
    addStudent(data)
    .then(getStudents)
    .then(res=>createItems(res)).finally(()=>{
        formRef.reset()
    })
    
})

tableRef.addEventListener("click",(e)=>{
    if (e.target.noneName ==="BUTTON") {
        return;
    }
    const action = e.target.dataset.action;
    const tr = e.target.closest("tr")
    const id = tr.id;
    if (action === "delete") {
        deleteStudents(id)
        .then(getStudents)
        .then(res=>createItems(res))
    }
    if (action === "edit") {
        currentID = id;
       formRef.elements.name.value =tr.querySelector(".name").textContent;
       formRef.elements.age.value =tr.querySelector(".age").textContent;
       formRef.elements.course.value =tr.querySelector(".course").textContent;
       formRef.elements.skills.value =tr.querySelector(".skills").textContent;
       formRef.elements.email.value =tr.querySelector(".email").textContent;
       formRef.elements.email.value =tr.querySelector(".email").textContent;
    }
})