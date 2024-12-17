let countdownInterval;

document.getElementById('startButton').addEventListener('click', function() {
    const targetDate = new Date(document.getElementById('targetDate').value);
    if (isNaN(targetDate)) {
        alert("Будь ласка, виберіть правильну дату.");
        return;
    }

    clearInterval(countdownInterval); // Очищення попереднього таймера

    countdownInterval = setInterval(function() {
        const now = new Date();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('timer').innerHTML = "Час вийшов!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = String(days).padStart(2, '0');
        document.getElementById('hours').innerText = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
    }, 1000);
});