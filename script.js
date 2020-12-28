const firstNameError = document.getElementById('firstName_error');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const lastNameError = document.getElementById('lastName_error');
const email = document.getElementById('email');
const emailError = document.getElementById('email_error');
const password = document.getElementById('password');
const passwordError = document.getElementById('password_error');

function logSubmit(){
  const firstNameInput = firstName.value;
  const lastNameInput = lastName.value;
  const emailInput = email.value;
  const passwordInput = password.value;

  if(firstNameInput === ""){
    firstNameError.innerText = "First name cannot be empty";
    firstName.className = "inputError";
    event.preventDefault();
  } else{
    firstName.className ="";
    firstNameError.innerHTML = "";
  }

  if(lastNameInput === ""){
    lastNameError.innerText = "Last name cannot be empty";
    lastName.className = "inputError";
    event.preventDefault();
  } else{
    lastName.className = "";
    lastNameError.innerHTML = "";
  }

  if(emailInput === ""){
    emailError.innerHTML = "Looks like this is not an email"
    email.className = "inputError"
    event.preventDefault();
  } else{
    email.className = "";
    emailError.innerHTML = "";
  }

  if(passwordInput === ""){
    passwordError.innerHTML = "Password cannot be empty";
    password.className = "inputError";
    event.preventDefault();
  } else{
    password.className = "";
    passwordError.innerHTML = "";
  }
}

form.addEventListener('submit', logSubmit);