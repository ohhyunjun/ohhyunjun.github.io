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
    // -- CUSTOM SCRIPT FOR MODAL HISTORY --
    // 뒤로가기 버튼으로 모달 닫기 기능 추가

    const portfolioModals = document.querySelectorAll('.portfolio-modal');

    portfolioModals.forEach(modal => {
        // 1. 모달이 완전히 표시된 후 브라우저 히스토리에 #modal 상태를 추가합니다.
        modal.addEventListener('shown.bs.modal', () => {
            if (window.location.hash !== '#modal') {
                // 현재 URL에 #modal이 없다면 히스토리 상태를 추가합니다.
                history.pushState({ modalOpen: true }, null, '#modal');
            }
        });

        // 3. 모달이 닫힐 때(X 버튼, 바깥 클릭 등) 히스토리 상태를 정리합니다.
        modal.addEventListener('hidden.bs.modal', () => {
            // URL에 #modal이 남아있다면, 이는 뒤로가기 버튼이 아닌 다른 방법으로 닫혔다는 의미입니다.
            if (window.location.hash === '#modal') {
                // history.back()을 호출하여 #modal 상태를 히스토리에서 제거합니다.
                // 이렇게 하면 주소창이 깔끔해지고, 모달이 닫힌 후 뒤로가기를 눌렀을 때 이전 페이지로 정상 이동합니다.
                history.back();
            }
        });
    });

    // 2. 뒤로가기/앞으로가기 버튼을 눌러 popstate 이벤트가 발생했을 때 실행됩니다.
    window.addEventListener('popstate', (event) => {
        // 현재 열려있는 모달이 있는지 확인합니다. (Bootstrap은 열린 모달에 'show' 클래스를 추가합니다.)
        const openModal = document.querySelector('.modal.show');
        if (openModal) {
            // Bootstrap Modal 인스턴스를 가져와 hide() 메서드를 호출하여 모달을 닫습니다.
            const modalInstance = bootstrap.Modal.getInstance(openModal);
            if (modalInstance) {
                modalInstance.hide();
            }
        }
    });
});
