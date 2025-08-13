document.getElementById('game_1').addEventListener('click', () => {
            fetch('/send-message', {
                method: 'POST'
            })
            .then(response => response.text())
            .then(data => {
                console.log(data);
                alert('Сообщение отправлено!');
            })
            .catch(error => {
                console.error('Ошибка:', error);
            });
        });


