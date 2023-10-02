// JavaScript code for basic form validation
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
	const successMessage = document.getElementById("success-message");
	
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Basic validation
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        if (name === "" || email === "") {
            alert("Please fill in all fields.");
        } else {
            successMessage.style.display = "block";
            form.reset();
        }
    });
});

function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
	
	// Store the active tab in localStorage
    localStorage.setItem('activeTab', sectionId);
}