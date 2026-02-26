// Digital Clock
function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("clock").innerText =
        hours + ":" + minutes + ":" + seconds;
}

setInterval(updateClock, 1000);
updateClock();


// Countdown Timer (New Year)
function updateCountdown() {
    const newYear = new Date("January 1, 2027 00:00:00").getTime();
    const now = new Date().getTime();

    const gap = newYear - now;

    const days = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hours = Math.floor((gap / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((gap / (1000 * 60)) % 60);
    const seconds = Math.floor((gap / 1000) % 60);

    document.getElementById("countdown").innerText =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}

setInterval(updateCountdown, 1000)
