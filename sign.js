document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var messageDiv = document.getElementById('message');

    if (email && password) {
        messageDiv.textContent = 'Sign in successful!';
        messageDiv.style.color = 'green';
    } else {
        messageDiv.textContent = 'Please enter both email and password.';
    }
});