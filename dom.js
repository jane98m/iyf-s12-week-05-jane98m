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
