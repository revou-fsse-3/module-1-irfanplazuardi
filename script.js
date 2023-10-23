const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const regionSelect = document.getElementById("region");
const idInput = document.getElementById("id");
const messageTextarea = document.getElementById("message");
const uploadFile = document.getElementById("upload-pokedex");

// Alert submit form
function alertFunction() {
  if (nameInput.value === "" || emailInput.value === "" || phoneInput.value === "" || regionSelect.value === "" || idInput.value === "" || messageTextarea.value === "") {
    alert("Please fill all the fields");
    return false;
  } else alert("Form submitted successfully");
  return true;
}

// Alert upload image
uploadFile.addEventListener("change", function () {
  if (this.files.length < 2) {
    alert("Please upload at least 2 images");
    this.value = "";
  } else if (this.files.length > 2) {
    alert("Do not upload more than 2 images");
    this.value = "";
  }
});
