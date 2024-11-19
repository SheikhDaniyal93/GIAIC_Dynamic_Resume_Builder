// Accessing form elements
const resumeForm = document.getElementById("resumeform") as HTMLFormElement;

// Input fields
const pictureInput = document.getElementById("picture") as HTMLInputElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const phoneInput = document.getElementById("phone") as HTMLInputElement;
const addressInput = document.getElementById("address") as HTMLInputElement;
const skillsInput = document.getElementById("skills") as HTMLInputElement;
const educationInput = document.getElementById("education") as HTMLTextAreaElement;
const experienceInput = document.getElementById("experience") as HTMLTextAreaElement;

// Output fields
const displayPicture = document.getElementById("displayPicture") as HTMLImageElement;
const displayName = document.getElementById("displayName") as HTMLElement;
const displayEmail = document.getElementById("displayEmail") as HTMLElement;
const displayAddress = document.getElementById("displayAddress") as HTMLElement;
const displaySkills = document.getElementById("displaySkills") as HTMLElement;
const displayEducation = document.getElementById("displayEducation") as HTMLElement;
const displayExperience = document.getElementById("displayExperience") as HTMLElement;

// Event listener for form submission
resumeForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    // Update display fields with input values
    if (pictureInput.files && pictureInput.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            if (e.target) {
                displayPicture.src = e.target.result as string;
            }
        };
        reader.readAsDataURL(pictureInput.files[0]);
    }

    displayName.textContent = nameInput.value;
    displayEmail.textContent = `Email: ${emailInput.value}`;
    displayAddress.textContent = `Address: ${addressInput.value}`;
    displaySkills.textContent = `Skills: ${skillsInput.value}`;
    displayEducation.textContent = `Education: ${educationInput.value}`;
    displayExperience.textContent = `Experience: ${experienceInput.value}`;
});
