document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('modified').textContent = document.lastModified;

const temperature = 8;
const windSpeed = 12;

function calculateWindChill(t, s) {
    return 13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16);
}

const chillDisplay = document.getElementById('windchill');

if (temperature <= 10 && windSpeed > 4.8) {
    const chill = calculateWindChill(temperature, windSpeed).toFixed(1);
    chillDisplay.textContent = chill + " °C";
} else {
    chillDisplay.textContent = "N/A";
}