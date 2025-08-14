function validation() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phoneNo = document.getElementById("phone").value;

    const nameError = nameValidation(name);
    const emailError = emailValidation(email);
    const passwordError = passwordValidation(password);
    const phonenoError = phonenoValidation(phoneNo);

    document.getElementById("nameError").innerText =
        nameError === "Name is valid" ? "" : nameError;
    document.getElementById("emailError").innerText =
        emailError === "Email is valid" ? "" : emailError;
    document.getElementById("passwordError").innerText =
        passwordError === "Password is valid" ? "" : passwordError;
    document.getElementById("phonenoError").innerText =
        phonenoError === "Phone number is valid" ? "" : phonenoError;

    return (
        nameError === "Name is valid" &&
        emailError === "Email is valid" &&
        passwordError === "Password is valid" &&
        phonenoError === "Phone number is valid"
    );
}

function nameValidation(name) {
    const regex = /^[A-Za-z\s]+$/;
    if (name.trim() === "") {
        return "Name cannot be empty";
    }
    if (!regex.test(name)) {
        return "Name can only contain letters";
    }
    return "Name is valid";
}

function emailValidation(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.trim() === "") {
        return "Email cannot be empty";
    }
    if (!regex.test(email)) {
        return "Invalid email format";
    }
    return "Email is valid";
}

function passwordValidation(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (password.trim() === "") {
        return "Password cannot be empty";
    }
    if (!regex.test(password)) {
        return "Password must be at least 8 characters, contain an uppercase letter and a number";
    }
    return "Password is valid";
}

function phonenoValidation(phoneNo) {
    const regex = /^[0-9]{10}$/;
    if (phoneNo.trim() === "") {
        return "Phone number cannot be empty";
    }
    if (!regex.test(phoneNo)) {
        return "Phone number must be exactly 10 digits";
    }
    return "Phone number is valid";
}
