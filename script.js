let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("password");
let submitBtn = document.getElementById("submit");
let messageRef = document.getElementById("message-ref");

let isUsernameValid = () => {
  const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{3,32}/gi;
  return usernameRegex.test(usernameRef.value);
};

let isPasswordValid = () => {
  const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  return passwordRegex.test(passwordRef.value);
};

usernameRef.addEventListener("input", () => {
  if (!isUsernameValid()) {
    messageRef.style.visibility = "hidden";
    usernameRef.style.cssText = "border-color: #fe2e2e; background-color: #ffc2c2";
  } else {
    usernameRef.style.cssText = "border-color: #34bd34; background-color: #c2ffc2";
  }
});

passwordRef.addEventListener("input", () => {
  if (!isPasswordValid()) {
    messageRef.style.visibility = "hidden";
    passwordRef.style.cssText = "border-color: #fe2e2e; background-color: #ffc2c2";
  } else {
    passwordRef.style.cssText = "border-color: #34bd34; background-color: #c2ffc2";
  }
});

submitBtn.addEventListener("mouseover", () => {
  if (!isUsernameValid() || !isPasswordValid()) {
    let containerRect = document.querySelector(".container").getBoundingClientRect();
    let submitRect = submitBtn.getBoundingClientRect();
    let offset = submitRect.left - containerRect.left;
    console.log(offset);
    if (offset <= 100) {
      submitBtn.style.transform = "translateX(16.25em)";
    } else {
      submitBtn.style.transform = "translateX(0)";
    }
  }
});

submitBtn.addEventListener("click", () => {
  messageRef.style.visibility = "visible";
});


/*The code you provided is a JavaScript code snippet that handles form validation and interaction for a login page. Here's an explanation of the code:

let usernameRef = document.getElementById("username");: This line retrieves the HTML element with the id "username" and assigns it to the usernameRef variable. It represents the input field for the username.

let passwordRef = document.getElementById("password");: This line retrieves the HTML element with the id "password" and assigns it to the passwordRef variable. It represents the input field for the password.

let submitBtn = document.getElementById("submit");: This line retrieves the HTML element with the id "submit" and assigns it to the submitBtn variable. It represents the submit button.

let messageRef = document.getElementById("message-ref");: This line retrieves the HTML element with the id "message-ref" and assigns it to the messageRef variable. It represents the message displayed when the form is successfully submitted.

let isUsernameValid = () => { ... }: This is a function that checks if the entered username is valid based on a regular expression. It uses the test() method to match the username value against the regular expression and returns a boolean result.

let isPasswordValid = () => { ... }: This is a function that checks if the entered password is valid based on a regular expression. It uses the test() method to match the password value against the regular expression and returns a boolean result.

usernameRef.addEventListener("input", () => { ... }: This adds an event listener to the username input field, listening for the "input" event. Whenever the user types in the username field, the provided callback function is executed. It checks if the entered username is valid and applies corresponding styles to the input field based on the validation result.

passwordRef.addEventListener("input", () => { ... }: This adds an event listener to the password input field, listening for the "input" event. Whenever the user types in the password field, the provided callback function is executed. It checks if the entered password is valid and applies corresponding styles to the input field based on the validation result.

submitBtn.addEventListener("mouseover", () => { ... }: This adds an event listener to the submit button, listening for the "mouseover" event. When the user hovers over the submit button, the provided callback function is executed. It checks if either the username or password is invalid, and if so, it adjusts the position of the submit button based on its offset from the container.

submitBtn.addEventListener("click", () => { ... }: This adds an event listener to the submit button, listening for the "click" event. When the submit button is clicked, the provided callback function is executed. It makes the message element visible to indicate successful form submission.

Overall, this code implements form validation for the username and password fields, applies styles to indicate the validity of the input, adjusts the position of the submit button based on validation, and shows a success message upon submission.*/