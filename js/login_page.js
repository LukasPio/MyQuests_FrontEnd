const loginButton = document.querySelector('.login-button');
const closeModalButton = document.querySelector(".close")

let canSendRequest = true;

loginButton.addEventListener('click', () => {
    const userEmail = document.querySelector('#email').value
    const userPassword = document.querySelector('#password').value
    if (canSendRequest) {
        canSendRequest = false
        validateLogin(userEmail, userPassword)
    }
})

closeModalButton.addEventListener('click', closeModal)

async function validateLogin(email, password) {

    const url = `http://localhost:8080/api/user/verifyLogin?email=${email}&password=${password}`

    fetch(url).then(response => {
        if (response.status === 200) {
            window.location.href = '../html/home.html'
            return;
        }
        response.text().then(errorMessage => showModal(errorMessage))
    })
}

function showModal(errorMessage) {
    document.getElementById('errorMessage').innerText = errorMessage;
    document.getElementById('errorModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('errorModal').style.display = 'none';
    canSendRequest = true;
}