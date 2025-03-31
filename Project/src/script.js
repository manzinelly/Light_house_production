
document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e)  {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo( {
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});

// Mobile navigation toggle
const nav = document.querySelector("nav ul");
const navToggle = document.createElement("button");
navToggle.textContent = "=";
navToggle.classList.add("nav-toggle");
document.querySelector("header").prepend(navToggle);

navToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Form validation
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields before submitting.");
        e.preventDefault();
    } else if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        e.preventDefault();
    } else {
        alert("Thank you for contacting us!");
    }
});

function validateEmail (email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
}

//scroll animation (revealing system)
const sections = document.querySelectorAll("section");

function revealSections() {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
            section.classList.add("visible");
        }
    });

    window.addEventListener("scroll", revealSections);
    revealSections(); // Run on page load
}