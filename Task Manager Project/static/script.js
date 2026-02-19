document.querySelectorAll(".task-item").forEach(item => {
    item.addEventListener("mouseenter", () => {
        item.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
    });

    item.addEventListener("mouseleave", () => {
        item.style.boxShadow = "none";
    });
});
