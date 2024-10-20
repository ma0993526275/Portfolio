// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Animate the header text
    gsap.from("header h1", { duration: 1, y: -50, opacity: 0 });

    // Animate the navigation links
    gsap.from("nav ul li", { duration: 1, x: -50, opacity: 0, stagger: 0.2 });

    // Animate the about section
    gsap.from("#about", { duration: 1, y: 50, opacity: 0, delay: 0.5 });

    // Animate the project cards
    gsap.from(".project-card", { duration: 1, scale: 0.5, opacity: 0, stagger: 0.2, delay: 1 });

    // Animate the contact section
    gsap.from("#contact", { duration: 1, y: 50, opacity: 0, delay: 1.5 });
});
