// Toggle sidebar for mobile view
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

// Main Text
const textElements = document.querySelectorAll('.hero-text-content');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    textElements.forEach((element, index) => {
        const offsetX = (x - window.innerWidth / 2) * 0.02 * (index + 1);
        const offsetY = (y - window.innerHeight / 2) * 0.02 * (index + 1);

        element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
});