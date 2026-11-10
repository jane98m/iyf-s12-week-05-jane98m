// getElementById - returns single element
const header = document.getElementById("main-header");
console.log("getElementById:", header);

// getElementsByClassName - returns HTMLCollection (live)
const contents = document.getElementsByClassName("content");
console.log("getElementsByClassName:", contents);

// getElementsByTagName - returns HTMLCollection (live)
const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);

// querySelector - returns first match
const firstLink = document.querySelector(".nav-link");
console.log("querySelector:", firstLink);

// querySelectorAll - returns NodeList (static)
const allLinks = document.querySelectorAll(".nav-link");
console.log("querySelectorAll:", allLinks);

// Practice: Select these elements
// 1. The h1 element
const h1 = document.querySelector("h1");
console.log("1. h1:", h1);

// 2. All elements with class "content"
const allContents = document.getElementsByClassName("content");
console.log("2. All content:", allContents);

// 3. The form with id "contact-form"
const form = document.getElementById("contact-form");
console.log("3. Form:", form);

// 4. The email input
const emailInput = document.getElementById("email");
console.log("4. Email input:", emailInput);

// 5. All list items in the nav
const navItems = document.querySelectorAll("nav li");
console.log("5. Nav list items:", navItems);

// 6. The first .nav-link
const firstNavLink = document.querySelector(".nav-link");
console.log("6. First nav-link:", firstNavLink);

// 7. The last paragraph
const allParagraphs = document.querySelectorAll("p");
const lastParagraph = allParagraphs[allParagraphs.length - 1];
console.log("7. Last paragraph:", lastParagraph);

// ===== Task 9.2: Traversing the DOM =====
const nav = document.querySelector("nav");
console.log(nav.parentElement);
console.log(nav.children);
console.log(nav.firstElementChild);
console.log(nav.lastElementChild);
const article = document.querySelector("article");
console.log(article.nextElementSibling);
console.log(article.previousElementSibling);
const navLinks = nav.querySelectorAll("a");
console.log(navLinks);
const header2 = document.getElementById("main-header");
const navInsideHeader = header2.querySelector("nav");
console.log("1. Nav inside header:", navInsideHeader);
const firstNavLink2 = document.querySelector(".nav-link");
const parentLi = firstNavLink2.parentElement;
console.log("2. Parent li:", parentLi);
const article2 = document.querySelector("article");
const nextSection = article2.nextElementSibling;
console.log("3. Next sibling (section):", nextSection);
const ul = document.querySelector("ul");
const allLi = ul.children;
console.log("4. All child li:", allLi);
const footer = document.querySelector("footer");
const bodyFromFooter = footer.parentElement;
console.log("5. Body from footer:", bodyFromFooter);

// ===== Task 9.3: Modifying Content =====
// Exercise 1: Text Content
const h1_93 = document.querySelector("h1");
console.log(h1_93.textContent);
console.log(h1_93.innerText);
h1_93.textContent = "New Title";

// Exercise 2: HTML Content
const article93 = document.querySelector("article");
console.log(article93.innerHTML);
article93.innerHTML = `
  <h2>Updated Article</h2>
  <p>This is new content.</p>
`;
const userInput = `<img src="x" onerror="alert('hacked')">`;
article93.innerHTML = userInput;
article93.textContent = userInput;

// Exercise 3: Attributes
const link93 = document.querySelector(".nav-link");
console.log(link93.getAttribute("href"));
console.log(link93.href);
link93.setAttribute("href", "https://developer.mozilla.org");
link93.href = "https://developer.mozilla.org";
console.log(link93.hasAttribute("target"));
link93.removeAttribute("target");
const element93 = document.querySelector("[data-id]");
if (element93) {
  console.log(element93.dataset.id);
  console.log(element93.dataset.category);
  element93.dataset.newAttr = "value";
}

// Exercise 4: Styles
const container93 = document.querySelector(".container");
if (container93) {
  container93.style.backgroundColor = "#f0f0f0";
  container93.style.padding = "30px";
  container93.style.borderRadius = "8px";
  // Multiple styles (use classes instead when possible!)
  Object.assign(container93.style, {
    backgroundColor: "#333",
    color: "white",
    padding: "20px"
  });
  }

// ===== Task 9.4: Adding & Removing Elements =====
// Exercise 1: Creating Elements
const newParagraph94 = document.createElement("p");
newParagraph94.textContent = "This is a new paragraph!";
newParagraph94.className = "content highlight";

// Add to the page
const article94 = document.querySelector("article");
if (article94) {
  article94.appendChild(newParagraph94); // Add at end

  // Insert before another element
  const firstParagraph94 = article94.querySelector("p");
  if (firstParagraph94) {
    article94.insertBefore(newParagraph94, firstParagraph94); // Add before first p

    // Modern insertion methods
    article94.prepend(newParagraph94); // First child
    article94.append(newParagraph94); // Last child
    firstParagraph94.before(newParagraph94); // Before sibling
    firstParagraph94.after(newParagraph94); // After sibling
  }
}

// Exercise 2: Removing Elements
// Remove an element
const footer94 = document.querySelector("footer");
if (footer94) footer94.remove();

// Remove child
const nav94 = document.querySelector("nav");
if (nav94) {
  const lastLink94 = nav94.querySelector("li:last-child");
  if (lastLink94) lastLink94.parentElement.removeChild(lastLink94);
}

// Clear all children
// article94 is already created in Exercise 1, so reuse it
if (article94) {
  article94.innerHTML = ""; // Simple but rebuilds DOM
  // OR
  while (article94.firstChild) {
    article94.removeChild(article94.firstChild);
  }
}

