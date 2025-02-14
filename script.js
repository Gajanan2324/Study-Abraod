document.addEventListener("DOMContentLoaded", function () {
    // Apply Form Submission
    const applyForm = document.getElementById("apply-form");
    if (applyForm) {
        applyForm.addEventListener("submit", function (event) {
            event.preventDefault();
            document.getElementById("success-message").classList.remove("hidden");
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000);
        });
    }

    // Contact Form Submission
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            document.getElementById("contact-success").classList.remove("hidden");
        });
    }
});
