function showUsername () {
const username = JSON.parse(localStorage.getItem("users"))?.[0]?.username;
const userDisplay = document.querySelector(".username");

userDisplay.textContent = username;
}
showUsername();
