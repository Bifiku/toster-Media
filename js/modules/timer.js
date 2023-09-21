export default function startTimer(targetId, endDate) {
    const targetElement = document.getElementById(targetId);

    // Функция для обновления таймера
    function updateTimer() {
        const now = new Date();
        const timeDifference = endDate - now;

        if (timeDifference <= 0) {
            // Таймер завершен
            clearInterval(timerInterval);
            targetElement.textContent = '00:00:00'; // Отображаем только часы, минуты и секунды
            alert('Таймер завершен!');
        } else {
            const hours = String(
                Math.floor(timeDifference / (1000 * 60 * 60))
            ).padStart(2, '0');
            const minutes = String(
                Math.floor((timeDifference / (1000 * 60)) % 60)
            ).padStart(2, '0');
            const seconds = String(
                Math.floor((timeDifference / 1000) % 60)
            ).padStart(2, '0');

            // Обновите отображение времени (часы, минуты и секунды)
            targetElement.textContent = `${hours}:${minutes}:${seconds}`;
        }
    }

    // Обновляйте таймер каждую секунду
    const timerInterval = setInterval(updateTimer, 1000);
}
