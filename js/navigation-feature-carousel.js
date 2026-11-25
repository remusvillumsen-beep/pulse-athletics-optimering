const track = document.querySelector(".benefits-track");
const cards = document.querySelectorAll(".benefit-card");
const buttons = document.querySelectorAll(".benefits-navigation button");

track.addEventListener("scroll", () => {

    const trackCenter = track.getBoundingClientRect().left + track.clientWidth / 2;

    let closestCard = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {

        const cardCenter = card.getBoundingClientRect().left + card.offsetWidth / 2;
        const distance = Math.abs(trackCenter - cardCenter);

        if (distance < closestDistance) {
            closestDistance = distance;
            closestCard = index;
        }

    });

    buttons.forEach((button, index) => {
        button.setAttribute(
            "aria-current",
            index === closestCard ? "true" : "false"
        );
    });

});
