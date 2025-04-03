function hienthipassword1() {
    const passInput = document.getElementById('Passs');
    const eyeIcon = document.getElementById('eyeIcon');
    
    if (passInput.type === 'password') {
        passInput.type = 'text';
        eyeIcon.src = "https://img.icons8.com/ios-filled/50/000000/invisible.png";
    } else {
        passInput.type = 'password';
        eyeIcon.src = "https://img.icons8.com/ios-filled/50/000000/visible.png";
    }
}

function hienthipassword2() {
    const passInput = document.getElementById('Pass');
    const eyeIcon = document.getElementById('eyeIcons');
    
    if (passInput.type === 'password') {
        passInput.type = 'text';
        eyeIcon.src = "https://img.icons8.com/ios-filled/50/000000/invisible.png";
    } else {
        passInput.type = 'password';
        eyeIcon.src = "https://img.icons8.com/ios-filled/50/000000/visible.png";
    }
}

const users = new Map(JSON.parse(localStorage.getItem("users")) || []);

function dangKy() {
    let username = document.getElementById("Uname").value.trim();
    let password1 = document.getElementById("Passs").value;
    let password2 = document.getElementById("Pass").value;

    if (!username || !password1 || !password2) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    if (password1 !== password2) {
        alert("Mật khẩu không trùng khớp!");
        return;
    }

    if (users.has(username)) {
        alert("Tên đăng nhập đã tồn tại!");
        return;
    }

    users.set(username, password1);
    localStorage.setItem("users", JSON.stringify(Array.from(users.entries())));
    alert("Đăng ký thành công!");
    window.location.href = "DangNhap/DangNhap.html"; 
}

function dangNhap() {
    let username = document.getElementById("Uname").value.trim();
    let password = document.getElementById("Pass").value;

    if (!username || !password) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    if (users.has(username) && users.get(username) === password) {
        alert("Đăng nhập thành công!");
        window.location.href = "../TrangChu/TrangChu.html";
    } else {
        alert("Sai tên đăng nhập hoặc mật khẩu!");
    }
}

document.getElementById('buttons').onclick = function(event) {
    event.preventDefault();
    if (window.location.pathname.includes("index.html")) {
        dangKy();
    } else {
        dangNhap();
    }
};

// document.getElementById('buttons').onclick = function(event) {
//     event.preventDefault(); 
//     const pass = document.getElementById('Pass').value;
//     console.log(pass); 
// }
