document.getElementById("submitButton").addEventListener("click", function () {
    var name = document.getElementById("firstNameBox").value.trim();
    var lastname = document.getElementById("lastNameBox").value.trim();
    var phone = document.getElementById("phoneBox").value.trim();
    var email = document.getElementById("emailBox").value.trim();
    var message = document.getElementById("messageBox").value.trim();
    var successDiv = document.getElementById("successMessage");
    var errorDiv = document.getElementById("errorMessage");

    // Hide both messages first
    successDiv.style.display = "none";
    errorDiv.style.display = "none";

    if (name && lastname && phone && email && message) {
        successDiv.innerText = "Form submitted successfully!";
        successDiv.style.display = "block";
    } else {
        errorDiv.innerText = "Please fill in all fields.";
        errorDiv.style.display = "block";
    }
});

