document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Simpan akun ke localStorage
    localStorage.setItem("reg_username", username);
    localStorage.setItem("reg_email", email);
    localStorage.setItem("reg_password", password);

    alert("Registrasi berhasil! Silakan login.");
    window.location.href = "index.html";
});
