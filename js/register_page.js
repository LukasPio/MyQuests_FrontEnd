const registerButton = document.querySelector(".register-button");
const closeModalButton = document.querySelector(".close");
let canSendRequest = true;

registerButton.addEventListener("click", () => {
  const userEmail = document.querySelector("#email").value;
  const userPassword = document.querySelector("#password").value;
  const userPasswordConfirmation = document.querySelector(
    "#password-confirmation"
  ).value;
  const userName = document.querySelector("#name").value;

  if (
    !validateCamps(userName, userEmail, userPassword, userPasswordConfirmation)
  )
    return;

    createUser(userName, userEmail, userPassword)
});

async function createUser(name, email, password) {
  fetch("http://localhost:8080/api/user/save", {
    method: "POST",
    body: JSON.stringify({
      name: name,  
      email: email,
      password: password,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => {
    if (response.ok) {
      window.location.href = "/html/login.html";
      return;
    }
    if (response.status === 409) {
        showModal("This email already is registered.")
        return;
    }
    showModal("An error occurred with server. Error code: " + response.status)
  });
}

function validateCamps(name, email, password, passwordConfirmation) {
  if (
    name == "" ||
    email == "" ||
    password == "" ||
    passwordConfirmation == ""
  ) {
    showModal("All camps must be filled.");
    return false;
  }
  if (password.length < 8) {
    showModal("Password must be greater then 8.");
    return false;
  }
  if (
    name.length > 255 ||
    email.length > 255 ||
    password.length > 255 ||
    passwordConfirmation >> 255
  ) {
    showModal("Fields can have a maximum of 255 characters");
    return false;
  }
  if (password !== passwordConfirmation) {
    showModal("Passwords do not match");
    return false;
  }
  if (!validateEmail(email)) {
    showModal("Insert a valid email");
    return false;
  }
  return true;
}

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

function showModal(errorMessage) {
  document.getElementById("errorMessage").innerText = errorMessage;
  document.getElementById("errorModal").style.display = "block";
}

function closeModal() {
  document.getElementById("errorModal").style.display = "none";
  canSendRequest = true;
}

closeModalButton.addEventListener("click", closeModal);
