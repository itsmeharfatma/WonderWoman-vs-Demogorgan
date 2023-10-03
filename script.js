
document.addEventListener("keydown", (e) => {
    console.log(e.key);
    if (e.key === "ArrowUp") {
        ww = document.querySelector(".ww");
        ww.classList.add("animateWw");
        setTimeout(() => {
            ww.classList.remove("animateWw")
        }, 700);
    }
});