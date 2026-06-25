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

getStudentsBtn.addEventListener("click",async ()=>{
    try {
    const res = await getStudents()
    createItems(res)
    } catch (error) {
        console.log(error.message);
        
    }
})

formRef.addEventListener("submit",async (e)=>{
    e.preventDefault()
    const data = {
        name:e.currentTarget.elements.name.value,
        age:e.currentTarget.elements.age.value,
        course:e.currentTarget.elements.course.value,
        skills:e.currentTarget.elements.skills.value,
        email:e.currentTarget.elements.email.value,
        isEnrolled:e.currentTarget.elements.isEnrolled.checked,
    }
    if (currentID) {
        try {
            await updateStudents(data,currentID)
        const res = await getStudents()
        createItems(res)
        formRef.reset()
        currentID=null;
        return;
        } catch (error) {
            console.log(error.message);
            
        }
    }
    await addStudent(data)
    const res = await getStudents()
    createItems(res)
    formRef.reset()
})

tableRef.addEventListener("click",async (e)=>{
    if (e.target.nodeName !=="BUTTON") {
        return;
    }
    const action = e.target.dataset.action;
    const tr = e.target.closest("tr")
    const id = tr.id;
    if (action === "delete") {
        try {
            await deleteStudents(id)
        const res = await getStudents()
        createItems(res)
        } catch (error) {
            console.log(error.message);
            
        }
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

// asdasd