// Exercise 3: Cloning Elements
const navItem = document.querySelector(".nav-item");
const clone = navItem.cloneNode(true);
clone.querySelector("a").textContent = "New Link";
document.querySelector(".nav-list").appendChild(clone);

// Build: Add a new nav item dynamically
function addNavItem(text, href) {
  const li = document.createElement("li");
  li.className = "nav-item";

  const link = document.createElement("a");
  link.className = "nav-link";
  link.textContent = text;
  link.href = href;

  li.appendChild(link);
  document.querySelector(".nav-list").appendChild(li);
}

addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");

// Lesson 11: Events
const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);

// Adding event listeners
button.addEventListener("click", function () {
  console.log("Button clicked!");
});

// Arrow function
button.addEventListener("click", () => {
  console.log("Clicked again!");
});

// Named function (can be removed later)
function handleClick() {
  console.log("Handled!");
}
button.addEventListener("click", handleClick);

// Remove event listener
button.removeEventListener("click", handleClick);

// Exercise 2: Event Types
const element = button;
const input = document.createElement("input");
input.placeholder = "Type here";
document.body.appendChild(input);
const form = document.createElement("form");
document.body.appendChild(form);

function handler() {
  console.log("Event happened");
}

// Mouse events
element.addEventListener("click", handler);
element.addEventListener("dblclick", handler);
element.addEventListener("mouseenter", handler);
element.addEventListener("mouseleave", handler);
element.addEventListener("mousemove", handler);

// Keyboard events
input.addEventListener("keydown", handler);
input.addEventListener("keyup", handler);
input.addEventListener("keypress", handler);

// Form events
form.addEventListener("submit", handler);
input.addEventListener("focus", handler);
input.addEventListener("blur", handler);
input.addEventListener("input", handler);
input.addEventListener("change", handler);

// Window events
window.addEventListener("load", handler);
window.addEventListener("resize", handler);
window.addEventListener("scroll", handler);

// Exercise 2: Event Types
const element = button;
const input = document.createElement("input");
input.placeholder = "Type here";
document.body.appendChild(input);
const form = document.createElement("form");
document.body.appendChild(form);

function handler() {
  console.log("Event happened");
}

// Mouse events
element.addEventListener("click", handler);
element.addEventListener("dblclick", handler);
element.addEventListener("mouseenter", handler);
element.addEventListener("mouseleave", handler);
element.addEventListener("mousemove", handler);

// Keyboard events
input.addEventListener("keydown", handler);
input.addEventListener("keyup", handler);
input.addEventListener("keypress", handler); // Deprecated

// Form events
form.addEventListener("submit", handler);
input.addEventListener("focus", handler);
input.addEventListener("blur", handler);
input.addEventListener("input", handler); // Real-time changes
input.addEventListener("change", handler); // On blur after change

// Window events
window.addEventListener("load", handler);
window.addEventListener("resize", handler);
window.addEventListener("scroll", handler);

// Build: Click Counter
let count = 0;

const counterDisplay = document.createElement("p");
counterDisplay.textContent = "Count: 0";
document.body.appendChild(counterDisplay);

const plusBtn = document.createElement("button");
plusBtn.textContent = "+";
document.body.appendChild(plusBtn);

const minusBtn = document.createElement("button");
minusBtn.textContent = "-";
document.body.appendChild(minusBtn);

const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";
document.body.appendChild(resetBtn);

function updateCounter() {
  counterDisplay.textContent = "Count: " + count;
}

plusBtn.addEventListener("click", function () {
  count++;
  updateCounter();
});

minusBtn.addEventListener("click", function () {
  if (count > 0) {
    count--;
  }
  updateCounter();
});

resetBtn.addEventListener("click", function () {
  count = 0;
  updateCounter();
});

// Exercise 1: Adding Event Listeners
const myButton = document.createElement("button");
myButton.textContent = "Click Me";
document.body.appendChild(myButton);

// Adding event listeners
myButton.addEventListener("click", function () {
  console.log("Button clicked!");
});

// Arrow function
myButton.addEventListener("click", () => {
  console.log("Clicked again!");
});

// Named function (can be removed later)
function handleClick() {
  console.log("Handled!");
}
myButton.addEventListener("click", handleClick);

// Remove event listener
myButton.removeEventListener("click", handleClick);

// Exercise 2: Event Types
const element = myButton;
const input = document.createElement("input");
input.placeholder = "Type here";
document.body.appendChild(input);
const form = document.createElement("form");
document.body.appendChild(form);

function handler() {
  console.log("Event happened");
}

// Mouse events
element.addEventListener("click", handler);
element.addEventListener("dblclick", handler);
element.addEventListener("mouseenter", handler);
element.addEventListener("mouseleave", handler);
element.addEventListener("mousemove", handler);

// Keyboard events
input.addEventListener("keydown", handler);
input.addEventListener("keyup", handler);
input.addEventListener("keypress", handler);

// Form events
form.addEventListener("submit", handler);
input.addEventListener("focus", handler);
input.addEventListener("blur", handler);
input.addEventListener("input", handler);
input.addEventListener("change", handler);

// Window events
window.addEventListener("load", handler);
window.addEventListener("resize", handler);
window.addEventListener("scroll", handler);

// Build: Click Counter
let count = 0;

const counterDisplay = document.createElement("p");
counterDisplay.textContent = "Count: 0";
document.body.appendChild(counterDisplay);

const plusBtn = document.createElement("button");
plusBtn.textContent = "+";
document.body.appendChild(plusBtn);

const minus
