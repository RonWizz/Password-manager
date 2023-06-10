function generatePassword() {
  var length = 12;
  var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
  var password = '';

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  var passwordElement = document.getElementById('generatedPassword');
  passwordElement.textContent = password;
}

function savePassword() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  
  if (email.trim() === '' || password.trim() === '') {
    alert('Please enter both email and password!');
    return;
  }
  
  // Here you can implement the logic to securely store the email and password
  alert('Password saved successfully!');
}
