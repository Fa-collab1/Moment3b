async function fetchAndDisplayWorkExperienceList() {
    try {
        const workExperienceListResponse = await fetchWorkExperience();
        
        if (workExperienceListResponse.success) {
            const workExperienceList = workExperienceListResponse.data;
            renderWorkExperienceList(workExperienceList);
            renderMessage(workExperienceListResponse.status, "Work experience list loaded successfully.");
        } else {
            renderMessage(workExperienceListResponse.status, workExperienceListResponse.errors);
            
        }
    } catch (error) {
        console.error("Error fetching and displaying work experience list:", error.message);
        renderMessage([], "An error occurred while fetching the work experience list.");
    }
}

function renderWorkExperienceList(workExperienceList) {
    const workExperienceTableBody = document.getElementById('workExperienceTableBody');
    workExperienceTableBody.innerHTML = ''; // Clear previous data

// Sort the workExperienceList array
workExperienceList.sort((a, b) => {
    // Handle cases where enddate is null or undefined
    if (!a.enddate && !b.enddate) {
        // If both end dates are null or undefined, sort by start date
        return new Date(b.startdate) - new Date(a.startdate);
    } else if (!a.enddate) {
        // If only a's end date is null or undefined, a comes first
        return -1;
    } else if (!b.enddate) {
        // If only b's end date is null or undefined, b comes first
        return 1;
    } else {
        // Sort by end date in descending order
        return new Date(b.enddate) - new Date(a.enddate);
    }
});

    workExperienceList.forEach(workExperience => {
        const row = document.createElement('tr');
        row.innerHTML = `
           
        
        <td><a href="edit.html?id=${workExperience._id}">${workExperience.companyname}</a></td>
            <td>${workExperience.jobtitle}</td>
            <td>${workExperience.location}</td>
            <td>${workExperience.startdate}</td>
            <td>${workExperience.enddate || 'Ongoing'}</td>
            <td>${workExperience.description || ''}</td>
        `;
        workExperienceTableBody.appendChild(row);
    });
}


document.addEventListener('DOMContentLoaded', fetchAndDisplayWorkExperienceList);

document.addEventListener('DOMContentLoaded', () => {
    
        const urlParams = new URLSearchParams(window.location.search);
        const s = urlParams.get('s');
        
        if (s && Number.isInteger(parseInt(s)) && parseInt(s) >= 1000 && parseInt(s) < 1003) {
            renderMessage(parseInt(s), "");
        }
    
});