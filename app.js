(() => {
    const views = new Set(['home', 'archive', 'contact']);

    function requestedView() {
        const hash = window.location.hash.replace('#', '');
        return views.has(hash) ? hash : 'home';
    }

    function showView(view, { focus = false } = {}) {
        const targetView = views.has(view) ? view : 'home';
        const sections = document.querySelectorAll('.page-section');
        const links = document.querySelectorAll('.nav-link');
        const banner = document.querySelector('.cta-banner');
        const menu = document.querySelector('.main-navigation ul');
        const toggle = document.querySelector('.hamburger-menu');

        sections.forEach((section) => {
            const isActive = section.id === `${targetView}-page`;
            section.classList.toggle('active', isActive);
            section.hidden = !isActive;
        });

        links.forEach((link) => {
            const isActive = link.dataset.page === targetView;
            link.classList.toggle('active', isActive);
            if (isActive) link.setAttribute('aria-current', 'page');
            else link.removeAttribute('aria-current');
        });

        banner.classList.toggle('hidden', targetView !== 'home');
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');

        if (focus) {
            const heading = document.querySelector(`#${targetView}-page h1, #${targetView}-page h2`);
            if (heading) {
                heading.setAttribute('tabindex', '-1');
                heading.focus({ preventScroll: true });
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.main-navigation ul');
        const toggle = document.querySelector('.hamburger-menu');

        toggle.addEventListener('click', () => {
            const isOpen = menu.classList.toggle('open');
            toggle.setAttribute('aria-expanded', String(isOpen));
        });

        document.querySelectorAll('.nav-link').forEach((link) => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const view = link.dataset.page;
                if (window.location.hash === `#${view}`) showView(view, { focus: true });
                else window.location.hash = view;
            });
        });

        window.addEventListener('hashchange', () => {
            showView(requestedView(), { focus: true });
        });
        showView(requestedView());
    });
})();
