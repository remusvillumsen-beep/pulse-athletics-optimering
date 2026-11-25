const track = document.querySelector(".benefits-track");
const cards = document.querySelectorAll(".benefit-card");
const buttons = document.querySelectorAll(".benefits-navigation button");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const index = Array.from(cards).indexOf(entry.target);

            buttons.forEach((button, i) => {
                button.setAttribute(
                    "aria-current",
                    i === index ? "true" : "false"
                );
            });
        }
    });
}, {
    root: track,
    threshold: 0.6
});

cards.forEach((card) => observer.observe(card));