document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll('.smoothscrolling');
        function checkSections() {
            sections.forEach(section => {
                // Проверяем видимую область элемента относительно окна просмотра
                if (isInViewport(section)) {
                    section.classList.remove('hidden');
                    section.classList.add('visible');
                }
            });
        }

        function isInViewport(element) {
            let rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight * 1.2 || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth * 1.2 || document.documentElement.clientWidth)
            );
        }

        window.addEventListener('scroll', checkSections);
        checkSections();
        
});