// const body = document.body,
//     scrollWrap = document.getElementsByClassName("main")[0],
//     height = scrollWrap.getBoundingClientRect().height - 1,
//     speed = 0.04;

// var offset = 0;

// body.style.height = Math.floor(height) + "px";

// function smoothScroll() {
//     offset += (window.pageYOffset - offset) * speed;

//     var scroll = "translateY(-" + offset + "px) translateZ(0)";
//     scrollWrap.style.transform = scroll;

//     callScroll = requestAnimationFrame(smoothScroll);
// }

// smoothScroll();



document.addEventListener('DOMContentLoaded', () => {
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
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight - 200) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth - 200)
        );
    }

    window.addEventListener('scroll', checkSections);
    checkSections();
});