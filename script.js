// Select all navbar links
const navLinks = document.querySelectorAll(".nav-links a");


// Close actions or future mobile menu logic
navLinks.forEach(link => {

    link.addEventListener("click", () => {

        console.log("Navigating to:", link.textContent);

    });

});


// Change navbar shadow while scrolling
window.addEventListener("scroll", () => {

    const navbar = document.querySelector("nav");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 4px 15px rgba(0, 0, 0, 0.3)";

    } else {

        navbar.style.boxShadow = "none";

    }

});