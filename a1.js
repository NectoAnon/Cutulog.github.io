const webApp = Telegram.WebApp;

        // Инициализация WebApp
        webApp.expand(); // Раскрываем на весь экран
        webApp.enableClosingConfirmation(); // Запрос подтверждения при закрытии

        document.getElementById('game_1').addEventListener('click', () => {
            // Отправляем данные в бота (они придут в web_app_data)
            webApp.sendData("Привет, это сообщение из WebApp!");
            
            // Альтернатива: закрыть WebApp с передачей данных
            // webApp.close(); // Если нужно просто закрыть
        });

        // Обработчик события закрытия (опционально)
        webApp.onEvent('closeButtonClicked', () => {
            console.log('WebApp закрывается');

        });
