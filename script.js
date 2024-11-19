// Accessing form elements
var resumeForm = document.getElementById("resumeform");
// Input fields
var pictureInput = document.getElementById("picture");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
var addressInput = document.getElementById("address");
var skillsInput = document.getElementById("skills");
var educationInput = document.getElementById("education");
var experienceInput = document.getElementById("experience");
// Output fields
var displayPicture = document.getElementById("displayPicture");
var displayName = document.getElementById("displayName");
var displayEmail = document.getElementById("displayEmail");
var displayAddress = document.getElementById("displayAddress");
var displaySkills = document.getElementById("displaySkills");
var displayEducation = document.getElementById("displayEducation");
var displayExperience = document.getElementById("displayExperience");
// Event listener for form submission
resumeForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page
    // Update display fields with input values
    if (pictureInput.files && pictureInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            if (e.target) {
                displayPicture.src = e.target.result;
            }
        };
        reader.readAsDataURL(pictureInput.files[0]);
    }
    displayName.textContent = nameInput.value;
    displayEmail.textContent = "Email: ".concat(emailInput.value);
    displayAddress.textContent = "Address: ".concat(addressInput.value);
    displaySkills.textContent = "Skills: ".concat(skillsInput.value);
    displayEducation.textContent = "Education: ".concat(educationInput.value);
    displayExperience.textContent = "Experience: ".concat(experienceInput.value);
});
