const form = document.getElementById("signup-form");

form.addEventListener("input", (e) => {
  const input = e.target;

  if (!input.name) return;

  showError(input);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputs = form.querySelectorAll("input");

  // let isValid = true;
  let isInvalid = null;

  inputs.forEach((input) => {
    if (!input.checkValidity()) {
      showError(input);
      if (!isInvalid) isInvalid = input;
    }
  });

  if (isInvalid) {
    isInvalid.focus();
    return;
  }

  // if (isValid) {
  console.log("Form submitted");
  form.reset();
  // const errorSpans = form.querySelectorAll('[role="alert"]');
  // errorSpans.forEach((span) => (span.textContent = ""));
  // }5
});

// const showError = (input) => {
//   const errorSpan = document.getElementById(`${input.id}-error`);

//   if (input.validity.valid) {
//     errorSpan.textContent = "";
//     input.removeAttribute("aria-invalid");
//   } else {
//     errorSpan.textContent = input.validationMessage;
//     input.setAttribute("aria-invalid", true);
//   }
// };

const showError = (input) => {
  const errorSpan = document.getElementById(`${input.id}-error`);

  if (input.validity.valid) {
    errorSpan.textContent = "";
    input.removeAttribute("aria-invalid");
    input.setCustomValidity("");
    return;
  }

  let message = input.validationMessage;

  if (input.id === "password" && input.validity.tooShort) {
    message = "Password must be at least 6 charcters long";
  }

  errorSpan.textContent = message;
  input.setCustomValidity(message);
  input.setAttribute("aria-invalid", "true");
};

// const passwordInput = document.getElementById("password");
// if (passwordInput.length < 6) {
//   const passErrorSpan = form.querySelector("#password-error");
//   passErrorSpan.textContent =
//     "Password should be equal to 6 or more characters";
// }
