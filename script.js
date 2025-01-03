const app = document.getElementById("app");
const templates = {
    home: document.getElementById("home").content,
    about: document.getElementById("about").content,
    pricing: document.getElementById("pricing").content,
};

function loadPage(page) {
    app.innerHTML = "";

    const content = templates[page]?.cloneNode(true);
    if (content) {
        app.appendChild(content);
    } else {
        app.innerHTML =
            "<h2>Page Not Found</h2><p>The page you requested does not exist.</p>";
    }
}

function handleNavigation(event) {
    event.preventDefault();
    const target = event.target;

    if (target.tagName === "A") {
        const page = target.getAttribute("data-page");

        loadPage(page);

        document
            .querySelectorAll("nav a")
            .forEach((link) => link.classList.remove("active"));
        target.classList.add("active");
    }
}

document.querySelector("nav").addEventListener("click", handleNavigation);

loadPage("home");
