// Function to fetch and display the work experience item
async function addWorkExperienceItem() {
    
    // Event listener for the form submit event
    document.querySelector('form')?.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        const formData = new FormData(event.target); // Create a FormData object from the form

        // Convert FormData to JSON object
        const workExperienceData = {};
        formData.forEach((value, key) => {
            workExperienceData[key] = value;
        });

        // Send an HTTP POST request to the backend API endpoint
        const success = await addWorkExperience(workExperienceData);

        if (success.success) {

            window.location.href = '/?s=1001    ';
            try {
                
                renderMessage(message.status, message.errors); console.log("kattöga35");
            }
            catch (error) {
                
                renderMessage(500, 'An error occurred while deleting the work experience.');
            }
        }
    });
}
