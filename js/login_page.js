const loginButton = document.querySelector(".login-button");
const closeModalButton = document.querySelector(".close");

let canSendRequest = true;

loginButton.addEventListener("click", () => {
  const userEmail = document.querySelector("#email").value;
  const userPassword = document.querySelector("#password").value;
  if (userEmail === "" || userPassword === "") {
    renderErrorMessage("Error.", "All camps must be filled.")
    return;
  }
  if (canSendRequest) {
    canSendRequest = false;
    validateLogin(userEmail, userPassword);
  }
});

closeModalButton.addEventListener("click", closeModal);

function renderErrorMessage(title, text) {
  Swal.fire({
    title: title,
    text: text,
    icon: "error",
    background: "#322e2e",
    color: "white",
  });
}

async function validateLogin(email, password) {
  const url = `http://3.89.206.94:8080/api/user/verifyLogin?email=${email}&password=${password}`;

  fetch(url).then((response) => {
    if (response.status === 200) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Logged in successfully"
      });
      return setTimeout(() => {
        localStorage.setItem('email', email)
        window.location.href = "/html/home.html";
        return;
      }, 1000)
    }
    if (response.status === 404) {
      showModal("Email isn't registered.");
      return;
    }
    if (response.status === 401) {
      showModal("Password is wrong.");
      return;
    }
    showModal("An error occurred with server. Error code: " + response.status)
  });
}

function showModal(errorMessage) {
  document.getElementById("errorMessage").innerText = errorMessage;
  document.getElementById("errorModal").style.display = "block";
}

function closeModal() {
  document.getElementById("errorModal").style.display = "none";
  canSendRequest = true;
}
