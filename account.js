// Get the form element
const form = document.getElementById('createAccountForm');

// Add event listener for form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get the form values
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }

    // Proceed with form submission (you can add actual form submission here)
    alert('Account created successfully!');
    form.reset();
});
