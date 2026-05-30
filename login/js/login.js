// Ganti seluruh isi login.js dengan ini:
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Ganti dengan username & password yang kamu mau
    if (username === "heri" && password === "123") {
        localStorage.setItem("username", username);
        window.location.href = "/nadh/index.html"; // sesuai repo kamu
    } else {
        const alertBox = document.getElementById("alertBox");
        alertBox.innerText = "Username atau Password salah!";
        alertBox.style.display = "block";
        setTimeout(() => alertBox.style.display = "none", 3000);
    }
});
