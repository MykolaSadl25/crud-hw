export function updateStudents(data,id) {
    const options = {
        method:"POST",
        body:JSON.stringify(data),
        headers: {
      "Content-Type": "application/json; charset=UTF-8",
    }
    }
    return fetch(`http://localhost:3000/students${id}`,options).then(res=>res.json())
}