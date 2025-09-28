document.addEventListener("DOMContentLoaded", () => {
  let users = JSON.parse(localStorage.getItem("users"));
  let form = document.querySelector("form");
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");

  form.addEventListener("submit", login);
  
  function login(e) {
    e.preventDefault();
    if (!users) {
      alert("No users found");
      return;
    }

    let findUser = users.find(
      (user) =>
        user.email === email.value && user.password === password.value
    );

    if (findUser) {
      alert("User logged in successfully");
      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
    } 
    
    else {
      alert("User or password is incorrect");
      return;
    }
  }

});