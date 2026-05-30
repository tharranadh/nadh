document.addEventListener("DOMContentLoaded", function () {
    const user = localStorage.getItem("username");
    console.log("Username di localStorage:", user); // cek ini dulu

    if (user) {
        document.getElementById("user-info").innerText = "Halo, " + user;
        document.getElementById("authArea").innerHTML = `
            <button onclick="logout()" class="nav-cta" style="color:black;">Logout</button>
        `;
    }

    window.logout = function() {
        localStorage.removeItem("username");
        location.reload();
    };
});
