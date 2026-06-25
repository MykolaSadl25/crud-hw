export async function deleteStudents(id) {
    const options = {
        method:"DELETE"
    }
    
    try {
        const res =await fetch(`http://localhost:3000/students/${id}`,options);
        if (!res.ok) {
            throw new Error(error.message)
        }
        return res
    } catch (error) {
        throw error;
    }
    
}

// asdasd