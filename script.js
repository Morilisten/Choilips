//漢堡選單
const menuBtn = document.getElementById("menuBtn");
const hamburgerMenu = document.getElementById("hamburgerMenu");

menuBtn.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
});

const menuLinks = hamburgerMenu.querySelectorAll("a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburgerMenu.classList.remove("active");
    });
});

