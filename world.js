const items = document.querySelectorAll(".world-item");

const memoryCard = document.getElementById("memoryCard");
const memoryIcon = document.getElementById("memoryIcon");
const memoryTitle = document.getElementById("memoryTitle");
const memoryText = document.getElementById("memoryText");
const closeCard = document.getElementById("closeCard");

items.forEach(item => {

    item.addEventListener("click", () => {

        memoryIcon.textContent = item.dataset.icon;
        memoryTitle.textContent = item.dataset.title;
        memoryText.textContent = item.dataset.text;

        memoryCard.classList.add("active");
    });

});

closeCard.addEventListener("click", () => {
    memoryCard.classList.remove("active");
});