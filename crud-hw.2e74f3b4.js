function e(){return fetch("http://localhost:3000/students").then(e=>e.json()).catch(e=>e)}let t=document.querySelector("tbody"),n=document.getElementById("get-students-btn"),l=document.getElementById("add-student-form"),s=null;function a(e){t.innerHTML=e.map(({id:e,name:t,age:n,course:l,skills:s,email:a,isEnrolled:r})=>`<tr id="${e}">
        <td>${e}</td>
    <td class="name">${t}</td>
    <td class="age">${n}</td>
    <td class="course">${l}</td>
    <td class="skills">${s}</td>
    <td class="email">${a}</td>
    <td>${r?"Випустився":"Невипустився"}</td>
    <td>
      <button data-action="edit">Edit</button>
      <button data-action="delete">Delete</button>
    </td>
    </tr>`).join("")}n.addEventListener("click",()=>{e().then(e=>a(e)).catch(e=>console.log(e))}),l.addEventListener("submit",t=>{t.preventDefault();let n={name:t.currentTarget.elements.name.value,age:t.currentTarget.elements.age.value,course:t.currentTarget.elements.course.value,skills:t.currentTarget.elements.skills.value,email:t.currentTarget.elements.email.value,isEnrolled:t.currentTarget.elements.isEnrolled?"Випустився":"Не випустився"};if(s){var r;return void(r=s,fetch(`http://localhost:3000/students${r}`,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(e=>e.json())).then(e).then(e=>a(e)).finally(()=>{l.reset()})}fetch("http://localhost:3000/students",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(e=>e.json()).then(e).then(e=>a(e)).finally(()=>{l.reset()})}),t.addEventListener("click",t=>{if("BUTTON"===t.target.noneName)return;let n=t.target.dataset.action,r=t.target.closest("tr"),o=r.id;"delete"===n&&fetch(`http://localhost:3000/students/${o}`,{method:"DELETE"}).then(e).then(e=>a(e)),"edit"===n&&(s=o,l.elements.name.value=r.querySelector(".name").textContent,l.elements.age.value=r.querySelector(".age").textContent,l.elements.course.value=r.querySelector(".course").textContent,l.elements.skills.value=r.querySelector(".skills").textContent,l.elements.email.value=r.querySelector(".email").textContent,l.elements.email.value=r.querySelector(".email").textContent)});
//# sourceMappingURL=crud-hw.2e74f3b4.js.map
