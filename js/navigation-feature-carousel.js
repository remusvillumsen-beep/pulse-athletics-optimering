"use strict";

const cards = document.querySelectorAll (".benefit-card");
const buttons = document.querySelectorAll (".benefits-navigation button");
const track = document.querySelector(".benefits-track")

track.addEventListener("scroll", function() {
 const firstCard = cards[0];
 const cardWidth = firstCard.offsetWidth;
const scrollPosition = track.scrollLeft;

buttons.forEach(function(button) {
    button.setAttribute("aria-current", "false");
});

if (scrollPosition > cardWidth * 3) {
    buttons[3].setAttribute("aria-current", "true");
}
else if (scrollPosition > cardWidth * 2) {
    buttons[2].setAttribute("aria-current", "true");

} else if (scrollPosition > cardWidth) {
    buttons[1].setAttribute("aria-current", "true");

} else {
    buttons[0].setAttribute("aria-current", "true");
}

});