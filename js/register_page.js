const registerButton = document.querySelector('.register-button');
const closeModalButton = document.querySelector(".close")

let canSendRequest = true;

registerButton.addEventListener('click', () => {
    const userEmail = document.querySelector('#email').value
    const userPassword = document.querySelector('#password').value
    const userPasswordConfirmation = document.querySelector('#password-confirmation').value
    const userName = document.querySelector('#name').value

    if (validatePassword(userPassword, userPasswordConfirmation) === false) return;
    
    if (canSendRequest) validateRegister(userEmail, userName, userPassword);
})

closeModalButton.addEventListener('click', closeModal)

function validatePassword(password, passwordConfirmation) {
    if (password !== passwordConfirmation) {
        showModal('Passwords do not match')
        return false;
    }
}

async function validateRegister(email, name, password) {
    canSendRequest = false;
    const url = "http://localhost:8080/api/user/save";
    fetch(url, {
    method: "POST",
    body: JSON.stringify({
    email: email,
    name: name,
    password: password
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
}).then(response => { 
    if (response.status === 200) {
        window.location.href = "../html/login.html";
        return;
    }
    response.text().then(text => showModal(text))
});

}

function showModal(errorMessage) {
    document.getElementById('errorMessage').innerText = errorMessage;
    document.getElementById('errorModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('errorModal').style.display = 'none';
    canSendRequest = true;
}

