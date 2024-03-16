window.addEventListener("DOMContentLoaded", verifyUserLogin);

document.querySelector(".save-task").addEventListener("click", saveTask);
document
  .querySelector(".userIcon")
  .addEventListener("click", renderAvatarInput);

async function saveTask() {
  const userEmail = localStorage.getItem("email");
  const taskName = document.querySelector("#task-name").value.trim();
  const taskDescription = document
    .querySelector("#task-description")
    .value.trim();

    if (taskName === null || taskName === "") {
      renderErrorMessage("Empty field.", "Task name must be filled.")
      return;
    }

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
      return;
    }
    if (response.status === 409) {
      renderErrorMessage("Conflict.", "You can't create more than 1 task with same name.")
      return;
    }
    renderErrorMessage("Server error.", "Occurred an error in server. code: " + response.status)
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
    window.location.href = "/html/login.html";
  }
  startApplication(email);
}

async function verifyIfEmailIsRegistered(email) {
  return fetch(
    "http://localhost:8080/api/user/verifyEmail?email=" + email
  ).then((response) => {
    if (response.status === 404) return false;
    else if (response.status === 200) return true;
    renderErrorMessage("Server error.", "Code: " + response.status);
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
      window.location.href = "/html/login.html";
    }
  });
}

function startApplication(email) {
  setUserName(email);
  getTasksAndRender(email);
  setUserAvatar(email);
  setInterval(() => {
    document.getElementById("loader").style.display = "none";
    document.querySelector(".loading").style.display = "none";
  }, 450);
}

async function setUserAvatar(email) {
  if (
    localStorage.getItem("avatar") === null ||
    localStorage.getItem("avatar") === ""
  ) {
    await getUserAvatarAndSaveInLocalStorage(email);
  }
  const avatar = localStorage.getItem("avatar");
  console.log("Avatar: " + avatar);
  document.querySelector(".userIcon").src = avatar;
}

function renderAvatarInput() {
  Swal.fire({
    title: "Enter the url to your avatar picture.",
    text: "For the moment we only accept url to online images.",
    input: "text",
    background: "#322e2e",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    color: "white",
    inputAttributes: {
      autocapitalize: "off",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      const url = result.value;
      console.log("avatar: " + url);
      fetch("http://localhost:8080/api/user/avatar", {
        method: "PATCH",
        body: JSON.stringify({
          email: localStorage.getItem("email"),
          avatar: localStorage.getItem("avatar"),
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      localStorage.setItem("avatar", url);
    }
  });
}

async function getUserAvatarAndSaveInLocalStorage(email) {
  try {
    const response = await fetch(
      "http://localhost:8080/api/user/avatar?email=" + email
    );
    if (!response.ok) {
      throw new Error("An error occurred. code: " + response.status);
    }
    const data = await response.text(); // Obtém o corpo da resposta como texto
    localStorage.setItem("avatar", data); // Salva o avatar no localStorage
  } catch (error) {
    console.error(error);
  }
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
      const taskName = event.target.parentNode
        .querySelector(".task-secondary-camp")
        .querySelector("h1").textContent;
      const taskDescription = event.target.parentNode
        .querySelector(".task-secondary-camp")
        .querySelector("p").textContent;
      removeTaskOfDatabase(taskName, taskDescription, false);
      event.target.parentNode.remove();
    }
  });
}

async function removeTaskOfDatabase(taskName, taskDescription, taskCompleted) {
  const email = localStorage.getItem("email");
  const url = "http://localhost:8080/api/task/delete";
  fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    // Corpo da requisição, se necessário
    body: JSON.stringify({
      name: taskName,
      description: taskDescription,
      completed: taskCompleted,
      userEmail: email,
    }),
  }).then((response) => {
    if (!response.ok)
      throw new Error("An error occurred. code: " + response.status);
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
  if (description === null || description === "") description = name;

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
  binImage.src = "/images/bin.png";
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
