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

//scroll change color transition
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    navbar.style.backgroundColor = "rgba(53, 53, 166, 0.8)";
  } else {
    navbar.style.backgroundColor = "#3535a6";
  }
});

// Add padding to the h1 element when a link in the navbar is clicked
document.querySelectorAll("#navbar a").forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    var targetId = this.getAttribute("href").substring(1); // Get the target element's ID
    var targetElement = document.getElementById(targetId);
    var navbarHeight = document.getElementById("navbar").offsetHeight;

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - navbarHeight,
        behavior: "smooth",
      });

      var h1Element = document.querySelector("h1");
      h1Element.style.paddingTop = "1rem";
    }
  });
});

//Hamburger button
const hamburger = document.querySelector(".hamburger");
const menubar = document.querySelector(".menubar");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  menubar.classList.toggle("active");
});

document.querySelectorAll(".menulink").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menubar.classList.remove("active");
  });
});
