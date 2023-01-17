const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("mostrar");

        } else {
            entry.target.classList.remove("mostrar")
        }

    });
});

const hiddenElements = document.querySelectorAll(".paragraphs");
hiddenElements.forEach((el) => observer.observe (el));


