document.addEventListener('DOMContentLoaded', () => {
        const popupOverlay = document.getElementById('popupOverlay');
        const popupForm = document.getElementById('popupForm');
        const closeFormBtn = document.getElementById('closeFormBtn');
        const openFormButtons = document.getElementById('openFormBtn1');


        // --- Функции для управления всплывающим окном ---
        function openPopup() {
            fadeIn(popupOverlay);
            popupOverlay.style.display = 'flex';
            // popupForm.classList.add('active');
            // Очищаем сообщения об ошибках при открытии формы
        }

        function closePopup() {
            fadeOut(popupOverlay, popupOverlay);
            // popupForm.classList.remove('active');
        }

        // --- Функции для валидации ---



        // --- Обработчики событий ---
            openFormButtons.addEventListener('click', () => {
                openPopup();
            });

        closeFormBtn.addEventListener('click', closePopup);

        popupOverlay.addEventListener('click', (event) => {
            if (event.target === popupOverlay) {
                closePopup();
            }
        });

        function fadeIn(el) {
            var opacity = 0;
            el.style.opacity = 0;
            var intervalID = setInterval(function() {

                if (opacity < 1) {
                    opacity = opacity + 0.1
                    el.style.opacity = opacity;
                } else {
                    clearInterval(intervalID);
                }
            }, 50);
        }

        function fadeOut(el, popupOverlay) {
            var opacity = 1;
            el.style.opacity = 1;
            var intervalID = setInterval(function() {

                if (opacity >= 0) {
                    opacity = opacity - 0.1
                    el.style.opacity = opacity;
                } else {
                    clearInterval(intervalID);
                    popupOverlay.style.display = 'none';
                }
            }, 50);
        }
});