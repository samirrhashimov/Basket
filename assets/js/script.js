function showUsername () {
const username = JSON.parse(localStorage.getItem("users"))?.[0]?.username;
const userDisplay = document.querySelector(".username");

userDisplay.textContent = "Hello "  + username;
userDisplay.style.fontSize = "22px";
userDisplay.style.color = "#333"
userDisplay.style.fontStyle = "italic";
}
