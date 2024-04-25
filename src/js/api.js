
const api_uri = "https://joni2307-mongodb-fb4a10f76f99.herokuapp.com";


function handleSuccessResponse(responseData, message) {
    return {
        success: true,
        data: responseData,
        status: 200,
        message: message
    };
}



async function handleErrorResponse(response) {
    try {

        const errorData = await response.json();
        console.log(errorData);

        console.log(errorData.message);

        if (Array.isArray(errorData.message)) {

            console.log(errorData.message[0]);
            console.log(errorData.message.length);
        }

        if (errorData.message && Array.isArray(errorData.message)) {

            let errorMessage = errorData.message[0]
            if (errorData.message.length > 1) {

                errorMessage = "";

                errorData.message.forEach(element => {
                    errorMessage += element + ", ";
                    console.log("inne i foreach");
                });
                console.log(errorMessage);
                errorMessage = errorMessage.slice(0, -2);//remove last comma            
                console.log(errorMessage);
            }


            console.log(errorMessage);
            return {
                success: false,
                status: response.status,
                errors: errorMessage
            }
        }
        else {
            if (errorData.message[0] && errorData.message[0].length>1 ) { errorData.message = errorData.message[0]; }

            return {
                success: false,
                status: response.status,
                errors: [{
                    message: errorData.message || "An unspecified error occurred."
                }]
            };
        }
    }


    catch (error) {

        const errorMessage = await response.text();
        return {
            success: false,
            status: response.status,
            errors: [{ message: errorMessage }]
        };
    }
}

async function fetchWorkExperience(id = '') {
    console.log("fetching");

    try {
        const url = id ? `${api_uri}/get/${id}` : `${api_uri}/get`;
        const response = await fetch(url);
        const status = response.status;


        if (!response.ok) {
            console.log(status);
            console.log("heg");
            const errorResponse = await handleErrorResponse(response);

            console.log(errorResponse);

            console.error(errorResponse.errors[0].message);
            console.error(errorResponse.status);
            console.error(errorResponse.errors.map(err => err.message).join(', '));
            return { success: false, status: status, errors: errorResponse.errors.map(err => err.message).join(', ') };
        }

        const responseData = await response.json();
        const message = id ? `Work experience with ID: ${id} fetched successfully.` : `Work experience list fetched successfully.`;

        return { success: true, status: 200, data: responseData, message: message };
    } catch (error) {
        console.error(error);
        let errorMessage = handleErrorResponse(response);

        
        return { success: false, status: errorMessage.status, message: errorMessage.message };
    }
}
async function addWorkExperience(workExperienceData) {

    try {
        const response = await fetch(`${api_uri}/post`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(workExperienceData)
        });
        if (!response.ok) {
            const errorResponse = await handleErrorResponse(response);
            console.error(errorResponse.status);
            console.error(errorResponse.errors[0].message);
            return { success: false, status: errorResponse.status, errors: errorResponse.errors};
        }
        return handleSuccessResponse(null, "Work experience added successfully.");
    } catch (error) {
        console.error("Error adding work experience:", error.message);
        return { success: false, errors: [{ errorCode: null, message: "An error occurred while adding the work experience." }] };
    }
}

async function updateWorkExperience(id, workExperienceData) {
    try {
        const response = await fetch(`${api_uri}/put/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(workExperienceData)
        });

        const status = response.status; // Access the status code

        if (!response.ok) {
            console.log(status);
            console.log("heg");
            const errorResponse = await handleErrorResponse(response);
            console.log("heg2");
            console.error(errorResponse.status);
            console.error(errorResponse.errors);

            return { success: false, status: errorResponse.status, errors: errorResponse.errors[0].message || errorResponse.errors };
        }

        return handleSuccessResponse(null, `Work experience with ID: ${id} updated successfully.`);
    } catch (error) {
        console.error("Error updating work experience:", error.message);
        return { success: false, errors: [{ errorCode: null, message: "An error occurred while updating the work experience." }] };
    }
}

async function deleteWorkExperience(id) {
    try {
        const response = await fetch(`${api_uri}/delete/${id}`, {
            method: "DELETE"
        });
        if (!response.ok) {
            console.log("hej");
            const errorResponse = await handleErrorResponse(response);
            return { success: false, status: errorResponse.status, message: errorResponse.errors[0].message || errorResponse.errors };
        }
        return handleSuccessResponse(null, `Work experience with ID: ${id} deleted successfully.`);
    } catch (error) {
        console.log("hej2");
        console.error("Error deleting work experience:", error.message);
        return { success: false, status: 500, errors: "An error occurred while deleting the work experience." };
    }
}
