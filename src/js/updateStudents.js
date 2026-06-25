export async function updateStudents(data,id) {
    const options = {
        method:"PUT",
        body:JSON.stringify(data),
        headers: {
      "Content-Type": "application/json; charset=UTF-8",
    }
    }
    try {
      const res = await fetch(`http://localhost:3000/students/${id}`,options)
      if (!res.ok) {
        throw new Error(error.message)
      }
    const info = await res.json()
    return info
    } catch (error) {
      throw error;
    }
}

// asdasdas