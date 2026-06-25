export async function getStudents() {
    try {
        const res = await fetch("http://localhost:3000/students");
        if (!res.ok) {
            throw new Error(error.message)
        }
    const info = await res.json();
    return info
    } catch (error) {
        throw error;
    }
}

// sadsad