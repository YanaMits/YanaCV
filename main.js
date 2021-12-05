function send() {
    let nameInput = document.getElementById("name");
    let companyInput = document.getElementById("company-name");
    let emailInput = document.getElementById("email");

    let newText = document.getElementById("new-text");
    if (newText == null) {
        newText = document.createElement("p");
        newText.id = "new-text";
        const footer = document.querySelector("footer");
        footer.appendChild(newText); 
    }

    if (nameInput.value === "" || companyInput.value === "" || emailInput.value === "") {
        newText.textContent = "Oops! Incorrect. Please, try again.";
    }
    else {
        newText.textContent = nameInput.value + ", " + companyInput.value + ", " + "Tack att du försökte anställa mig!"
        nameInput.value = "";
        companyInput.value = "";
        emailInput.value = "";
    }
        

}