window.addEventListener("DOMContentLoaded", verifyUserLogin);

document.querySelector(".save-task").addEventListener("click", saveTask);

async function saveTask() {
  const userEmail = localStorage.getItem("email");
  const taskName = document.querySelector("#task-name").value.trim();
  const taskDescription = document
    .querySelector("#task-description")
    .value.trim();
  fetch("http://localhost:8080/api/task/save", {
    method: "POST",
    body: JSON.stringify({
      name: taskName,
      description: taskDescription,
      userEmail: userEmail,
      completed: false,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => {
    if (response.status === 200) {
      clearForm();
      createTaskCard(taskName, taskDescription, false);
    }
  });
}

function clearForm() {
  document.querySelector("#task-name").value = "";
  document.querySelector("#task-description").value = "";
}

function renderErrorMessage(title, text) {
  Swal.fire({
    title: title,
    text: text,
    icon: "error",
    background: "#322e2e",
    color: "white",
  });
}

async function verifyUserLogin() {
  const email = localStorage.getItem("email");
  const isValidEmail = await verifyIfEmailIsRegistered(email);
  if (email == "" || email == null || !isValidEmail) {
    localStorage.removeItem("email");
    window.location.href = "../html/login.html";
  }
  startApplication(email);
}

async function verifyIfEmailIsRegistered(email) {
  return fetch(
    "http://localhost:8080/api/user/verifyEmail?email=" + email
  ).then((response) => {
    if (response.status === 404) return false;
    else if (response.status === 200) return true;
    alert("Server error. code: " + response.status);
    return false;
  });
}

function quitUser() {
  Swal.fire({
    title: "Are you sure you want to leave?",
    text: "You only will need do login again.",
    icon: "warning",
    showCancelButton: true,
    cancelButtonColor: "#d33",
    confirmButtonColor: "#3085d6",
    confirmButtonText: "Yes",
    cancelButtonText: "Cancel",
    background: "#322e2e",
    color: "white",
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("email");
      window.location.href = "../html/login.html";
    }
  });
}

function startApplication(email) {
  setUserName(email);
  getTasksAndRender(email);
}

function deleteTask(event) {
  Swal.fire({
    title: "Are you sure you want delete this?",
    text: "This is irreversible.",
    icon: "warning",
    showCancelButton: true,
    cancelButtonColor: "#3085d6",
    confirmButtonColor: "#d33",
    confirmButtonText: "Delete",
    cancelButtonText: "Cancel",
    background: "#322e2e",
    color: "white",
  }).then((result) => {
    if (result.isConfirmed) {
      const taskToDelete = event.target.parentNode;
      const taskList = document.querySelector(".tasks");
      taskList.remove(taskToDelete);
    }
  });
}

function setUserName(email) {
  fetch(`http://localhost:8080/api/user/name/${email}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      document.querySelector(".userNameCamp").textContent =
        data.name.split(" ")[0];
    })
    .catch((error) => {
      console.error("There was a problem with your fetch operation:", error);
    });
}

function getTasksAndRender(email) {
  fetch(`http://localhost:8080/api/task/${email}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      renderTasks(data);
    })
    .catch((error) => {
      console.error("There was a problem with your fetch operation:", error);
    });
}

function createTaskCard(name, description, completed) {
  const tasks = document.querySelector(".tasks");

  const taskSeparator = document.createElement("section");
  taskSeparator.classList.add("task-secondary-camp");

  const taskCard = document.createElement("span");
  taskCard.classList.add("task-card");

  const taskName = document.createElement("h1");
  taskName.innerText = name;
  taskName.classList.add("task-title");

  const taskDescription = document.createElement("p");
  taskDescription.innerText = description;
  taskDescription.classList.add("task-description");

  const binImage = document.createElement("img");
  binImage.src = "../images/bin.png";
  binImage.classList.add("bin-icon");
  binImage.addEventListener("click", deleteTask);

  taskSeparator.append(taskName, taskDescription);
  taskCard.append(taskSeparator, binImage);
  tasks.append(taskCard);
}

function renderTasks(tasks) {
  tasks.forEach((task) => {
    createTaskCard(task.taskName, task.description);
  });
  document.getElementById("loader").style.display = "none";
  document.querySelector(".loading").style.display = "none";
}

function showModal(errorMessage) {
  document.getElementById("errorMessage").innerText = errorMessage;
  document.getElementById("errorModal").style.display = "block";
}

function closeModal() {
  document.getElementById("errorModal").style.display = "none";
  canSendRequest = true;
}

document.querySelector(".quitButton").addEventListener("click", quitUser);
