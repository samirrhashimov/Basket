document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector("form");
    let username = document.querySelector("#username");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let confirmPassword = document.querySelector("#confirmpassword");

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        if (password.value !== confirmPassword.value) {
            alert("Password does not match!");
            return;
        }
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let uniqueUser = users.some(
            (user) => user.username === username.value || user.email === email.value
        );
        if (uniqueUser) {
            alert("Username or email already exists!");
            return;
        }

        users.push({
            username: username.value,
            email: email.value,
            password: password.value
        });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registration successful!");
        setTimeout(() => {
        window.location.href = "login.html";
      }, 2000);
        form.reset();
    });
});