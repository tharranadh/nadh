document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "heri" && password === "123") {
        localStorage.setItem("username", username);
        window.location.href = "/nadh/index.html";
    } else {
        alert("Username atau Password salah!");
    }
});
