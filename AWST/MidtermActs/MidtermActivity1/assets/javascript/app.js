
document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll('.nav-link');

    function handleNavClick(event) {
 
        navLinks.forEach(link => {
            link.classList.remove('fs-4', 'costum-navlink');
        });

        event.target.classList.add('fs-4', 'costum-navlink');
    }


    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });

    const homeLink = document.querySelector('.nav-link[href="#"]');
    if (window.location.hash === "" || window.location.hash === "#") {
        homeLink.classList.add('fs-4', 'costum-navlink');
    }
});
