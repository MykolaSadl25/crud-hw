import { getStudents } from "./js/getStudents";
import { deleteStudents } from "./js/deleteStudents";
import { addStudent } from "./js/addStudents";
const tableRef = document.querySelector("tbody");
const getStudentsBtn = document.getElementById("get-students-btn");
const formRef = document.getElementById("add-student-form")

function createItems(array) {
    const elem = array.map(({id,name,age,course,skills,email,isEnrolled})=>{
        return `<tr id="${id}">
        <td>${id}</td>
    <td>${name}</td>
    <td>${age}</td>
    <td>${course}</td>
    <td>${skills}</td>
    <td>${email}</td>
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
        isEnrolled:e.currentTarget.elements.isEnrolled.value?"Випустився":"Не випустився"
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
        deleteStudents(id).then(getStudents).then(res=>createItems(res))
    }
})