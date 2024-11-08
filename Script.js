function showEnrollForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('enroll-form').style.display = 'block';
    document.getElementById('welcome-message').textContent = 'Enroll Now!';
}

function showLoginForm() {
    document.getElementById('enroll-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('welcome-message').textContent = 'Welcome Back!';
}

function signup(event) {
    event.preventDefault();

    const name = document.getElementById('enroll-name').value;
    const studId = document.getElementById('enroll-studentid').value;
    const studEmail = document.getElementById('email').value;
    const studCourse = document.getElementById('course').value;
    const studYrLvl = document.getElementById('yearlvl').value;
    const studBirthdate = document.getElementById('birthdate').value;
    const studPassword = document.getElementById('enroll-password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = users.some(user => user.studId === studId);
    if (userExists) {
        alert('Student ID already exists. Please use a different ID.');
        return;
    }

    const newUser = {
        name,
        studId,
        studEmail,
        studCourse,
        studYrLvl,
        studBirthdate,
        studPassword
    };
    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));

    alert('Enrolled Successfully, Welcome to the International State College of the Philippines');
        
    showLoginForm();

    form.reset();
}

function login(event) {
    event.preventDefault();

    const studId = document.getElementById('studentid').value;
    const studPassword = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userFound = users.some(user => user.studId === studId && user.studPassword === studPassword);

    if (userFound) {
        alert('Login Successful');
        window.location.href = "Dashboard.html";
    } else {
        alert('Invalid Student ID or Password');
    }
}

document.getElementById('logoutBtn').addEventListener('click', () => {
    window.location.href = "Index.html";
})

