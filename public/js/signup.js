$(document).ready(function() {
    // Getting references to our form and input
  var signUpForm = $("form.signup");
  var firstInput = $("input#first-input");
  var lastInput = $("input#last-input");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");
  
    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function(event) {
      event.preventDefault();
      console.log(firstInput);
      console.log(lastInput);
      var userData = {
        firstName: firstInput.val().trim(),
        lastName: lastInput.val().trim(),
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      if (!userData.email || !userData.password) {
        return;
      }
      // If we have an email and password, run the signUpUser function
      signUpUser(userData.email, userData.password);
      firstName.val("");
      lastName.val("");
      emailInput.val("");
      passwordInput.val("");
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(email, password) {
      $.post("/api/signup", {
        firstName: first,
        lastName: last,
        email: email,
        password: password
      })
        .then(function (data) {
          window.location.replace("/members");
          // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON.errors[0].message);
      $("#alert").fadeIn(500);
    }
  });
  