function renderMessage(status, messages) {
console.log(status);
console.log(messages);

    const alertElement = document.getElementsByClassName('alert')[0];
    const goodalertElement = document.getElementsByClassName('goodalert')[0];
    const neutralalertElement = document.getElementsByClassName('neutralalert')[0];
  
   
    if (status === 200) {
        goodalertElement.style.display = "block";
    goodalertElement.textContent = messages;
    
    return;
    }

    if (status === 1000) {
        
        neutralalertElement.style.display = "block";
        neutralalertElement.textContent = "record successfully deleted";
        
        return;
        
    }
    
    if (status === 1001) {
        neutralalertElement.style.display = "block";
        neutralalertElement.textContent = "record successfully added";
        
        return;
    }

    if (status === 1002) {
        neutralalertElement.style.display = "block";
        neutralalertElement.textContent = "record successfully edited";
        
        return;
    }

    if (status) {
        // If a status code is provided...
        alertElement.style.display = "block";
        alertElement.textContent = `${status}: ${messages}`;
        
        return;
    }
        
        // If no status code is provided, display the errors only
        alertElement.style.display = "block";
        alertElement.textContent = messages;
        
        return;


    
}
