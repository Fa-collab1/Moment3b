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

        // Display success message or handle errors
        if (success) {
            // Display success message or redirect to another page
            console.log('Work experience added successfully');
            window.location.href = '/'; // Redirect to the home page
        } else {
            // Display error message to the user
            console.error('Failed to add work experience');
        }
    });
}
