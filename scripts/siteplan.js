document.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamic Year in Footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    }

    // 2. Simple interaction: Log to console to verify JS is working
    console.log('Site Plan loaded successfully.');
    console.log('Project: Local Filipino Street Foods');

    // 3. Optional: Add a subtle animation class to sections on load
    const sections = document.querySelectorAll('.section-card');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = 1;
        }, index * 200);
    });
});