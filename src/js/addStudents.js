export async function addStudent(data) {
    const options = {
        method:"POST",
        body:JSON.stringify(data),
        headers: {
      "Content-Type": "application/json; charset=UTF-8",
    }
    }
    try {
      const res = await fetch("http://localhost:3000/students",options);
      if (!res.ok) {
        throw new Error(error.messages);
        
      }
      const info = await res.json();
      return info
    } catch (error) {
      throw error;
    }
}

// asdasdas