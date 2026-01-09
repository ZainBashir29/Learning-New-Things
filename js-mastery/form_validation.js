const form = document.getElementById("signup-form");

form.addEventListener("input", (e) => {
  const input = e.target;

  if (!input.name) return;

  showError(input);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputs = form.querySelectorAll("input");

  let isValid = true;

  inputs.forEach((input) => {
    if (!input.checkValidity()) {
      showError(input);
      isValid = false;
    }
  });

  if (isValid) {
    console.log("Form submitted");
    form.reset();
    // const errorSpans = form.querySelectorAll('[role="alert"]');
    // errorSpans.forEach((span) => (span.textContent = ""));
  }
});

const showError = (input) => {
  const errorSpan = document.getElementById(`${input.id}-error`);

  if (input.validity.valid) {
    errorSpan.textContent = "";
    input.removeAttribute("aria-invalid");
  } else {
    errorSpan.textContent = input.validationMessage;
    input.setAttribute("aria-invalid", true);
  }
};
