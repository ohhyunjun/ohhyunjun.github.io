/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Custom script to toggle portfolio items - Updated
    const toggleButton = document.getElementById('togglePortfolioBtn');
    const moreItemsContainer = document.getElementById('more-portfolio-items');
    const toggleButtonText = document.getElementById('toggleButtonText');
    const arrowDown = document.getElementById('arrowDown');
    const arrowUp = document.getElementById('arrowUp');

    toggleButton.addEventListener('click', () => {
        // '더보기' 버튼 상태일 때
        if (moreItemsContainer.classList.contains('d-none')) {
            moreItemsContainer.classList.remove('d-none');
            toggleButtonText.textContent = '숨기기';
            arrowDown.style.display = 'none';
            arrowUp.style.display = 'block';
            arrowUp.classList.add('rotate');
            setTimeout(() => arrowUp.classList.remove('rotate'), 400);
        // '숨기기' 버튼 상태일 때
        } else {
            moreItemsContainer.classList.add('d-none');
            toggleButtonText.textContent = '더보기';
            arrowUp.style.display = 'none';
            arrowDown.style.display = 'block';
            arrowDown.classList.add('rotate');
            setTimeout(() => arrowDown.classList.remove('rotate'), 400);
        }
    });
});