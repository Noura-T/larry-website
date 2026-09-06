const giftButton = document.getElementById("giftButton");
const finalMessage = document.getElementById("finalMessage");
const giftHint = document.querySelector(".gift-hint");

giftButton.addEventListener("click", () => {

    finalMessage.classList.add("show");

    giftButton.style.transform = "scale(0.8)";
    giftButton.style.opacity = "0";

    giftHint.style.opacity = "0";

});