const button = document.getElementById("AlteraTema");
const html = document.documentElement;

// Garante que exista um tema inicial
if (!html.classList.contains("light-theme") && 
    !html.classList.contains("dark-theme")) {
    html.classList.add("light-theme");
}

button.addEventListener("click", () => {
    if (html.classList.contains("light-theme")) {
        html.classList.remove("light-theme");
        html.classList.add("dark-theme");
    } else {
        html.classList.remove("dark-theme");
        html.classList.add("light-theme");
    }
});

