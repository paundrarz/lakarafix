function validateForm() {
    var emailInput = document.getElementById("email").value;
    if (!emailInput.endsWith("@gmail.com")) {
        alert("Email must end with @gmail.com");
        return false; 
    }
    return true; 
}
