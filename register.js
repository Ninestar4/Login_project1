var database = [];
var enter1_b1 = document.getElementById("register-bt");
var clear_bt = document.getElementById("clear1-bt");
var email = document.getElementById("email");
var password = document.getElementById("password");

function checkusedEmail(email) {
  for (var i =0;i<database.length;i++) {
    if (database[i].email == email) {
      return false;
    }
  }
  return true
}

function checkusedEmailPassword(email,password) {
  for (var i =0;i<database.length;i++) {
    if (database[i].email == email && database[i].password == password) {
      return true;
    }
  }
  return false;
}



clear_bt.addEventListener("click", function() {
  email.value = "";
  password.value = "";
})

enter1_b1.addEventListener("click", function() {
  if (email.value.length > 0 & password.value.length > 0) {
    if (checkusedEmail(email.value)) {
      var obj = {
      email: email.value,
      password: password.value
    }
    database.push(obj);
    email.value = "";
    password.value = "";
    alert("Registeration is complete!")
  }
  else {
    alert("Email already used")
  }
  }
  else if(email.value.length > 0) {
    alert("Please fill in the password")
  }
  else if(password.value.length > 0) {
    alert("Please fill in the email")
  }
  else {
    alert("Please complete the form!!!")
  }
})

password.addEventListener("keypress", function(e) {
  if (e.keyCode == 13) {
    if (email.value.length > 0 & password.value.length > 0) {
        if (checkusedEmail(email.value)) {
          var obj = {
          email: email.value,
          password: password.value
        }
        database.push(obj);
        email.value = "";
        password.value = "";
        alert("Registeration is complete!")
      }
      else {
        alert("Email already used")
      }
      }
      else if(email.value.length > 0) {
        alert("Please fill in the password")
      }
      else if(password.value.length > 0) {
        alert("Please fill in the email")
      }
      else {
        alert("Please complete the form!!!")
      }
  }

})


var enter_login = document.getElementById('register-bt-login');
var clear_login = document.getElementById('clear1-bt-login');
var email_login = document.getElementById('email-login');
var password_login = document.getElementById('password-login');

enter_login.addEventListener('click', function() {
    if (checkusedEmailPassword(email_login.value,password_login.value)) {
      console.log('Login complete!!!')
      window.location.href = 'next.html';
    }
    else {
      alert("Email or password are invalid!!!")
    }
  }
)

password_login.addEventListener('keypress',function(e) {
  if(e.keyCode == 13) {
    if (checkusedEmailPassword(email_login.value,password_login.value)) {
      console.log('Login complete!!!')
      window.location.href = 'next.html';
    }
    else {
      alert("Email or password are invalid!!!")
    }
  }
})
