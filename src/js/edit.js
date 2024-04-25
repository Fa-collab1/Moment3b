async function submitEditForm() {
  const editForm = document.getElementById('editForm');
  const formData = new FormData(editForm);
  const workExperienceData = {};
  formData.forEach((value, key) => {
    workExperienceData[key] = value;
  });

  try {
    const response = await updateWorkExperience(workExperienceData.id, workExperienceData);
    if (response.success) {
      console.log('Work experience updated successfully');
      window.location.href = '/?s=1002';
    } else {
      console.error('Failed to update work experience');
      renderMessage(response.status, response.errors);

    }
  }
  catch (error) {
    renderMessage(500, 'An error occurred while updating the work experience.');
  }
}
let workExperience;
async function populateFormWithWorkExperience(id) {
  try {
console.log("hundögat!!!");
    workExperience = await fetchWorkExperience(id);
    console.error(workExperience);
    
    document.getElementById('id').value = id;
    document.getElementById('companyname').value = workExperience.data.companyname;
    document.getElementById('jobtitle').value = workExperience.data.jobtitle;
    document.getElementById('location').value = workExperience.data.location;
    document.getElementById('startdate').value = workExperience.data.startdate;
    document.getElementById('enddate').value = workExperience.data.enddate || '';
    document.getElementById('description').value = workExperience.data.description || '';
  } catch (error) {
    try {
      console.log("hundöga5");
      console.error(workExperience)
         renderMessage(workExperience.status, workExperience.errors);
    }
    catch (error) {
      console.log("hundöga56");
      renderMessage(500, 'An error occurred while populating the form.');
    }

  }
}
async function deletePost() {
  const id = document.getElementById('id').value;
  let message;

  message = await deleteWorkExperience(id);
  console.error(message);
  if (message.status === 200) {
    window.location.href = '/?s=1000';
  }
  else {
    renderMessage(message.status, message.errors);
    console.log("kattöga2");
    console.error('message.status');
    console.error(message.status);
    console.error('message.message');
    console.error(message.message);
    console.log(message);
    console.log("kattöga4");
    try {
      console.log("kattöga5");
      renderMessage(message.status, message.errors); console.log("kattöga35");
    }
    catch (error) {
      console.log("kattöga56");
      renderMessage(500, 'An error occurred while deleting the work experience.');
    }

  }
}

document.addEventListener('DOMContentLoaded', () => {

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');


  if (id) {
    populateFormWithWorkExperience(id);
  } else {
    renderMessage(500, 'No ID found in URL');
  }
});
