const api_uri = "https://joni2307-mongodb-fb4a10f76f99.herokuapp.com";


async function fetchWorkExperienceList() {
    try {
        const response = await fetch(`${api_uri}/get`);
        if (!response.ok) {
            throw new Error("Failed to fetch the work experience list.");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching the work experience list:", error.message);
        return [];
    }
}


async function fetchWorkExperienceById(id) {
    try {
        const response = await fetch(`${api_uri}/get/${id}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch work experience with ID: ${id}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching work experience:", error.message);
        return null;
    }
}


async function addWorkExperience(workExperienceData) {
    try {
        const response = await fetch(`${api_uri}/post`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(workExperienceData)
        });
        if (!response.ok) {
            throw new Error("Failed to add work experience.");
        }
        return true;
    } catch (error) {
        console.error("Error adding work experience:", error.message);
        return false;
    }
}

// Function to update an existing work experience in the backend
async function updateWorkExperience(id, workExperienceData) {
    try {
        const response = await fetch(`${api_uri}/put/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(workExperienceData)
        });
        if (!response.ok) {
            throw new Error(`Failed to update work experience with ID: ${id}`);
        }
        return true;
    } catch (error) {
        console.error("Error updating work experience:", error.message);
        return false;
    }
}


async function deleteWorkExperience(id) {
    try {
        const response = await fetch(`${api_uri}/delete/${id}`, {
            method: "DELETE"
        });
        if (!response.ok) {
            throw new Error(`Failed to delete work experience with ID: ${id}`);
        }
        return true;
    } catch (error) {
        console.error("Error deleting work experience:", error.message);
        return false;
    }
}




