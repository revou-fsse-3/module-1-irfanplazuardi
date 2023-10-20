const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const regionSelect = document.getElementById("region");
const idInput = document.getElementById("id");
const messageTextarea = document.getElementById("message");

function alertFunction() {
  if (nameInput.value === "" || emailInput.value === "" || phoneInput.value === "" || regionSelect.value === "" || idInput.value === "" || messageTextarea.value === "") {
    alert("Please fill all the fields");
    return false;
  } else alert("Form submitted successfully");
  return true;
}
