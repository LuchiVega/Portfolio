window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

document.getElementById("toggle-modo").addEventListener("click", function () {
    document.body.classList.toggle("modo-noche");

    const icono = this.textContent.trim();
    this.textContent = icono === "🌙" ? "☀️" : "🌙";
});
