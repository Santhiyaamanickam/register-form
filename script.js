const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const submitBtn = document.getElementById("submitBtn");

function validateForm() {

    let nameValid = false;
    let emailValid = false;
    let passwordValid = false;

    // Name validation
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
    } else {
        nameError.textContent = "";
        nameValid = true;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required";
    } else if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = "Enter a valid email address";
    } else {
        emailError.textContent = "";
        emailValid = true;
    }

    // Password validation
    if (passwordInput.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
    } else {
        passwordError.textContent = "";
        passwordValid = true;
    }

    // Enable button only when all fields are valid
    submitBtn.disabled = !(nameValid && emailValid && passwordValid);
}


// Real-time validation
nameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);


// Form submission
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Registration successful!");
});