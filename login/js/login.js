document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const savedUsername = localStorage.getItem("reg_username");
    const savedPassword = localStorage.getItem("reg_password");

    if (username === savedUsername && password === savedPassword) {
        localStorage.setItem("username", username);
        window.location.href = "/nadh/index.html";
    } else {
        const alertBox = document.getElementById("alertBox");
        alertBox.innerText = "Username atau Password salah!";
        alertBox.style.display = "block";
        setTimeout(() => alertBox.style.display = "none", 3000);
    }
});
