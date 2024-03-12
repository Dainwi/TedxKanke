document.getElementById('menu-toggle').addEventListener('click', function () {
    var mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu.style.display === 'block' || mobileMenu.style.display === '') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'block';
    }
});

// Close menu
document.addEventListener('click', function (e) {
    var mobileMenu = document.getElementById('mobile-menu');
    var menuToggle = document.getElementById('menu-toggle');
    if (!mobileMenu.contains(e.target) && e.target !== menuToggle) {
        mobileMenu.style.display = 'none';
    }
});

// Toggle dropdown menu on hover
document.querySelectorAll('.dropdown').forEach(dropdown => {
    const button = dropdown.querySelector('button');
    const menu = dropdown.querySelector('.dropdown-menu');

    dropdown.addEventListener('mouseenter', () => {
        menu.classList.remove('hidden');
    });

    dropdown.addEventListener('mouseleave', () => {
        menu.classList.add('hidden');
    });
});
