$(document).ready(function() {
    // Form validation
    $('form').submit(function(event) {
      event.preventDefault();
      var name = $('#name').val();
      var email = $('#email').val();
      var password = $('#password').val();
      var message = $('#message').val();
  
      if (name.trim() === '') {
        alert('Please enter your name.');
        return false;
      }
      
      if (email.trim() === '') {
        alert('Please enter your email.');
        return false;
      } else if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
      }
  
      if (password.trim() === '') {
        alert('Please enter your password.');
        return false;
      } else if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return false;
      }
  
      if (message.trim() === '') {
        alert('Please enter your message.');
        return false;
      }
  
      // If all validations pass, submit the form
      this.submit();
    });
  
    // Function to validate email format
    function isValidEmail(email) {
      var emailRegex = /\S+@\S+\.\S+/;
      return emailRegex.test(email);
    }
  });
  