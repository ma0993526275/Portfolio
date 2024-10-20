
document.addEventListener('DOMContentLoaded', () => {
    const texts = [
        "Hello, Iam Mohammed Ali",
        "front-end and back-end.",
        "using laravel",
        "responsive web applications"
    ];
    const container = document.getElementById('typing-container');
    let textIndex = 0;
    let charIndex = 0;

    function type() {
        const currentText = texts[textIndex];
        container.textContent = currentText.substring(0, charIndex);
        charIndex++;
        
        if (charIndex > currentText.length) {
            charIndex = 0; // Reset character index for the next text
            textIndex = (textIndex + 1) % texts.length; // Move to the next text
        }

        setTimeout(type, 170); // Adjust typing speed here
    }

    type();
});
