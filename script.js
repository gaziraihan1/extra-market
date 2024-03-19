let menuBtn = document.getElementById("menuBtn");
let mainMenu = document.getElementById("mainMenu");

menuBtn.addEventListener("click", () => {
    if (mainMenu.style.display === 'none') {
        mainMenu.style.display = 'block';
    } else {
        mainMenu.style.display = 'none';
    }
});
