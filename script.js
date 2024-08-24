const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);

function validateEmail() {
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.length < 3 || !emailRegex.test(email)) {
        emailError.textContent = 'Make sure email is more than 3 characters and has @ and .';
        emailInput.classList.add('error');
    } else {
        emailError.textContent = '';
        emailInput.classList.remove('error');
    }
}

function validatePassword() {
    const password = passwordInput.value;

    if (password.length < 8) {
        passwordError.textContent = 'Make sure password is more than 8 characters.';
        passwordInput.classList.add('error');
    } else {
        passwordError.textContent = '';
        passwordInput.classList.remove('error');
    }
}

const form = document.getElementById('myForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (validateEmail() && validatePassword()) {
        // Handle successful submission here
        console.log('Form submitted successfully!');
    }
});