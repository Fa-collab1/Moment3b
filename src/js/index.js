

async function fetchAndDisplayWorkExperienceList() {
    const workExperienceTableBody = document.getElementById('workExperienceTableBody');
    const noWorkExperienceFound = document.getElementById('noWorkExperienceFound');
    if (!workExperienceTableBody || !noWorkExperienceFound) return;

    noWorkExperienceFound.innerHTML = '';
    noWorkExperienceFound.style.display = 'none';

    
    const workExperienceList = await fetchWorkExperienceList();

    
    if (workExperienceTableBody) workExperienceTableBody.innerHTML = '';

    
    if (workExperienceList.length === 0) {
        if (noWorkExperienceFound) {
            noWorkExperienceFound.style.display = 'block';
            noWorkExperienceFound.innerHTML = 'No work experience found.';
        }
        return;
    }

    
    workExperienceList.sort((a, b) => {
        if (!a.enddate && b.enddate) return -1;
        if (a.enddate && !b.enddate) return 1;
        if (!a.enddate && !b.enddate || a.enddate && b.enddate) {
            if (a.startdate > b.startdate) return -1;
            if (a.startdate < b.startdate) return 1;
        }
        return 0;
    });

    
    workExperienceList.forEach(workExperience => {
        const row = document.createElement('tr');

        if (workExperience.enddate === null) {
            workExperience.enddate = 'Ongoing';
        }

        if (workExperience.description === undefined || workExperience.description === null || workExperience.description === '') {
            workExperience.description = '';
        }

        
        row.innerHTML = `
            <td><a href="edit.html?id=${workExperience._id}">${workExperience.companyname}</a></td>
            <td>${workExperience.jobtitle}</td>
            <td>${workExperience.location}</td>
            <td>${workExperience.startdate}</td>
            <td>${workExperience.enddate}</td>
            <td>${workExperience.description}</td>
        `;
        if (workExperienceTableBody) workExperienceTableBody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', fetchAndDisplayWorkExperienceList);