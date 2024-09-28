// For login
var lBtn = document.getElementById('loginBtn');
console.log(lBtn);
lBtn.addEventListener('click', function() {
    // Take inputs by id
    var lname = document.getElementById('loginName') .value;
    var lemail = document.getElementById('loginEmail').value;
    var lpassword = document.getElementById('loginPass').value;

    // Fetch users from localStorage
    var storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if user exists in localStorage
    var isUserValid = storedUsers.some(function(user) {
        return user.name === lname && user.email === lemail && user.password === lpassword ;
    });

    if (isUserValid) {
        console.log('Login success');
        // Redirect to main page after successful login
        window.location.href = "main.html";
    } else {
        console.log('Invalid credentials');
        alert('Invalid email or password');
    }

    // Reset the input fields after login attempt
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPass').value = '';
});





