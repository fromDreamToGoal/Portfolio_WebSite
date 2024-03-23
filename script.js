function updateTimer() {
    // Получаем текущую дату и время
    var currentTime = new Date();
    
    // Получаем время начала учебы (примерное время)
    var startTime = new Date("2023-09-01T09:00:00"); // Замените на реальное время начала учебы

    // Вычисляем разницу во времени (в миллисекундах)
    var difference = currentTime - startTime;

    // Конвертируем миллисекунды в секунды и округляем до целого числа
    var seconds = Math.floor(difference / 1000);

    // Обновляем текст в элементе с id="timer"
    document.getElementById("timer").innerText = seconds;
}

// Вызываем функцию updateTimer() каждую секунду с помощью setInterval
setInterval(updateTimer, 1000);