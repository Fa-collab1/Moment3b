    async function submitEditForm() {
      const editForm = document.getElementById('editForm');
      const formData = new FormData(editForm);
      const workExperienceData = {};
      formData.forEach((value, key) => {
        workExperienceData[key] = value;
      });
      const success = await updateWorkExperience(workExperienceData.id, workExperienceData);
      if (success) {
        console.log('Work experience updated successfully');
        window.location.href = '/'; 
      } else {
        console.error('Failed to update work experience');
        }
    }

    async function populateFormWithWorkExperience(id) {
      try {
        const workExperience = await fetchWorkExperienceById(id);
        document.getElementById('id').value = id;
        document.getElementById('companyname').value = workExperience.companyname;
        document.getElementById('jobtitle').value = workExperience.jobtitle;
        document.getElementById('location').value = workExperience.location;
        document.getElementById('startdate').value = workExperience.startdate;
        document.getElementById('enddate').value = workExperience.enddate || ''; 
        document.getElementById('description').value = workExperience.description || ''; 
      } catch (error) {
        console.error('Error while populating form:', error.message);
      }
    }

    document.addEventListener('DOMContentLoaded', () => {
        
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
    
        
        if (id) {
            populateFormWithWorkExperience(id);
        } else {
            console.error('No ID found in URL');
        }
    });
    