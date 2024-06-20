const log = console.log;
log("JS Running");
var json = [];

function getWebUsernameAndPassword() {
  var web = document.querySelector(".website").value;
  var username = document.querySelector(".username").value;
  var password = document.querySelector(".password").value;
  if (!web || !username || !password) {
    alert("Please Fill All Fields :)");
    return;
  }

  var existingData = localStorage.getItem("user-pass");
  if (existingData) {
    json = JSON.parse(existingData);
  }

  json.push({ website: web, username: username, password: password });
  localStorage.setItem("user-pass", JSON.stringify(json));
  log(`Website ${web} Username ${username} Password ${password}`);
  clearFields();

  log(localStorage.getItem("user-pass"));
}

function clearFields() {
  document.querySelector(".website").value = "";
  document.querySelector(".username").value = "";
  document.querySelector(".password").value = "";
}
function loadPasswordsFromLocalStorage() {
  const myData = localStorage.getItem("user-pass");
  if (myData) {
    const jsonData = JSON.parse(myData);
    jsonData.forEach((data) => {
      loadDataIntoTable(data.website, data.username, data.password);
    });
  }
}

function loadDataIntoTable(website, username, password) {
  var tbody = document.getElementById("tbody");
  var row = document.createElement("tr");
  var webCell = document.createElement("td");
  webCell.textContent = website;
  row.appendChild(webCell);
  var usernameCell = document.createElement("td");
  usernameCell.textContent = username;
  row.appendChild(usernameCell);
  var passwordCell = document.createElement("td");
  passwordCell.textContent = password;
  row.appendChild(passwordCell);
  tbody.appendChild(row);
}

document.addEventListener("DOMContentLoaded", function () {
  loadPasswordsFromLocalStorage();
});
