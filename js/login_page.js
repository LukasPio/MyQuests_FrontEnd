const loginButton = document.querySelector(".login-button");

async function doLogin() {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
  
    const url = `http://localhost:8080/api/user/verifyLogin?email=${email}&password=${password}`;
  
    fetch(url)
    .then(response => {
        if (response.ok) {
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            window.location.href = '../html/home.html';
            return response.text();
        }
        else throw new Error('Failed to verify login');
    })
    .then(data => {
        console.log(data); // "Login is valid." ou "Invalid login"
    })
    .catch(error => { console.error(error); }
    );
  }

loginButton.addEventListener("click", doLogin);
