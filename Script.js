const enterButton = document.getElementById("enterButton");

enterButton.addEventListener("click", () => {
    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.location.href = "world.html";
    }, 700);
});