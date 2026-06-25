async function e(){try{let e=await fetch("http://localhost:3000/students");if(!e.ok)throw Error(error.message);return await e.json()}catch(e){throw e}}async function t(e){try{let t=await fetch(`http://localhost:3000/students/${e}`,{method:"DELETE"});if(!t.ok)throw Error(error.message);return t}catch(e){throw e}}async function r(e){let t={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}};try{let e=await fetch("http://localhost:3000/students",t);if(!e.ok)throw Error(error.messages);return await e.json()}catch(e){throw e}}async function a(e,t){let r={method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}};try{let e=await fetch(`http://localhost:3000/students/${t}`,r);if(!e.ok)throw Error(error.message);return await e.json()}catch(e){throw e}}let n=document.querySelector("tbody"),s=document.getElementById("get-students-btn"),l=document.getElementById("add-student-form"),o=null;function c(e){n.innerHTML=e.map(({id:e,name:t,age:r,course:a,skills:n,email:s,isEnrolled:l})=>`<tr id="${e}">
        <td>${e}</td>
    <td class="name">${t}</td>
    <td class="age">${r}</td>
    <td class="course">${a}</td>
    <td class="skills">${n}</td>
    <td class="email">${s}</td>
    <td>${l?"Випустився":"Невипустився"}</td>
    <td>
      <button data-action="edit">Edit</button>
      <button data-action="delete">Delete</button>
    </td>
    </tr>`).join("")}s.addEventListener("click",async()=>{try{let t=await e();c(t)}catch(e){console.log(e.message)}}),l.addEventListener("submit",async t=>{t.preventDefault();let n={name:t.currentTarget.elements.name.value,age:t.currentTarget.elements.age.value,course:t.currentTarget.elements.course.value,skills:t.currentTarget.elements.skills.value,email:t.currentTarget.elements.email.value,isEnrolled:t.currentTarget.elements.isEnrolled.checked};if(o)try{await a(n,o);let t=await e();c(t),l.reset(),o=null;return}catch(e){console.log(e.message)}await r(n),c(await e()),l.reset()}),n.addEventListener("click",async r=>{if("BUTTON"!==r.target.nodeName)return;let a=r.target.dataset.action,n=r.target.closest("tr"),s=n.id;if("delete"===a)try{await t(s);let r=await e();c(r)}catch(e){console.log(e.message)}"edit"===a&&(o=s,l.elements.name.value=n.querySelector(".name").textContent,l.elements.age.value=n.querySelector(".age").textContent,l.elements.course.value=n.querySelector(".course").textContent,l.elements.skills.value=n.querySelector(".skills").textContent,l.elements.email.value=n.querySelector(".email").textContent,l.elements.email.value=n.querySelector(".email").textContent)});
//# sourceMappingURL=crud-hw.e2822b24.js.map
