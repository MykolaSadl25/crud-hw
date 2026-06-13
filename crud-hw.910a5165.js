function t(){return fetch("http://localhost:3000/students").then(t=>t.json()).catch(t=>t)}let e=document.querySelector("tbody"),n=document.getElementById("get-students-btn"),d=document.getElementById("add-student-form");function a(t){e.innerHTML=t.map(({id:t,name:e,age:n,course:d,skills:a,email:l,isEnrolled:r})=>`<tr id="${t}">
        <td>${t}</td>
    <td>${e}</td>
    <td>${n}</td>
    <td>${d}</td>
    <td>${a}</td>
    <td>${l}</td>
    <td>${r?"Випустився":"Невипустився"}</td>
    <td>
      <button data-action="edit">Edit</button>
      <button data-action="delete">Delete</button>
    </td>
    </tr>`).join("")}n.addEventListener("click",()=>{t().then(t=>a(t)).catch(t=>console.log(t))}),d.addEventListener("submit",e=>{e.preventDefault(),fetch("http://localhost:3000/students",{method:"POST",body:JSON.stringify({name:e.currentTarget.elements.name.value,age:e.currentTarget.elements.age.value,course:e.currentTarget.elements.course.value,skills:e.currentTarget.elements.skills.value,email:e.currentTarget.elements.email.value,isEnrolled:e.currentTarget.elements.isEnrolled.value?"Випустився":"Не випустився"}),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(t=>t.json()).then(t).then(t=>a(t)).finally(()=>{d.reset()})}),e.addEventListener("click",e=>{if("BUTTON"===e.target.noneName)return;let n=e.target.dataset.action,d=e.target.closest("tr").id;"delete"===n&&fetch(`http://localhost:3000/students/${d}`,{method:"DELETE"}).then(t).then(t=>a(t))});
//# sourceMappingURL=crud-hw.910a5165.js.map
