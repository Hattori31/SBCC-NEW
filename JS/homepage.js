// blur navbar on scroll because why not
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');

    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Smooth scroll to top for logo and home link
document.addEventListener('DOMContentLoaded', function () {
    const logoLink = document.getElementById('logo-link');
    const homeLink = document.getElementById('home-link');

    function scrollToTop(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    if (logoLink) {
        logoLink.addEventListener('click', scrollToTop);
    }

    if (homeLink) {
        homeLink.addEventListener('click', scrollToTop);
    }
});