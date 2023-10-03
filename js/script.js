score = 0;
cross = true;

// keyevents
document.addEventListener("keydown", (e) => {
    console.log(e.key);
    if (e.key === "ArrowUp") {
        wonderWoman = document.querySelector(".wonderWoman");
        wonderWoman.classList.add("animateWonderWoman");
        setTimeout(() => {
            wonderWoman.classList.remove("animateWonderWoman")
        }, 700);
    }
    if (e.key === "ArrowRight") {
        wonderWoman = document.querySelector(".wonderWoman");
        wonderWomanX = parseInt(window.getComputedStyle(wonderWoman, null).getPropertyValue("left"));
        wonderWoman.style.left = (wonderWomanX + 100) + "px";
    }
    if (e.key === "ArrowLeft") {
        wonderWoman = document.querySelector(".wonderWoman");
        wonderWomanX = parseInt(window.getComputedStyle(wonderWoman, null).getPropertyValue("left"));
        wonderWoman.style.left = (wonderWomanX - 100) + "px";
    }
});

// collision detection
setInterval(() => {
    wonderWoman = document.querySelector(".wonderWoman");
    gorgan = document.querySelector(".gorgan");
    gameOver = document.querySelector(".gameOver");

    wonderWomanX = parseInt(window.getComputedStyle(wonderWoman, null).getPropertyValue("left"));
    wonderWomanY = parseInt(window.getComputedStyle(wonderWoman, null).getPropertyValue("bottom"));

    gorganX = parseInt(window.getComputedStyle(gorgan, null).getPropertyValue("left"));
    gorganY = parseInt(window.getComputedStyle(gorgan, null).getPropertyValue("bottom"));

    offsetX = Math.abs(wonderWomanX - gorganX);
    offsetY = Math.abs(wonderWomanY - gorganY);


    if (offsetX < 75 && offsetY < 30) {
        gameOver.style.visibility = "visible";
        gorgan.classList.remove("animateGorgan")
    }
    else if (offsetX < 75 && cross) {
        score += 1;
        updatedScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);

        setTimeout(() => {
            animationDuration = gorganX = parseFloat(window.getComputedStyle(gorgan, null).getPropertyValue("animation-duration"));
            newDuration = animationDuration - 0.2;
            gorgan.style.animationDuration = newDuration + "s";
        }, 500);
    }

}, 10);

function updatedScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}