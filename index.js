const modal = new bootstrap.Modal(document.getElementById("confirmationModal"));
const mainContainer = document.querySelector(".main-container");
const emailInput = document.getElementById("email");
const subscribeBtn = document.getElementById("subs");
const customerEmail = document.querySelector(".customer-email");
const errorLabel = document.getElementById("errorLabel");
const dismissButton = document.querySelector(".dismiss-button");

document.addEventListener("DOMContentLoaded", () => {
  subscribeBtn.addEventListener("click", () => {
    if (!validateEmail(emailInput.value)) {
      emailInput.classList.add("text-danger");
      errorLabel.classList.remove("hide");
      return null;
    }
    displayModal();
    parseSubsEmail(emailInput.value);
  });

  modal._element.addEventListener("hidden.bs.modal", () => {
    emailInput.value = "";
    emailInput.classList.remove("text-danger");
    mainContainer.classList.remove("hide");
  });
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function displayModal() {
  modal.show();

  mainContainer.classList.add("hide");
}

function parseSubsEmail(email) {
  const appendedDot = `${email}.`;
  customerEmail.textContent = appendedDot;
}
