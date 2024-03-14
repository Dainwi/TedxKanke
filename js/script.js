document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const dropdownButtons = document.querySelectorAll('.dropdown > button');
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');

    // Toggle mobile menu visibility
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Show dropdown menus on hover and close when mouse leaves dropdown area
    dropdownButtons.forEach((button, index) => {
        const dropdownMenu = dropdownMenus[index];

        button.addEventListener('mouseenter', () => {
            dropdownMenu.classList.remove('hidden');
        });

        button.addEventListener('mouseleave', () => {
            dropdownMenu.classList.add('hidden');
        });

        dropdownMenu.addEventListener('mouseenter', () => {
            dropdownMenu.classList.remove('hidden');
        });

        dropdownMenu.addEventListener('mouseleave', () => {
            dropdownMenu.classList.add('hidden');
        });
    });
});