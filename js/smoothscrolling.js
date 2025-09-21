    document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll('.smoothscrolling');
        function checkSections() {
            sections.forEach(section => {
                // Проверяем видимую область элемента относительно окна просмотра
                if (isInViewport(section)) {
                    section.classList.remove('hidden');
                    section.classList.add('visible');
                    section.classList.remove('hidden-left');
                    section.classList.add('visible-left');
                    section.classList.remove('hidden-right');
                    section.classList.add('visible-right');
                    section.classList.remove('hidden-left-special');
                    section.classList.add('visible-left-special');
                    section.classList.remove('hidden-right-special');
                    section.classList.add('visible-right-special');
                }
            });
        }

        function isInViewport(element) {
            let rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight * 1.34 || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth * 1.34 || document.documentElement.clientWidth)
            );
        }

        window.addEventListener('scroll', checkSections);
        checkSections();
        
});