function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        if (navLinks.style.display === "block") {
            navLinks.style.display = "none";
        } else {
            navLinks.style.display = "block"; 
        }
    }
}

