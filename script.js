//your JS code here. If required.
function updateTimer() {
    const timer = document.getElementById("timer");
    const now = new Date();

    timer.textContent = now.toLocaleDateString() + ", " +
                        now.toLocaleTimeString();
}

updateTimer();
setInterval(updateTimer, 1000);