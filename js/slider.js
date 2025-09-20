// СЛАЙДЕР

document.addEventListener("DOMContentLoaded", () => {

        // Получаем элементы DOM
        const slides = document.querySelector('.slides');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        let currentSlideIndex = 0;
        // Элементы для управления модальным окном
        const modal = document.getElementById("modal");
        const fullscreenImg = document.getElementById("fullscreen-image");
        const closeBtn = document.getElementsByClassName("close-btn")[0];

        // Функция открытия модального окна
        function openModal(imgSrc) {
            modal.classList.add("show-modal"); // Показываем модальное окно плавно
            fullscreenImg.src = imgSrc;
        }

        // Функция закрытия модального окна
        function closeModal() {
            modal.classList.remove("show-modal"); // Удаляем класс, вызывая обратную анимацию
        }

        // Открытие модального окна при клике на каждое изображение
        document.querySelectorAll(".slides img").forEach((img) => {
            img.addEventListener("click", function () {
                let largeImgUrl = this.dataset.fullsize || this.src;
                openModal(largeImgUrl);
            });
        });

        // Закрытие модального окна при клике на крестик или за пределами изображения
        closeBtn.addEventListener("click", closeModal);
        window.onclick = function(event) {
            if (event.target == modal) {
                closeModal();
            }
        };

        setInterval(() => {
            // Логика для перехода к следующему слайду
        }, 3000); // Интервал в миллисекундах (3 секунды)

        // Функция смены картинки
        function changeSlide() {
            const slideWidth = slides.children[currentSlideIndex].clientWidth;
            slides.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`;
        }

        
        // Обработчики кликов на кнопки
        // Перелистываем вперед
        nextBtn.addEventListener('click', () => {
            currentSlideIndex = (currentSlideIndex + 1) % slides.childElementCount; // Цикличное перелистывание
            changeSlide();
        });

        // Перелистываем назад
        prevBtn.addEventListener('click', () => {
            currentSlideIndex = (currentSlideIndex - 1 + slides.childElementCount) % slides.childElementCount; // Цикличное перелистывание
            changeSlide();
        });

        function autoNext() {
            if (currentSlideIndex === slides.childElementCount - 1) { // Проверяем последний слайд
                currentSlideIndex = 0; // Возвращаемся обратно к первому слайду
            } else {
                currentSlideIndex++; // Переходим к следующему слайду
            }
            changeSlide(); // Применяем новый индекс слайда
        }

        // Запускаем автоматическое переключение с интервалом в 3 секунды
        setInterval(autoNext, 3000); // Интервал 3 секунды

        // Инициализация первого слайда
        changeSlide();


});