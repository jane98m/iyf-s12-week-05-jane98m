// Get elements by ID
const header = document.getElementById("main-header");
const form = document.getElementById("contact-form");

// Get elements by Class
const titles = document.getElementsByClassName("title");
const contents = document.getElementsByClassName("content");
const navLinks = document.getElementsByClassName("nav-link");

// Get elements by Tag
const paragraphs = document.getElementsByTagName("p");

// Get elements with querySelector
const firstTitle = document.querySelector(".title");
const allContents = document.querySelectorAll(".content");

// Change text
firstTitle.textContent = "Updated Article Title";

// Add highlight class to first paragraph
paragraphs[0].classList.add("highlight");

// Change style
header.style.backgroundColor = "#f0f0f0";

// Form submit
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    console.log("Name:", name);
    console.log("Email:", email);
    alert("Form submitted! Name: " + name);
});
