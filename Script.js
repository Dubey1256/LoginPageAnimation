const form = document.getElementById("form");
const formTitle = document.getElementById("form-title");
const toggleFormLink = document.getElementById("toggle-form");
const additionalFields = document.querySelectorAll(".additional-fields");
const submitBtn = document.getElementById("submit-btn");

toggleFormLink.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior

    const isLogin = formTitle.textContent === "Login";

    if (isLogin) {
        // Switch to Sign-Up
        formTitle.textContent = "Sign Up";
        toggleFormLink.textContent = "Login";
        submitBtn.value = "Sign Up";
        additionalFields.forEach(field => toggleVisibility(field, true));
    } else {
        // Switch to Login
        formTitle.textContent = "Login";
        toggleFormLink.textContent = "Sign Up";
        submitBtn.value = "Login";
        additionalFields.forEach(field => toggleVisibility(field, false));
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission
    const isSignUp = formTitle.textContent === "Sign Up";
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (isSignUp) {
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (!firstName || !lastName || password !== confirmPassword) {
            alert("Please fill all fields correctly for Sign-Up!");
            return;
        }
    } else if (!email || !password) {
        alert("Please fill in email and password for Login!");
        return;
    }

    alert(`${isSignUp ? "Sign-Up" : "Login"} successful!`);
});

const toggleVisibility = (element, shouldShow) => {
    element.style.display = shouldShow ? "block" : "none";
};
