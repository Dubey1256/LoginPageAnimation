document.addEventListener("DOMContentLoaded", () => {
    const toggleForm = document.getElementById("toggle-form");
    const formTitle = document.getElementById("form-title");
    const additionalFields = document.querySelector(".additional-fields");
    const submitBtn = document.getElementById("submit-btn");
    const forgotPasswordLink = document.getElementById("forgot-password");

    toggleForm.addEventListener("click", (event) => {
        event.preventDefault();
        if (toggleForm.textContent === "Sign Up") {
            // Switch to Sign-Up
            formTitle.textContent = "Sign Up";
            additionalFields.style.display = "block";
            submitBtn.value = "Sign Up";
            toggleForm.textContent = "Login";
            forgotPasswordLink.style.display = "none";
        } else {
            // Switch to Login
            formTitle.textContent = "Login";
            additionalFields.style.display = "none";
            submitBtn.value = "Login";
            toggleForm.textContent = "Sign Up";
            forgotPasswordLink.style.display = "inline";
        }
    });
});
