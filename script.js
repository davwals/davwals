document.addEventListener('DOMContentLoaded', (event) => {
    // Initialize Feather icons
    feather.replace();

    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});
