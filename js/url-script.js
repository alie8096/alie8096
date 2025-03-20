document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetId = this.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                history.pushState(null, "", `${targetId}`);
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // مدیریت back/forward در مرورگر
    window.addEventListener("popstate", function () {
        const path = new URLSearchParams(window.location.search).keys().next().value;
        const targetSection = document.getElementById(path);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });

    // خواندن مسیر هنگام بارگیری صفحه
    const initialPath = new URLSearchParams(window.location.search).keys().next().value;
    if (initialPath) {
        const targetSection = document.getElementById(initialPath);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    }
});

